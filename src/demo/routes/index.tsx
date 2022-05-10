import * as React from "react";
import { Route, Switch } from "react-router-dom";

const AuthenticatedRoutes = React.lazy(() => import("./authenticated"));
const Login = React.lazy(() => import("~/scenes/Login"));

export default function Routes() {
  return (
    <React.Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={AuthenticatedRoutes} />
      </Switch>
    </React.Suspense>
  );
}
