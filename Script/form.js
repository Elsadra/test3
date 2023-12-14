let d = document;
let inputPassword = d.querySelector(".input-password");
let iconPasswordLogin = d.querySelector(".icon-password-login");
let iconPasswordSignup = d.querySelector(".icon-password-signup");
let iconPasswordSignup2 = d.querySelector(".icon-password-signup-2");
let login = d.querySelector(".login");
let signup = d.querySelector(".signup");
let inputUserNameLogin = d.querySelector(".input-user-name-login");
let inputUserNameSignup = d.querySelector(".input-user-name-signup");
let inputPasswordLogin = d.querySelector(".input-password-login");
let inputPasswordSignup = d.querySelector(".input-password-signup");
let inputPasswordSignup2 = d.querySelector(".input-password-signup-2");
let titleForm = d.querySelector(".title-form");
let descForm = d.querySelector(".desc-form");
let btnSignup = d.querySelector(".button-signup");
let btnLogin = d.querySelector(".button-login");
let formSign = d.querySelector(".form-sign");
let formLogin = d.querySelector(".form-login");
let containerPosterForm = d.querySelector(".container-poster-form");
let containerLoaderForm = `<div class="dot-spinner"> <div class="dot-spinner__dot"></div> <div class="dot-spinner__dot"></div> <div class="dot-spinner__dot"></div> <div class="dot-spinner__dot"></div> <div class="dot-spinner__dot"></div> <div class="dot-spinner__dot"></div> <div class="dot-spinner__dot"></div> <div class="dot-spinner__dot"></div> </div>`;

let userInfo = [{ id: 1, name: "" }];

// console.log(btnSignup);
// console.log(btnLogin);

let flag = false;

function hiddenShowPassword(event) {
  if (!flag) {
    flag = true;
    event.target.previousElementSibling.type = "text";
  } else {
    flag = false;
    event.target.previousElementSibling.type = "password";
  }
}

function signupForm() {
  formSign.setAttribute("style", "display: flex;");
  formLogin.setAttribute("style", "display: none;");
  containerPosterForm.innerHTML = containerLoaderForm;
  setTimeout(function () {
    containerPosterForm.innerHTML = `<section>
    <h1 class="title-form">فرم ثبت نام</h1>
    <p class="desc-form">
      فرم را جهت ثبت نام به حساب کاربری تکمیل کنید
    </p>
    <img
      src="../Image/poster-form.svg"
      class="img-poster-form"
      alt="Poster Form"
    />
  </section>`;
  }, 300);
}

function loginForm() {
  formSign.setAttribute("style", "display: none;");
  formLogin.setAttribute("style", "display: flex;");
  containerPosterForm.innerHTML = containerLoaderForm;
  setTimeout(function () {
    containerPosterForm.innerHTML = `<section>
    <h1 class="title-form">فرم ورود</h1>
    <p class="desc-form">
      فرم را جهت ورود به حساب کاربری تکمیل کنید
    </p>
    <img
      src="../Image/poster-form.svg"
      class="img-poster-form"
      alt="Poster Form"
    />
  </section>`;
  }, 300);
}

let userName;
let sendUserInfoLocal;

function loginFormUser(event) {
  event.preventDefault();
  userInfo.forEach(function (user) {
    userName = inputUserNameLogin.value;
    user.name = userName;
    sendUserInfoLocal = localStorage.setItem(
      "userNameHatRose",
      JSON.stringify(user.name)
    );
  });
}

function signupFormUser(event) {
  event.preventDefault();
  userInfo.forEach(function (user) {
    userName = inputUserNameSignup.value;
    user.name = userName;
    sendUserInfoLocal = localStorage.setItem(
      "userNameHatRose",
      JSON.stringify(user.name)
    );
  });
}

btnSignup.addEventListener("click", signupFormUser);
btnLogin.addEventListener("click", loginFormUser);
iconPasswordLogin.addEventListener("click", hiddenShowPassword);
iconPasswordSignup.addEventListener("click", hiddenShowPassword);
iconPasswordSignup2.addEventListener("click", hiddenShowPassword);
signup.addEventListener("click", signupForm);
login.addEventListener("click", loginForm);
