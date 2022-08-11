import { action, makeObservable, observable } from "mobx";

export default class Document {
  id: string = "1";

  name: string = "";

  constructor(id: string) {
    this.id = id;
    makeObservable(this, {
      id: observable,
      name: observable,
      rename: action,
    });
  }

  rename = (name: string) => {
    console.log(name);
    this.name = name;
  };
}
