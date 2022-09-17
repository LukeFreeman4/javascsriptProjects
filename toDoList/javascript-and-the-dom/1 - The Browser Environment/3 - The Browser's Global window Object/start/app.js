const headline = document.getElementById('headline');
const buttonCreate = document.getElementById('btn-main');
const buttonToggle = document.querySelector('.btn-toggle');
const buttonRemove = document.querySelector('.btn-remove');


buttonToggle.addEventListener('click', () => {
  const itemList = document.querySelector('ul');
  if (itemList.style.display === 'none') {
    itemList.style.display = 'block';
    buttonToggle.textContent = 'Hide list';
  } else {
    itemList.style.display = 'none';
    buttonToggle.textContent = 'Show list';
  }
});

buttonCreate.addEventListener('click', () => {
  const input = document.querySelector('.input-main');
  const item = document.createElement('li');
  const list = document.querySelector('ul');

  list.insertAdjacentHTML(
    'beforeend',
    `<li>${input.value}</li>`
  );

  // item.textContent = input.value;
  // list.append(item);
  input.value = '';
})

buttonRemove.addEventListener('click', () => {
  const lastItem = document.querySelector('li:last-child');
  lastItem.remove();
});
