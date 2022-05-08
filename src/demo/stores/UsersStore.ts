import { action, makeObservable, observable } from "mobx";
import User from "~/models/User";

let uuid = 1;

export class UsersStore {
  data: Map<string, User> = new Map();

  constructor() {
    makeObservable(this, {
      data: observable,
      add: action,
    });
  }

  add = () => {
    this.data.set(`${(uuid += 1)}`, new User("Elase"));
  };
}

export const usersStore = new UsersStore();
