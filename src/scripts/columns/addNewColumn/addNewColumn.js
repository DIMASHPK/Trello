import { callBackFunction } from "./callback";
import { newColumns } from "../columns";
import { columnsMainApiUrl } from "../../api/api";

export const addNewColumn = (renderFunc) => {
  const newColumnInput = document.querySelectorAll(
    ".newColumn__inputPanelWrap .newColumn__input"
  );

  document
    .querySelectorAll(".newColumn__inputPanelWrap .addColumn")
    .forEach((button, i) => {
      button.addEventListener(
        "click",
        ({
          target: {
            dataset: { id },
          },
        }) => {
          if (newColumnInput[i].value.length < 1) {
            alert("Поле для ввода не должно быть пустым");
            return;
          }

          button.disabled = true;

          const newColumnId = new Date().getTime();

          const newElem = {
            id: `${newColumnId}`,
            title: newColumnInput[i].value,
          };
          const token = localStorage.getItem("token");

          fetch(columnsMainApiUrl(token), {
            method: "POST",
            body: JSON.stringify(newElem),
          })
            .then((res) => res.json())
            .then((res) => {
              newColumns.columns = [
                ...newColumns.columns,
                { ...newElem, fireBaseId: res.name },
              ];
              renderFunc({ ...newElem, fireBaseId: res.name });
              newColumnInput[i].value = "";
              callBackFunction(`${newColumnId}`);
              button.disabled = false;
            });
        }
      );
    });
};
