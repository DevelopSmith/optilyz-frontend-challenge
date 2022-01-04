import { ReactElement, useEffect, useState } from "react";
import axios from 'axios';

import Layout from '../components/layouts/main.layout';
import TasksTable from "../components/modules/TasksTable/tasks-table";
import Login from "../components/modules/Login/login";

const Home = (): ReactElement => {
  const [accessToken, setAccessToken] = useState<string>(null);

  const checkAccessToken = async () => {
    try {
      const token = await localStorage.getItem('accessToken');
      setAccessToken(token);
    } catch (e) {
      console.log('Unauthenticated user');
    }
  }

  const handleLogin = async (email, password) => {
    try {
      const { data } = await axios.post(
        'http://localhost/api/login',
        {
          email,
          password,
        }
      );

      localStorage.setItem('accessToken', data.token);
      setAccessToken(data.token);
    } catch (e) {
      console.log('Error', e);
    }
  }

  useEffect(() => {
    checkAccessToken();
  }, []);

  return (
    <Layout title="Tasks List - Code Challenge">
      {accessToken ? <TasksTable /> : <Login onLogin={handleLogin} />}
    </Layout>
  );
}

export default Home;