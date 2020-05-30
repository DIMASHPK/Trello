import { newColumns } from "../columns";
import { columnsApi } from "../../api/api";

const editItems = (inputs, editButtons) => {
  editButtons.forEach((button, i) => {
    button.addEventListener(
      "click",
      ({
        target: {
          dataset: { id },
        },
      }) => {
        if (inputs[i].value.length < 1) {
          alert("Поле не должно быть пустым");
          return;
        }

        newColumns.columns = newColumns.columns.map((item) => {
          const { fireBaseId, ...other } = item;
          if (item.id == id) {
            fetch(columnsApi(fireBaseId), {
              method: "PATCH",
              body: JSON.stringify({ ...other, title: inputs[i].value }),
            });
            return { ...item, title: inputs[i].value };
          }
          return item;
        });

        const content = document.querySelector(`div.column[id="${id}"] h2`);
        const titleColumnWrapper = document.querySelector(
          `div.column[id="${id}"] .column__titleWrap`
        );
        const editPanel = document.querySelector(
          `div.column[id="${id}"] .column__editColumnTitlePanelWrapper `
        );

        content.innerHTML = inputs[i].value;
        titleColumnWrapper
          .closest('[draggable="false"]')
          .setAttribute("draggable", "true");
        titleColumnWrapper.classList.remove("hiddenTitle");
        editPanel.classList.remove("openInputPanel");
      }
    );
  });
};

export const editColumn = (editInput, editButton) => {
  const editColumnInputs =
    editInput ||
    document.querySelectorAll("textarea.editColumnTitlePanel__input");
  const editColumnButtons =
    editButton ||
    document.querySelectorAll(
      ".column  .editColumnTitlePanel__button.ediTitle"
    );

  editItems(editColumnInputs, editColumnButtons);
};
