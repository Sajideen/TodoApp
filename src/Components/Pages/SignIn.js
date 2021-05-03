import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/list");
    }
  }, []);

  async function logInToSystem() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://192.168.43.133:4000/api-docs/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/list");
  }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "green" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>SignIn</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter your Email"
          type="email"
          fullWidth
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter your Password"
          type="password"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submt"
          onClick={logInToSystem}
          variant="contained"
          color="primary"
          fullWidth
        >
          SignIn
        </Button>
      </Paper>
    </Grid>
  );
};
export default LogIn;
