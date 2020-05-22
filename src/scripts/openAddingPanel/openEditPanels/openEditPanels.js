import { openAddingPanel } from "../openAddingPanel";

/* open edit panels */
export const openEditPanels = () => {
  const openEditColumnTitlePanel = document.querySelectorAll(
    ".column__interactionPanel .editButton"
  );
  const titleEditPanel = document.querySelectorAll(
    ".column__editColumnTitlePanel .column__titleWrap "
  );
  const editColumnTitleInputPanel = document.querySelectorAll(
    ".editColumnTitlePanelWrapper"
  );
  const editColumnTitleInputPanelInput = document.querySelectorAll(
    ".column__editColumnTitlePanel .editColumnTitlePanel__input"
  );
  const closeEditColumnTitleInputPanel = document.querySelectorAll(
    ".editColumnTitlePanelWrapper .cancel"
  );

  openAddingPanel(
    openEditColumnTitlePanel,
    editColumnTitleInputPanel,
    closeEditColumnTitleInputPanel,
    editColumnTitleInputPanelInput,
    titleEditPanel
  );

  const openEditTaskPanel = document.querySelectorAll(
    ".task__interactionPanel .editButton"
  );
  const editTaskTitlePanel = document.querySelectorAll(
    ".editTaskPanel__wrapper"
  );
  const taskContentWrap = document.querySelectorAll(
    ".column__task .task__wrapper "
  );
  const editTaskPanelTextarea = document.querySelectorAll(
    ".editTaskPanel__wrapper textarea"
  );
  const closeEditTaskPanel = document.querySelectorAll(
    ".editTaskPanel__button.cancel"
  );

  openAddingPanel(
    openEditTaskPanel,
    editTaskTitlePanel,
    closeEditTaskPanel,
    editTaskPanelTextarea,
    taskContentWrap
  );
};
