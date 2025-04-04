import './styles.css';
import { renderHome } from './home.js';
import { renderMenu } from './menu.js';

let content = document.getElementById('content');
renderMenu(content);

//renderHome(content);
console.log('working');