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
    if(checkBox.checked){         
        body.classList.add(Theme.DARK)
        body.classList.remove(Theme.LIGHT)
        localStorage.removeItem('Theme', 'light-theme')
        localStorage.setItem('Theme', 'dark-theme')   
         

      }else {          
        localStorage.getItem('Theme', 'dark-theme')
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        localStorage.removeItem('Theme', 'dark-theme')
        localStorage.setItem('Theme', 'light-theme')
    }          
  

}

