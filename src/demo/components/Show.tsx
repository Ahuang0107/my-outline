import * as React from "react";
import { inject, observer } from "mobx-react";
import { UsersStore } from "~/stores/UsersStore";

interface PropsType {
  usersStore?: UsersStore;
}

function Show(props: PropsType) {
  const { usersStore } = props;
  const users = [];
  usersStore.data.forEach((value) => users.push(value.name));
  return <p>{users.toString()}</p>;
}

export default inject("usersStore")(observer(Show));
