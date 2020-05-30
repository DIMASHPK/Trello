import { preloader } from "../preloader/preloader";
import { logOut } from "../logOut/logOut";

const fadeOut = (init, idToken) => {
  let opacity = 1;
  let timer = setInterval(() => {
    if (opacity > 0) {
      document.querySelector("section.auth").style.opacity = opacity;
      opacity = opacity - 0.1;
    } else {
      document.querySelector("section.auth").remove();
      init(idToken);
      logOut(init);
      clearInterval(timer);
    }
  }, 50);
};

const authHTML = () => `<div class="auth__wrapper">
<h2 class="auth__title">Kanbann board auth</h2>
<form class="auth__form">
    <div className="auth__loginWrap">
        <label for="login" class="auth__label">Email: dima@gmail.com</label>
        <input type="email" id="login" class="auth__login"/>
    </div>
    <div className="auth__passwordWrap">
        <label for="password" class="auth__label">Password: shupyk</label>
        <input type="password" id="password" class="auth__password"/>
    </div>
    <button className="auth__submit">login</button>
</form>
</div>
`;

const authMe = (email, password, init) => {
  if (login.length < 1 || password.length < 1) {
    alert("Поля не могу быть пустыми");
    return;
  }

  const apiKey = "AIzaSyB49C_NR-TfAw8_mFCH1C6HAflHjEHCnqc";

  document
    .querySelector(".auth__wrapper")
    .insertAdjacentHTML(
      "afterbegin",
      `<div class="preloader__wrapper">${preloader()}</div>`
    );

  fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  )
    .then((res) => (res.ok ? res.json() : false))
    .then((res) => {
      if (res) {
        fadeOut(init, res.idToken);
        localStorage.setItem("token", res.idToken);
      } else {
        document
          .querySelector(".auth__title")
          .insertAdjacentHTML(
            "afterend",
            `<p class="auth__error">Данные для входа введенны не верно</p>`
          );

        document.querySelector(".preloader__wrapper").remove();
      }
    });
};

export const auth = (init) => {
  const section = document.createElement("section");
  section.classList.add("auth");
  section.innerHTML = authHTML();

  document.querySelector(".mainWrapper").append(section);

  document
    .querySelector("section form.auth__form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      const email = e.target.querySelector('input[type="email"]').value;
      const password = e.target.querySelector('input[type="password"]').value;
      authMe(email, password, init);
    });
};
