import { openAddingPanel } from "../../helpers/openAddingPanel";

export const openEditColumnPanel = () => {
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
    titleEditPanel,
    true
  );
};
