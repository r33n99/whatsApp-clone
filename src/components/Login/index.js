import { Button } from "@material-ui/core";
import React from "react";
import "./login.scss";
import {auth,provider} from "../../firebase"
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";


function Login() {

    const [{ user }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then( result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(error => alert(error.message))
    }

  return <div className="login">
      <div className="login__container">
          <img  src="/images/logo.png" alt="" />
          <div className="login__text">
              <h1>Sign in to WhatsApp Clone</h1>
          </div>
          <Button type="submit" onClick={signIn}>
              Sign in With Google
          </Button>
      </div>
  </div>;
}

export default Login;
