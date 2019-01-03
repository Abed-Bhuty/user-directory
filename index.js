const form = document.querySelector("form#userForm");
const handleSubmit = function (ev) {
  ev.preventDefault();
  const form = ev.target;

  const userName = form.userName.value;
  const age = form.age.value;
  const favoritecolor = form.favoritecolor.value;

  const users = document.querySelector('#users')


  const list = document.createElement('ul')
  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`
  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  const colorItem = document.createElement('li')
  colorItem.textContent = `color: ${favoritecolor}`


  list.appendChild(nameItem);
  list.appendChild(ageItem)
  list.appendChild(colorItem)
  colorItem.style.backgroundColor = favoritecolor;
  users.appendChild(list)

  form.reset();
  form.userName.focus();
};
form.addEventListener("submit", handleSubmit);