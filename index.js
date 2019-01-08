const form = document.querySelector("form#userForm");

function renderColor(color) {
  const colorDiv = document.createElement("div");
  colorDiv.style.backgroundColor = color;
  colorDiv.style.width = "2rem";
  colorDiv.style.height = "2rem";
  return colorDiv;
}

function renderListItem(labal, value) {

  const item = document.createElement("li");
  item.textContent = `${labal}: ${value}`
  return item
}

const handleSubmit = function (ev) {
  ev.preventDefault();
  const form = ev.target;

  const userName = form.userName.value;
  const age = form.age.value;
  const favoritecolor = form.favoritecolor.value;

  const users = document.querySelector("#users");

  const list = document.createElement("ul");
  const ageItem = document.createElement("li");
  ageItem.textContent = `Age: ${age}`;
  const colorItem = document.createElement("li");
  colorItem.textContent = `Favorite Color: `;

  colorItem.appendChild(renderColor(favoritecolor));

  list.appendChild(renderListItem('name', userName));
  list.appendChild(renderListItem('Age', age));
  list.appendChild(colorItem);
  users.appendChild(list);

  form.reset();
  form.userName.focus();
};
form.addEventListener("submit", handleSubmit);