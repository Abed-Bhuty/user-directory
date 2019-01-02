const form = document.querySelector("form#userForm");
const handleSubmit = function(ev) {
  ev.preventDefault();
  const form = ev.target;
  const userName = form.userName.value;
  const age = form.age.value;
  const favoritecolor = form.favoritecolor.value;
  const users = document.querySelector("#users");
  const p = document.createElement("p");
  p.textContent =
    "My Name is " +
    `${userName}, I'm ${age} years old, my favorite color is ${favoritecolor}`;
  p.style.backgroundColor = favoritecolor;
  users.appendChild(p);
  form.reset();
  form.userName.focus();
};
form.addEventListener("submit", handleSubmit);
