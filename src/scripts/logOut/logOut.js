import { auth } from "../auth/auth";

const renderButton = () => {
  document
    .querySelector("header")
    .insertAdjacentHTML("beforeend", '<button class="logOut">Выйти</button>');

  return document.querySelector(".logOut");
};

export const logOut = (init) => {
  renderButton().addEventListener("click", ({ target }) => {
    target.remove();
    document
      .querySelectorAll(".draggedColumn")
      .forEach((item) => item.remove());
    document.querySelector(".newColumnWrapper").style.display = "none";
    auth(init);
    delete localStorage.token;
  });
};
