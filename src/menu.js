export function renderMenu(div) {
    const siteMenu = document.createElement('div');
    div.appendChild(siteMenu);
    siteMenu.classList.add('site-menu');

    const h1 = document.createElement('h1');
    siteMenu.appendChild(h1);
    h1.textContent = 'OUR MENU';

    const menuContainer = document.createElement('div');
    siteMenu.appendChild(menuContainer);
    menuContainer.classList.add('menu-container');


    // Create function to render each category
    function renderCategory(type, title){
        const category = document.createElement('div');
        menuContainer.appendChild(category);
        category.classList.add('category');
        category.id = type;
        
        const h2 = document.createElement('h2');
        category.appendChild(h2);
        h2.textContent = title;
    }

    // Call render category function for each category
    renderCategory('aperitif', 'L\'Apéritif');
    renderCategory('entree', 'L\Entrée');
    renderCategory('plat-principal', 'Le Plat Principal');
    renderCategory('salade', 'La Salade');
    renderCategory('fromage', 'Le Fromage');
    renderCategory('dessert', 'Le Dessert');
    renderCategory('digestif', 'Le Digestif');


}








// <div class="site-menu">
// <h1>OUR MENU</h1>
// <div class="menu-container">
//     <div class="category" id="aperitif">
//         <h2>L'Apéritif</h2>
//         <div class="item">
//             <h3>Kir</h3>
//             <p class="price">| $8</p>
//             <p class="description">A delightful blend of white wine and blackcurrant liqueur.</p>
//         </div>
//         <div class="item">
//             <h3>French 75</h3>
//             <p class="price">| $12</p>
//             <p class="description">A classic mix of gin, Champagne, lemon juice, and sugar.</p>
//         </div>
//         <div class="item">
//             <h3>Lillet Spritz</h3>
//             <p class="price">| $10</p>
//             <p class="description">A refreshing aperitif with Lillet Blanc, tonic, and a citrus twist.</p>
//         </div>
//     </div>
    
//     <div class="category" id="entree">
//         <h2>L'Entrée</h2>
//         <div class="item">
//             <h3>Gougères</h3>
//             <p class="price">| $7</p>
//             <p class="description">Light and airy cheese puffs made with Gruyère.</p>
//         </div>
//         <div class="item">
//             <h3>Soupe à l'Oignon</h3>
//             <p class="price">| $9</p>
//             <p class="description">Classic French onion soup with melted cheese and crispy bread.</p>
//         </div>
//         <div class="item">
//             <h3>Ham and Cheese Crêpes</h3>
//             <p class="price">| $10</p>
//             <p class="description">Savory crêpes filled with ham, cheese, and a touch of béchamel.</p>
//         </div>
//     </div>
    
//     <div class="category" id="plat-principal">
//         <h2>Le Plat Principal</h2>
//         <div class="item">
//             <h3>Steak au Poivre</h3>
//             <p class="price">| $28</p>
//             <p class="description">Pepper-crusted steak served with a rich cognac cream sauce.</p>
//         </div>
//         <div class="item">
//             <h3>40 Cloves Garlic Chicken</h3>
//             <p class="price">| $24</p>
//             <p class="description">Tender chicken slow-cooked with forty cloves of garlic.</p>
//         </div>
//         <div class="item">
//             <h3>Boeuf Bourguignon</h3>
//             <p class="price">| $30</p>
//             <p class="description">A hearty beef stew braised in red wine with vegetables.</p>
//         </div>
//         <div class="item">
//             <h3>Chicken Suprême</h3>
//             <p class="price">| $26</p>
//             <p class="description">Seared chicken breast with a luxurious mushroom cream sauce.</p>
//         </div>
//     </div>
    
//     <div class="category" id="salade">
//         <h2>La Salade</h2>
//         <div class="item">
//             <h3>Salade Niçoise</h3>
//             <p class="price">| $14</p>
//             <p class="description">A Mediterranean salad with tuna, olives, eggs, and anchovies.</p>
//         </div>
//         <div class="item">
//             <h3>Salade Lyonnaise</h3>
//             <p class="price">| $13</p>
//             <p class="description">A warm bacon and frisée salad with a poached egg.</p>
//         </div>
//         <div class="item">
//             <h3>Salade de Chèvre Chaud</h3>
//             <p class="price">| $12</p>
//             <p class="description">A simple green salad with warm goat cheese on toast.</p>
//         </div>
//     </div>
    
//     <div class="category" id="fromage">
//         <h2>Le Fromage</h2>
//         <div class="item">
//             <h3>Cheese Tray</h3>
//             <p class="price">| $18</p>
//             <p class="description">Choose three: Brie, Camembert, Roquefort, Comté, Morbier, Reblochon, Chèvre, Saint-Nectaire, Bleu d'Auvergne.</p>
//         </div>
//     </div>
    
//     <div class="category" id="dessert">
//         <h2>Le Dessert</h2>
//         <div class="item">
//             <h3>Chocolate Mousse</h3>
//             <p class="price">| $9</p>
//             <p class="description">Rich and airy dark chocolate mousse with whipped cream.</p>
//         </div>
//         <div class="item">
//             <h3>Mille-Feuille</h3>
//             <p class="price">| $10</p>
//             <p class="description">Crispy layers of puff pastry with luscious pastry cream.</p>
//         </div>
//         <div class="item">
//             <h3>Chocolate Soufflé</h3>
//             <p class="price">| $11</p>
//             <p class="description">A decadent and fluffy chocolate delight.</p>
//         </div>
//     </div>
    
//     <div class="category" id="digestif">
//         <h2>Le Digestif</h2>
//         <div class="item">
//             <h3>Cognac</h3>
//             <p class="price">| $14</p>
//             <p class="description">A smooth and aromatic French brandy.</p>
//         </div>
//         <div class="item">
//             <h3>Chartreuse</h3>
//             <p class="price">| $13</p>
//             <p class="description">A herbal liqueur with a complex and bold flavor.</p>
//         </div>
//         <div class="item">
//             <h3>Grand Marnier</h3>
//             <p class="price">| $12</p>
//             <p class="description">An orange-flavored liqueur with a hint of Cognac.</p>
//         </div>
//     </div>
// </div>
// </div>