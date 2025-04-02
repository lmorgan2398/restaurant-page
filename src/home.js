export function renderHome(content){
    // Create 'site-home' div, add it to site, and add style class
    const siteHome = document.createElement('div');
    content.appendChild(siteHome);
    siteHome.classList.add('site-home');

    // Same as before, but for the hero section
    // Created as an IIFE to simplify creating unclassed text elements
    (function renderHeroSection() {
        const heroSection = document.createElement('div');
        siteHome.appendChild(heroSection);
        heroSection.classList.add('hero-section');

        const h1 = document.createElement('h1');
        h1.textContent = 'CHEZ VOUS';
        heroSection.appendChild(h1);

        const p = document.createElement('p');
        p.textContent = 'AN EXQUISITE FRENCH DINING EXPERIENCE IN THE COMFORT OF YOUR OWN HOME';
        heroSection.appendChild(p);

        const button = document.createElement('button');
        button.textContent = 'EXPLORE OUR MENU';
        heroSection.appendChild(button);
    })();


}