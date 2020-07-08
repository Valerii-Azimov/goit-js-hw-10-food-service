import './styles.css';
import itemsTemplate from './galery-items.hbs';
import menu from './menu.json';

// ==============theme=====================
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const changeTheamRf = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('body');
const galleryRef = document.querySelector('.js-menu');

changeTheamRf.addEventListener('change', changeTheam);

function changeTheam(event) {
  if (changeTheamRf.checked) {
    bodyRef.classList.replace('light-theme', 'dark-theme');
    // bodyRef.classList.add('dark-theme');
    localStorage.setItem('themeStyle', 'dark');
  } else {
    bodyRef.classList.replace('dark-theme', 'light-theme');
    // bodyRef.classList.remove('dark-theme');
    // bodyRef.classList.add('light-theme');
    localStorage.setItem('themeStyle', 'light');
  }
}

if (localStorage.getItem('themeStyle') === 'dark') {
  bodyRef.classList.add('dark-theme');
  bodyRef.classList.remove('light-theme');
  document
    .getElementById('theme-switch-control')
    .setAttribute('checked', false); // переключаем чекбокс в положение "темная тема"
} else {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
}

// ===================shablon====================
const marckup = itemsTemplate(menu);
galleryRef.insertAdjacentHTML('beforeend', marckup);

// const menuCard = document.querySelectorAll('li');
// const ulMenu = document.querySelectorAll('ul');
// ulMenu.classList.remove('.menu');
// console.log(menuCard);
// menuCard.classList.add('.card');
