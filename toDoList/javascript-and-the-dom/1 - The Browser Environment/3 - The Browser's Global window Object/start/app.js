const headline = document.getElementById('headline');
const buttonMain = document.getElementById('btn-main');
const inputValue = document.getElementById('main');
const buttonToggle = document.querySelector('.btn-toggle');


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

buttonMain.addEventListener('click', () => {
  headline.textContent = inputValue.value;  

})
