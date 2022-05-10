import * as React from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router";
import { AuthStore } from "~/stores/AuthStore";

interface PropsType {
  authStore?: AuthStore;
}

function Login(props: PropsType) {
  const { authStore } = props;
  if (authStore.authenticated) {
    return <Redirect to="/home" />;
  }
  return (
    <div>
      <h1>Login Scenes</h1>
      <button onClick={authStore.rehydrate}>Login</button>
    </div>
  );
}

export default inject("authStore")(observer(Login));
