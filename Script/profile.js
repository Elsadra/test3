let userNameInput = document.querySelector(".input-user-name");

function getInformation() {
  let userName = JSON.parse(localStorage.getItem("userNameHatRose"));
  console.log(userName);
  userNameInput.value = userName;
}

getInformation();
console.log(userNameInput);
// userNameInput.value;
