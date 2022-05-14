import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "~/components/AuthenticatedLayout";

const Home = React.lazy(() => import("~/scenes/Home"));

export default function AuthenticatedRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </Layout>
  );
}
