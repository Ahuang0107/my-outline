import * as React from "react";
import { observer } from "mobx-react";
import { Route, Switch } from "react-router-dom";
import Scene from "~/components/Scene";
import { Action } from "~/components/Action";
import NewDocumentMenu from "~/menus/NewDocumentMenu";
import SearchIcon from "~/components/icon/SearchIcon";
import Input from "~/components/Input";
import Heading from "~/components/base/Heading";
import Tabs from "~/components/Tabs";
import Tab from "~/components/Tab";
import useStores from "~/hooks/useStores";
import Document from "~/models/Document";

const Home = () => {
  const { documentsStore } = useStores();
  return (
    <Scene
      actions={
        <>
          <Action>
            <Input icon={<SearchIcon size={16} />} placeholder="Search..." />
          </Action>
          <Action>
            <NewDocumentMenu />
          </Action>
        </>
      }
    >
      <Heading textAlign="center">Home...</Heading>
      <Tabs>
        <Tab to="/home" exact>
          Recently viewed
        </Tab>
        <Tab to="/home/recent">Recently updated</Tab>
        <Tab to="/home/created">Created by me</Tab>
      </Tabs>
      <Switch>
        <Route path="/home/recent">
          {documentsStore.all.map((d) => (
            <>
              <li key={d.id}>{d.id}</li>
              <button key={d.id} onClick={() => d.rename(`${d.name}1`)}>
                rename
              </button>
            </>
          ))}
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            onClick={() =>
              documentsStore.add(
                new Document(documentsStore.all.length.toString())
              )
            }
          >
            button
          </button>
        </Route>
        <Route path="/home/created">created</Route>
        <Route path="/home">home</Route>
      </Switch>
    </Scene>
  );
};

export default observer(Home);
