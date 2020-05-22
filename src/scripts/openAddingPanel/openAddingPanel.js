import { firstPartOfInitEditPanel } from "../editItems/editItemsInit";

export const openAddingPanel = (
  forOpenPanelElem,
  inputPanel,
  forClosePanelElem,
  input,
  titleEditPanel
) => {
  /* open input panel*/
  forOpenPanelElem.forEach((itemOpen, i) => {
    itemOpen.addEventListener("click", ({ target }) => {
      (titleEditPanel ? titleEditPanel[i] : target).classList.add(
        "hiddenTitle"
      );
      inputPanel[i].classList.add("openInputPanel");
      input[i].focus();
      firstPartOfInitEditPanel();
    });
  });
  /* close input panel */
  forClosePanelElem.forEach((itemClose, i) => {
    itemClose.addEventListener("click", () => {
      (titleEditPanel
        ? titleEditPanel[i]
        : forOpenPanelElem[i]
      ).classList.remove("hiddenTitle");
      inputPanel[i].classList.remove("openInputPanel");
      input[i].value = "";
    });
  });
};
