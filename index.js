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
  const term = document.createElement("dt");
  term.textContent = labal;
  const description = document.createElement("dd");

  try {
    description.appendChild(value);
  } catch (e) {
    description.textContent += value;
  }
  item.appendChild(term);
  item.appendChild(description);
  return item;
}

function renderList(data) {
  const list = document.createElement("dl");
  Object.keys(data).forEach(labal => {
    const item = renderListItem(labal, data[labal]);
    list.appendChild(item);
  });
  return list;
}

const handleSubmit = function(ev) {
  ev.preventDefault();
  const form = ev.target;
  const user = {
    Name: form.userName.value,
    Age: form.age.value,
    "Favorite Color": renderColor(form.favoritecolor.value)
  };
  const list = renderList(user);
  const users = document.querySelector("#users");

  users.appendChild(list);

  form.reset();
  form.userName.focus();
};

form.addEventListener("submit", handleSubmit);
