import React from "react";
import { Container, Card, Button, TextField } from '@mui/material';
import * as Realm from "realm-web";
import { useRealmApp } from '../../RealmApp';
import { useHistory } from "react-router";


export default function LoginScreen() {
  const history = useHistory();
  const app = useRealmApp();
  const [mode, setMode] = React.useState("login");
  const toggleMode = () => {
    setMode((oldMode) => (oldMode === "login" ? "register" : "login"));
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    setEmail("sampleemail@example.com");
    setPassword("password");
  }, [mode]);

  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      if (app.logIn) {
        await app.logIn(Realm.Credentials.emailPassword(email, password));
        setIsLoggingIn(false);
        history.push('/');
      }
    } catch (err) {
      console.log('login error');
    }
  };

  const handleRegistrationAndLogin = async () => {
    const isValidEmailAddress = true;
    if (isValidEmailAddress) {
      try {
        await app.emailPasswordAuth?.registerUser(email, password);
        return await handleLogin();
      } catch (err) {
        console.log('login error');
      }
    }
  };

  return (
    <Container>
      {isLoggingIn ? (
        <div>
          Loading
        </div>
      ) : (
        <Card>
          <div>
            <h1>
              {mode === "login" ? "Log In" : "Register an Account"}
            </h1>
          </div>
          <div>
            <TextField
              type="email"
              label="Email"
              placeholder="your.email@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div>
            <TextField
              type="password"
              label="Password"
              placeholder="pa55w0rd"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          {mode === "login" ? (
            <Button onClick={() => handleLogin()}>
              Log In
            </Button>
          ) : (
            <Button
              onClick={() => handleRegistrationAndLogin()}
            >
              Register
            </Button>
          )}
          <div>
            <span>
              {mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>
            <Button
              onClick={(e) => {
                e.preventDefault();
                toggleMode();
              }}
            >
              {mode === "login" ? "Register one now." : "Log in instead."}
            </Button>
          </div>
        </Card>
      )}
    </Container>
  );
}
