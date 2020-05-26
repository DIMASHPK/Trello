import { openAddingPanel } from "../../helpers/openAddingPanel";

export const openEditTaskPanel = () => {
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
    taskContentWrap,
    true
  );
};
