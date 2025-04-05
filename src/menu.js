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

    // Create function to render each item
    function renderItem(type, name, price, description){
        const category = document.querySelector(`#${type}`);
        const item = document.createElement('div');
        category.appendChild(item);
        item.classList.add('item');

        const h3 = document.createElement('h3');
        item.appendChild(h3);
        h3.textContent = name;

        const pPrice = document.createElement('p');
        item.appendChild(pPrice);
        pPrice.classList.add('price');
        pPrice.textContent = ` | ${price}`;

        const pDescription = document.createElement('p');
        item.appendChild(pDescription);
        pDescription.classList.add('description');
        pDescription.textContent = description;
    }

    // Call renderCategory and renderItem to fill out the menu
    renderCategory('aperitif', 'L\'Apéritif');
    renderItem('aperitif', 'Kir', '$8', 'A delightful blend of white wine and blackcurrant liqueur.');
    renderItem('aperitif', 'French 75', '$12', 'A classic mix of gin, Champagne, lemon juice, and sugar.');
    renderItem('aperitif', 'Lillet Spritz', '$10', 'A refreshing aperitif with Lillet Blanc, tonic, and a citrus twist.');

    renderCategory('entree', 'L\Entrée');
    renderItem('entree', 'Gougères', '$7', 'Light and airy cheese puffs made with Gruyère.');
    renderItem('entree', 'Soupe à l\'Oignon', '$9', 'Classic French onion soup with melted cheese and crispy bread.');
    renderItem('entree', 'Ham and Cheese Crêpes', '$10', 'Savory crêpes filled with ham, cheese, and a touch of béchamel.');

    renderCategory('plat-principal', 'Le Plat Principal');
    renderItem('plat-principal', 'Steak au Poivre', '$28', 'Pepper-crusted steak served with a rich cognac cream sauce.');
    renderItem('plat-principal', '40 Cloves Garlic Chicken', '$24', 'Tender chicken slow-cooked with forty cloves of garlic.');
    renderItem('plat-principal', 'Boeuf Bourguignon', '$30', 'A hearty beef stew braised in red wine with vegetables.');
    renderItem('plat-principal', 'Chicken Suprême', '$26', 'Seared chicken breast with a luxurious mushroom cream sauce.');

    renderCategory('salade', 'La Salade');
    renderItem('salade', 'Salade Niçoise', '$14', 'A Mediterranean salad with tuna, olives, eggs, and anchovies.');
    renderItem('salade', 'Salade Lyonnaise', '$13', 'A warm bacon and frisée salad with a poached egg.');
    renderItem('salade', 'Salade de Chèvre Chaud', '$12', 'A simple green salad with warm goat cheese on toast.');

    renderCategory('fromage', 'Le Fromage');
    renderItem('fromage', 'Cheese Tray', '$18', 'Choose three: Brie, Camembert, Roquefort, Comté, Morbier, Reblochon, Chèvre, Saint-Nectaire, Bleu d\'Auvergne.');

    renderCategory('dessert', 'Le Dessert');
    renderItem('dessert', 'Chocolate Mousse', '$9', 'Rich and airy dark chocolate mousse with whipped cream.');
    renderItem('dessert', 'Mille-Feuille', '$10', 'Crispy layers of puff pastry with luscious pastry cream.');
    renderItem('dessert', 'Chocolate Soufflé', '$11', 'A decadent and fluffy chocolate delight.');

    renderCategory('digestif', 'Le Digestif');
    renderItem('digestif', 'Cognac', '$14', 'A smooth and aromatic French brandy.');
    renderItem('digestif', 'Chartreuse', '$13', 'A herbal liqueur with a complex and bold flavor.');
    renderItem('digestif', 'Grand Marnier', '$12', 'An orange-flavored liqueur with a hint of Cognac.');

}