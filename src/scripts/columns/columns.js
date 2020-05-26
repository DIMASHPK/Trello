import { renderColumn } from "./renderColumn/renderColumn";
import { removeColumn } from "./removeColumn/removeColumn";
import { openNewColumnPanel } from "./openColumnPanels/openNewColumnPanel";
import { addNewColumn } from "./addNewColumn/addNewColumn";
import { openEditColumnPanel } from "./openColumnPanels/openEditColumnPanel";
import { editColumn } from "./editColumn/editColumn";
import { dragColumn } from "./dragColumn/dragColumn";

export const newColumns = {
  columns: [
    {
      id: 1,
      title: "Новая колонка",
    },
    {
      id: 2,
      title: "Старая колонка",
    },
    {
      id: 3,
      title: "Новая два колонка",
    },
    {
      id: 4,
      title: "Клонка для драга",
    },
  ],
  renderColumn: () => renderColumn(newColumns.columns),
  removeColumn: () => {
    const columnRemoveButtons = document.querySelectorAll(
      ".column__interactionPanel .removeButton"
    );

    removeColumn(columnRemoveButtons, newColumns.columns);
  },
  openNewColumnPanel: () => openNewColumnPanel(),
  addNewColumn: () => {
    const addColumnButton = document.querySelectorAll(
      ".newColumn__inputPanelWrap .addColumn"
    );
    const newColumnInput = document.querySelectorAll(
      ".newColumn__inputPanelWrap .newColumn__input"
    );
    addNewColumn(addColumnButton, newColumnInput, renderColumn);
  },
  openEditColumnPanel: () => openEditColumnPanel(),
  editColumn: () => {
    const editColumnInputs = document.querySelectorAll(
      "textarea.editColumnTitlePanel__input"
    );
    const editColumnButtons = document.querySelectorAll(
      ".column  .editColumnTitlePanel__button.ediTitle"
    );

    editColumn(editColumnInputs, editColumnButtons, newColumns.columns);
  },
  dragColumn: () => {
    const columnsList = document.querySelectorAll(".column[draggable='true']");
    dragColumn(columnsList);
  },
};
