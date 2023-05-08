import { action, computed, observable } from "mobx";

class print {
  @observable isLight: boolean = false;
  @observable List: number[] = [];
  count = 1;

  @action
  toggleTheme = () => {
    this.isLight = !this.isLight;
    console.log(this.isLight);
  };

  @action
  pushNew = () => {
    this.count = this.count + 1;
    const shortList = [];
    shortList.push(this.count);
    this.List = shortList;
  };

  @computed
  get totalCount(): number {
    return this.List.length;
  }
}

export const NewObj = new print();
