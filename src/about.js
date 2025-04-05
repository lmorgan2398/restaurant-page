import toast1File from './images/toast1.jpg';
import cheeseFile from './images/cheese.jpg';
import millesFeuillesFile from './images/milles-feuilles.jpg';
import beefFile from './images/beef.jpg';
import toast2File from './images/toast2.jpg';
import soupFile from './images/soup.jpg';
import dessertFile from './images/dessert.jpg';

export function renderAbout(div){
    const siteAbout = document.createElement('div');
    div.appendChild(siteAbout);
    siteAbout.classList.add('site-about');

    const siteAboutText = document.createElement('div');
    siteAbout.appendChild(siteAboutText);
    siteAboutText.classList.add('site-about-text');

    const h1 = document.createElement('h1');
    siteAboutText.appendChild(h1);
    h1.textContent = 'Chez Vous / French / [shay-VOO] / "At Your Home"';

    const p1 = document.createElement('p');
    siteAboutText.appendChild(p1);
    p1.textContent = 'During the pandemic, a passion for French cooking blossomed into Chez Vous, a way to bring people together. Inspired by years of French language study, the chef began creating intimate, multi-course dinners for family and friends. These meals, prepared by Chez Vous, were more than just food; they were a chance to share stories and enjoy each other\'s company during a time of isolation.';

    const p2 = document.createElement('p');
    siteAboutText.appendChild(p2);
    p2.textContent = 'Word spread, and requests for catering from Chez Vous began. Now, the chef offers bespoke French-inspired dinners in your home. The goal of Chez Vous is to create memorable meals that celebrate connection, where each dish is an invitation to gather and enjoy the warmth of shared company, bringing a touch of French conviviality to your dining table.';

    const p3 = document.createElement('p');
    siteAboutText.appendChild(p3);
    p3.textContent = 'To reserve a truly unique dining experience with Chez Vous, participants will select either a 3, 5, or 7-course meal. From there, they will choose their preferred dishes from a curated menu for each course. Once a date and estimated guest count are confirmed, the chef will provide a personalized quote and begin designing an unforgettable evening. As a special touch, live piano music, performed by the chef, will accompany portions of the meal, enhancing the ambiance and creating a truly memorable occasion with Chez Vous.';

    const galleryContainer = document.createElement('div');
    siteAbout.appendChild(galleryContainer);
    galleryContainer.classList.add('gallery-container');

    const leftButton = document.createElement('button');
    galleryContainer.appendChild(leftButton);
    leftButton.textContent = '<';
    leftButton.classList.add('left-button');

    const gallery = document.createElement('div');
    galleryContainer.appendChild(gallery);
    gallery.classList.add('gallery');

    function renderGalleryImage(src, alt){
        const newImage = document.createElement('img');
        gallery.appendChild(newImage);
        newImage.src = src;
        newImage.alt = alt;
    }

    renderGalleryImage(toast1File, 'A couple of wine glasses raised in a toast.');
    renderGalleryImage(cheeseFile, 'A wooden tray with a variety of cheeses.')
    renderGalleryImage(millesFeuillesFile, 'An ornate milles-feuilles, covered in white-and-brown icing.');
    renderGalleryImage(beefFile, 'A plated serving of beef bourguignon covered in gravy.');
    renderGalleryImage(toast2File, 'A couple of wine glasses raised in a toast.');
    renderGalleryImage(soupFile, 'A bowl of French onion soup covered in cheese and garnished with a baguette slice.');
    renderGalleryImage(dessertFile, 'An image of a bottle of wine, a glass filled with a garnished chocolate mousse, and a glass of wine.');

    const rightButton = document.createElement('button');
    galleryContainer.appendChild(rightButton);
    rightButton.textContent = '>';
    rightButton.classList.add('right-button');

    leftButton.addEventListener('click', () => {
        gallery.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        gallery.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    });
}