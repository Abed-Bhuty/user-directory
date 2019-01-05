const form = document.querySelector("form#userForm");
const handleSubmit = function(ev) {
  ev.preventDefault();
  const form = ev.target;

  const userName = form.userName.value;
  const age = form.age.value;
  const favoritecolor = form.favoritecolor.value;

  const users = document.querySelector("#users");

  const list = document.createElement("ul");
  const nameItem = document.createElement("li");
  nameItem.textContent = `Name: ${userName}`;
  const ageItem = document.createElement("li");
  ageItem.textContent = `Age: ${age}`;
  const colorItem = document.createElement("li");
  colorItem.textContent = `Favorite Color: `;
  const colorDiv = document.createElement("div");
  colorDiv.style.backgroundColor = favoritecolor;
  colorDiv.style.width = "2rem";
  colorDiv.style.height = "2rem";
  colorItem.appendChild(colorDiv);

  list.appendChild(nameItem);
  list.appendChild(ageItem);
  list.appendChild(colorItem);
  users.appendChild(list);

  form.reset();
  form.userName.focus();
};
form.addEventListener("submit", handleSubmit);
