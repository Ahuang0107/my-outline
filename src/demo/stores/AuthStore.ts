import { action, computed, makeObservable, observable } from "mobx";

export class AuthStore {
  token: string | null | undefined = undefined;

  constructor() {
    makeObservable(this, {
      token: observable,
      authenticated: computed,
      rehydrate: action,
    });
  }

  get authenticated(): boolean {
    return this.token != null;
  }

  rehydrate = () => {
    this.token = "";
  };
}

export const authStore = new AuthStore();
