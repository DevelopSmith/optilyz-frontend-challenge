import { ReactElement, useMemo, useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';

import Table from '../Table';
import useTasksTableStyles from './tasks-table.styles';

const TasksTable = (): ReactElement => {
  const classes = useTasksTableStyles();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [totalCount, setTotalCount] = useState(5);
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([]);

  const loadTasks = async (page, pageSize) => {
    try {
      const accessToken = await localStorage.getItem('accessToken');

      const { data: loadedTasks } = await axios({
        method: 'get',
        url: `http://localhost/api/filtered-tasks?limit=${pageSize}&page=${page}`,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      });

      setTotalCount(loadedTasks.total);
      setTasks(loadedTasks.tasks);
    } catch (e) {
      console.log('Error', e);
    }
  }

  const loadColumns = async () => {
    try {
      const { data: loadedColumns } = await axios({
        method: 'get',
        url: 'http://localhost/api/tasks-table-props',
      });

      setColumns(loadedColumns.properties);
    } catch (e) {
      console.log('Error', e);
    }
  }

  const handleChangePage = (pageIndex, rowsPerPage) => {
    setPageSize(rowsPerPage);
    setPage(pageIndex);
  }

  const handleChangeRowsPerPage = (rowsPerPage) => {
    setPageSize(rowsPerPage);
    setPage(0);
  }

  useEffect(() => {
    loadColumns();
  }, []);

  useEffect(() => {
    loadTasks(page, pageSize);
  }, [page, pageSize]);

  return (<Container classes={{root: classes.container}}>
    {!!columns.length && !!tasks.length && <Table
      title="All Tasks"
      totalCount={totalCount}
      columns={columns}
      data={tasks}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
      options={{
        filtering: true,
        draggable: false,
        pageSize,
        pageSizeOptions: [5, 10, 20],
      }}
    />}
  </Container>);
}

export default TasksTable;