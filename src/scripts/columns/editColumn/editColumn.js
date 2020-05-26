import { editItems } from "../../helpers/editItems";

export const editColumn = (inputs, editButtons, arrayOfItems) => {
  const callback = (id, input) => {
    const content = document.querySelector(`div.column[id="${id}"] h2`);
    const titleColumnWrapper = document.querySelector(
      `div.column[id="${id}"] .column__titleWrap`
    );
    const editPanel = document.querySelector(
      `div.column[id="${id}"] .column__editColumnTitlePanelWrapper `
    );

    content.innerHTML = input.value;
    titleColumnWrapper.classList.remove("hiddenTitle");
    editPanel.classList.remove("openInputPanel");
  };
  editItems(inputs, editButtons, arrayOfItems, callback);
};
