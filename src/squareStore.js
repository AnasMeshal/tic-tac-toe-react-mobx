import { observable, makeObservable } from "mobx";

class SquareStore {
  pressedSquares = [null, null, null, null, null, null, null, null, null];
  constructor() {
    makeObservable(this, {
      pressedSquares: observable,
    });
  }
}

const squareStore = new SquareStore();
export default squareStore;
