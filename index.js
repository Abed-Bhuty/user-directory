document.querySelector('button').addEventListener('click', function () {
  const x = document.querySelector('input').value
  const h1 = document.querySelector('h1')
  h1.textContent = x
})