import * as React from "react";
import { observer } from "mobx-react";
import Scene from "~/components/Scene";
import { Action } from "~/components/Action";
import NewDocumentMenu from "~/menus/NewDocumentMenu";
import SearchIcon from "~/components/icon/SearchIcon";
import Input from "~/components/Input";

const Home = () => (
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
    Home...
  </Scene>
);

export default observer(Home);
