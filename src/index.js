import './sass/main.scss'
import templateMurkup from './templates/template.hbs';
import menuCards from './menu.json';

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', createMurkup(menuCards));

function createMurkup(menu){
  return templateMurkup(menu)
};

const checkBox = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkBox.addEventListener('change', toggleTheme);
  

function toggleTheme(event){
  event.preventDefault()
  if (localStorage.getItem('Theme') === Theme.DARK) {
      localStorage.setItem('Theme', Theme.LIGHT);      
  }
  else {
      localStorage.setItem('Theme', Theme.DARK);
  }
  darkThemeOn()
}

function darkThemeOn() {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    body.classList.add(Theme.DARK)
    checkBox.setAttribute('checked', true);
  }
  else {
    body.classList.remove(Theme.DARK);
  }
}
darkThemeOn()