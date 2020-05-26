import { callBackFunction } from "./callback";
import { newColumns } from "../columns";

export const addNewColumn = (addingButtons, inputs, renderFunc) => {
  addingButtons.forEach((button, i) => {
    button.addEventListener(
      "click",
      ({
        target: {
          dataset: { id },
        },
      }) => {
        if (inputs[i].value.length < 1) {
          alert("Поле для ввода не должно быть пустым");
          return;
        }
        let newElem = {
          id: newColumns.columns.length + 1,
          title: inputs[i].value,
        };
        newColumns.columns = [...newColumns.columns, newElem];

        renderFunc(newElem);
        inputs[i].value = "";
        callBackFunction(newColumns.columns, id);
      }
    );
  });
};
