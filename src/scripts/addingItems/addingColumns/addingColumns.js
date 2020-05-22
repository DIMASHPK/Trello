import { addItems } from "../addingItems";
import { callBackFunction } from "./callbackFunc";

export const addNewColumn = (
  addingButtons,
  inputs,
  arrayOfItems,
  renderFunc
) => {
  addItems(addingButtons, inputs, arrayOfItems, renderFunc, callBackFunction);
};
