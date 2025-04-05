import './styles.css';
import { renderHome } from './home.js';
import { renderMenu } from './menu.js';

let content = document.getElementById('content');

const clearContent = function(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
};

document.addEventListener('DOMContentLoaded', renderHome(content));

const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    if(event.target.classList.contains('home')){
        clearContent();
        renderHome(content);
    } else if(event.target.classList.contains('menu')){
        clearContent();
        renderMenu(content);
    }
});

console.log('working');