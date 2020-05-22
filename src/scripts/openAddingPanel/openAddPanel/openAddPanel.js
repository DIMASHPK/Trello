import { openAddingPanel } from "../openAddingPanel";

/* open edit panels */
export const openAddPanels = () => {
  const openNewColumnInputPanel = document.querySelectorAll(".newColumn h2");
  const newColumnInputPanel = document.querySelectorAll(
    ".newColumn__inputPanelWrap"
  );
  const newColumnInputPanelInput = document.querySelectorAll(
    ".newColumn__inputPanelWrap input"
  );
  const closeNewColumnInputPanel = document.querySelectorAll(
    ".newColumn__inputPanelWrap .cancel"
  );
  const openNewTaskInputPanel = document.querySelectorAll(".column__addTask");
  const newTaskInputPanel = document.querySelectorAll(".addTaskPanel__wrapper");
  const newTaskInputPanelInput = document.querySelectorAll(
    ".addTaskPanel__wrapper textarea"
  );
  const closeNewTaskInputPanel = document.querySelectorAll(
    ".addTaskPanel__wrapper .cancel"
  );

  openAddingPanel(
    openNewTaskInputPanel,
    newTaskInputPanel,
    closeNewTaskInputPanel,
    newTaskInputPanelInput
  );

  openAddingPanel(
    openNewColumnInputPanel,
    newColumnInputPanel,
    closeNewColumnInputPanel,
    newColumnInputPanelInput
  );
};
