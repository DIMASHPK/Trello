import { removeFunc } from "../../helpers/removeFunc";

export const removeColumn = (buttons, items) => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => removeFunc(e, items, ".column"));
  });
};
