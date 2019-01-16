const form = document.querySelector("form#userForm");

function renderColor(color) {
  const colorDiv = document.createElement("div");
  colorDiv.style.backgroundColor = color;
  colorDiv.style.width = "2rem";
  colorDiv.style.height = "2rem";
  return colorDiv;
}

function renderListList(labal, value) {
  const List = document.createElement("li");
  List.textContent = `${labal}:`;
  try {
    List.appendChild(value);
  } catch (e) {
    List.textContent += value;
  }
  return List;
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
    const List = renderListList(labal, user[labal]);
    list.appendChild(List);

  });
  const users = document.querySelector('#users');

  users.appendChild(list);

  form.reset();
  form.userName.focus();
};
form.addEventListener("submit", handleSubmit);