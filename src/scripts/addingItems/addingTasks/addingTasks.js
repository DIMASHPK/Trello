import { addItems } from "../addingItems";
import { callBackFunction } from "./callBackFunc";

export const addNewTask = (addingButtons, inputs, arrayOfItems, renderFunc) => {
  addItems(addingButtons, inputs, arrayOfItems, renderFunc, callBackFunction);
};
