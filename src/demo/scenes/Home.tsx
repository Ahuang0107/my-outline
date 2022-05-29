import * as React from "react";
import { observer } from "mobx-react";
import Scene from "~/components/Scene";
import { Action } from "~/components/Action";
import InputSearchPage from "~/components/InputSearchPage";
import NewDocumentMenu from "~/menus/NewDocumentMenu";

const Home = () => (
  <Scene
    actions={
      <>
        <Action>
          <InputSearchPage />
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
