import { forwardRef, ReactElement } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const AddIcon = (props, ref) => <AddBox {...props} ref={ref} />;
const CheckIcon = (props, ref) => <Check {...props} ref={ref} />;
const ClearIcon = (props, ref) => <Clear {...props} ref={ref} />;
const DeleteIcon = (props, ref) => <DeleteOutline {...props} ref={ref} />;
const DetailPanelIcon = (props, ref) => <ChevronRight {...props} ref={ref} />;
const EditIcon = (props, ref) => <Edit {...props} ref={ref} />;
const ExportIcon = (props, ref) => <SaveAlt {...props} ref={ref} />;
const FilterIcon = (props, ref) => <FilterList {...props} ref={ref} />;
const FirstPageIcon = (props, ref) => <FirstPage {...props} ref={ref} />;
const LastPageIcon = (props, ref) => <LastPage {...props} ref={ref} />;
const NextPageIcon = (props, ref) => <ChevronRight {...props} ref={ref} />;
const PreviousPageIcon = (props, ref) => <ChevronLeft {...props} ref={ref} />;
const ResetSearchIcon = (props, ref) => <Clear {...props} ref={ref} />;
const SearchIcon = (props, ref) => <Search {...props} ref={ref} />;
const SortArrowIcon = (props, ref) => <ArrowDownward {...props} ref={ref} />;
const ThirdStateCheckIcon = (props, ref) => <Remove {...props} ref={ref} />;
const ViewColumnIcon = (props, ref) => <ViewColumn {...props} ref={ref} />;

const Table = (props): ReactElement => (
  <MaterialTable
    icons={{
      Add: forwardRef(AddIcon),
      Check: forwardRef(CheckIcon),
      Clear: forwardRef(ClearIcon),
      Delete: forwardRef(DeleteIcon),
      DetailPanel: forwardRef(DetailPanelIcon),
      Edit: forwardRef(EditIcon),
      Export: forwardRef(ExportIcon),
      Filter: forwardRef(FilterIcon),
      FirstPage: forwardRef(FirstPageIcon),
      LastPage: forwardRef(LastPageIcon),
      NextPage: forwardRef(NextPageIcon),
      PreviousPage: forwardRef(PreviousPageIcon),
      ResetSearch: forwardRef(ResetSearchIcon),
      Search: forwardRef(SearchIcon),
      SortArrow: forwardRef(SortArrowIcon),
      ThirdStateCheck: forwardRef(ThirdStateCheckIcon),
      ViewColumn: forwardRef(ViewColumnIcon),
    }}
    {...props}
  />
);

export default Table;