import { contentAndResizeOfEditItem } from "./editItemsInit";

export const openAddingPanel = (
  forOpenPanelElem,
  inputPanel,
  forClosePanelElem,
  input,
  titleEditPanel,
  forEdit = false
) => {
  /* open input panel*/
  forOpenPanelElem.forEach((itemOpen, i) => {
    itemOpen.addEventListener("click", ({ target }) => {
      document
        .querySelectorAll(".hiddenTitle, .openInputPanel, [draggable='false']")
        .forEach((elem) => {
          elem.classList.remove("hiddenTitle", "openInputPanel");
          elem.getAttribute("draggable") === "false" &&
            elem.setAttribute("draggable", "true");
        });
      target.closest('[draggable="true"') &&
        target.closest('[draggable="true"').setAttribute("draggable", "false");
      (titleEditPanel ? titleEditPanel[i] : target).classList.add(
        "hiddenTitle"
      );
      inputPanel[i].classList.add("openInputPanel");
      input[i].focus();
      forEdit && contentAndResizeOfEditItem();
    });
  });
  /* close input panel */
  forClosePanelElem.forEach((itemClose, i) => {
    const closePanel = () => {
      itemClose.closest('[draggable="false"]') &&
        itemClose
          .closest('[draggable="false"]')
          .setAttribute("draggable", "true");
      (titleEditPanel
        ? titleEditPanel[i]
        : forOpenPanelElem[i]
      ).classList.remove("hiddenTitle");
      inputPanel[i].classList.remove("openInputPanel");
      input[i].value = "";
    };
    itemClose.addEventListener("click", closePanel);
  });
};
