import * as React from "react";
import { inject, observer } from "mobx-react";
import { UsersStore } from "~/stores/UsersStore";

interface PropsType {
  usersStore?: UsersStore;
}

function Button(props: PropsType) {
  const { usersStore } = props;
  return <button onClick={usersStore.add}>Add User</button>;
}

export default inject("usersStore")(observer(Button));
