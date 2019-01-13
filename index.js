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
  item.textContent = `${labal}:`;
  try {
    item.appendChild(value);
  } catch (e) {
    item.textContent += value;
  }
  return item;
}

const handleSubmit = function (ev) {
  ev.preventDefault();
  const form = ev.target;
  const user = {
    'Name': form.userName.value,
    'Age': form.age.value,
    'Favorite Color': renderColor(form.favoritecolor.value)
  };
  const list = document.createElement("ul");

  Object.keys(user).map(function (labal) {
    const item = renderListItem(labal, user[labal]);
    list.appendChild(item);

  });
  const users = document.querySelector('#users');

  users.appendChild(list);

  form.reset();
  form.userName.focus();
};
form.addEventListener("submit", handleSubmit);