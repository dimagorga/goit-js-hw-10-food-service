import './sass/main.scss'
import templateMurkup from './templates/template.hbs';
import menuCards from './menu.json';

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', createMurkup(menuCards));

function createMurkup(menu){
    return templateMurkup(menu)
}