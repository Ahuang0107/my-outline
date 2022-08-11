import { action, computed, makeObservable, observable } from "mobx";
import Document from "~/models/Document";

export class DocumentsStore {
  data: Map<string, Document> = new Map();

  constructor() {
    makeObservable(this, {
      data: observable,
      add: action,
      remove: action,
      clear: action,
      get: action,
      all: computed,
    });
  }

  add = (item: Document): Document => {
    this.data.set(item.id, item);
    return item;
  };

  remove(id: string): void {
    this.data.delete(id);
  }

  clear() {
    this.data.clear();
  }

  get(id: string): Document | undefined {
    return this.data.get(id);
  }

  get all(): Document[] {
    return Array.from(this.data.values());
  }
}

export const documentsStore = new DocumentsStore();
