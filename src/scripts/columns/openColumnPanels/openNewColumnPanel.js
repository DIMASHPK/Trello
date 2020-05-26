import { openAddingPanel } from "../../helpers/openAddingPanel";

export const openNewColumnPanel = () => {
  const openNewColumnInputPanel = document.querySelectorAll(".newColumn h2");
  const newColumnInputPanel = document.querySelectorAll(
    ".newColumn__inputPanelWrap"
  );
  const newColumnInputPanelInput = document.querySelectorAll(
    ".newColumn__inputPanelWrap textarea"
  );
  const closeNewColumnInputPanel = document.querySelectorAll(
    ".newColumn__inputPanelWrap .cancel"
  );

  openAddingPanel(
    openNewColumnInputPanel,
    newColumnInputPanel,
    closeNewColumnInputPanel,
    newColumnInputPanelInput
  );
};
