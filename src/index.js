import './styles.css';
import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderAbout } from './about.js';

let content = document.getElementById('content');

const clearContent = function(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    clearContent();
    renderHome(content);
});

const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    if(event.target.classList.contains('home')){
        clearContent();
        renderHome(content);
        window.scrollTo(0, 0);
    } else if(event.target.classList.contains('menu')){
        clearContent();
        renderMenu(content);
        window.scrollTo(0, 0);
    } else if(event.target.classList.contains('about')){
        clearContent();
        renderAbout(content);
        window.scrollTo(0, 0);
    }
});

console.log('working');