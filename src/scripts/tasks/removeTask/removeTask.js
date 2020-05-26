import { removeFunc } from "../../helpers/removeFunc";

export const removeTask = (buttons, items) => {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => removeFunc(e, items, ".task"));
  });
};
