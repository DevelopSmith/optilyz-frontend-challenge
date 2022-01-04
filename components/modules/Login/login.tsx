import React, { ReactElement, useState } from "react";
import { Button, FormControl, Input, InputLabel, Modal } from '@material-ui/core';

import useTasksTableStyles from './login.styles';

interface LoginInterface {
  onLogin: (email: string, password: string) => void;
}

const Login = (props: LoginInterface): ReactElement => {
  const classes = useTasksTableStyles();
  const { onLogin } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
  };

  return (
    <Modal
      open
    >
      <form className={classes.form}>
        <FormControl>
          <InputLabel
            className={classes.labelRoot}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <Input
            classes={{
              root: classes.input,
            }}
            id="email"
            type="email"
            onChange={handleEmailChange}
          />
        </FormControl>

        <FormControl>
          <InputLabel
            className={classes.labelRoot}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <Input
            classes={{
              root: classes.input,
            }}
            id="password"
            type="password"
            onChange={handlePasswordChange}
          />
        </FormControl>

        <Button variant="contained" color="primary" onClick={() => onLogin(email, password)}>
          Log in
        </Button>
      </form>
    </Modal>
  );
}

export default Login;