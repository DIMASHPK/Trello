import { openAddingPanel } from "../../helpers/openAddingPanel";

export const openNewTaskPanel = () => {
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
};
