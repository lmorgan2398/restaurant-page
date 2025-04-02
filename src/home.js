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

    (function renderAboutSection() {
        const aboutSection = document.createElement('div');
        siteHome.appendChild(aboutSection);
        aboutSection.classList.add('about-section');

        const aboutSectionText = document.createElement('div');
        aboutSection.appendChild(aboutSectionText);
        aboutSectionText.classList.add('about-section-text');

        const h2 = document.createElement('h2');
        h2.textContent = 'OUR ';
        aboutSectionText.appendChild(h2);

        const em = document.createElement('em');
        em.textContent = '\'JE NE SAIS QUOI\'';
        h2.appendChild(em);

        const p = document.createElement('p');
        p.textContent = 'Started as a hobby among friends and family during the COVID-19 pandemic, Chez Nous strives to create an atmospheric escape to a French dining hall from the comfort of your own home by catering a full-course dinner right out of your home kitchen.';
        aboutSectionText.appendChild(p);

        const button = document.createElement('button');
        button.textContent = 'MORE ABOUT US';
        aboutSectionText.appendChild(button);
    })();


}