import { renderColumn } from "./renderColumn/renderColumn";
import { removeColumn } from "./removeColumn/removeColumn";
import { openNewColumnPanel } from "./openColumnPanels/openNewColumnPanel";
import { addNewColumn } from "./addNewColumn/addNewColumn";
import { openEditColumnPanel } from "./openColumnPanels/openEditColumnPanel";
import { editColumn } from "./editColumn/editColumn";
import { dragColumn } from "./dragColumn/dragColumn";

export const newColumns = {
  columns: [],
  renderColumn: () => renderColumn(newColumns.columns),
  removeColumn: () =>
    removeColumn(
      document.querySelectorAll(".column__interactionPanel .removeButton")
    ),
  openNewColumnPanel: () => openNewColumnPanel(),
  addNewColumn: () => addNewColumn(renderColumn),
  openEditColumnPanel: () => openEditColumnPanel(),
  editColumn: () => editColumn(),
  dragColumn: () => {
    const columnsList = document.querySelectorAll(".column[draggable='true']");
    dragColumn(columnsList);
  },
};
