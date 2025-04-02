import aboutImageFile1 from './images/about-image-1.jpg';
import aboutImageFile2 from './images/about-image-2.jpg';

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

        const aboutSectionImages = document.createElement('div');
        aboutSection.appendChild(aboutSectionImages);
        aboutSectionImages.classList.add('about-section-images');

        const aboutImage1 = document.createElement('img');
        aboutImage1.src = aboutImageFile1;
        aboutSectionImages.appendChild(aboutImage1);

        const aboutImage2 = document.createElement('img');
        aboutImage2.src = aboutImageFile2;
        aboutSectionImages.appendChild(aboutImage2);
    })();

    (function renderReserveSection() {
        const reserveSection = document.createElement('div');
        siteHome.appendChild(reserveSection);
        reserveSection.classList.add('reserve-section');

        const hours = document.createElement('div');
        reserveSection.appendChild(hours);
        hours.classList.add('hours');

        const h2 = document.createElement('h2');
        hours.appendChild(h2);
        h2.textContent = 'HOURS OF OPERATION';

        const p1 = document.createElement('p');
        p1.textContent = 'All dinner services are provided by reservation only, limited to evening hours on the weekend. Available starting times are early because of the expansive nature of the full-course dinner. Expect the event to run for several hours.';
        hours.appendChild(p1);

        const p2 = document.createElement('p');
        p2.textContent = 'You may schedule a start time during the following hours:';
        hours.appendChild(p2);

        const p3 = document.createElement('p');
        p3.textContent = 'Fridays 6:00 p.m. - 8:00 p.m.';
        hours.appendChild(p3);

        const p4 = document.createElement('p');
        p4.textContent = 'Saturdays 5:00 p.m. - 9:00 p.m.';
        hours.appendChild(p4);

        const p5 = document.createElement('p');
        p5.textContent = 'Sundays 5:00 p.m. - 8:00 p.m.';
        hours.appendChild(p5);

        const button = document.createElement('button');
        button.textContent = 'MAKE A RESERVATION';
        reserveSection.appendChild(button);
    })();

    (function renderContactSection() {
        const contactSection = document.createElement('div');
        siteHome.appendChild(contactSection);
        contactSection.classList.add('contact-section');

        const h3 = document.createElement('h3');
        contactSection.appendChild(h3);
        h3.textContent = 'CHEZ VOUS';

        const p1 = document.createElement('p');
        contactSection.appendChild(p1);
        p1.textContent = 'Phone: xxx-xxx-FAKE';

        const p2 = document.createElement('p');
        contactSection.appendChild(p2);
        p2.textContent = 'Email: notarealemail@fakeservice.com:'; 
    })();
}


// <div class="site-home">
// <div class="hero-section">
//     <h1>CHEZ VOUS</h1>
//     <p>AN EXQUISITE FRENCH DINING EXPERIENCE IN THE COMFORT 
//         OF YOUR OWN HOME
//     </p>
//     <button>EXPLORE OUR MENU</button>
// </div>
// <div class="about-section">
//     <div class="about-section-text">
//         <h2>OUR <em>'JE NE SAIS QUOI'</em></h2>
//         <p>Started as a hobby among friends and family during the COVID-19 pandemic, Chez Nous 
//             strives to create an atmospheric escape to a French dining hall from the comfort of 
//             your own home by catering a full-course dinner right out of your home kitchen.
//         </p>
//         <button>MORE ABOUT US</button>
//     </div>
//     <div class="about-images">
//         <img src="./images/lee-vue-P-oXFsK6STQ-unsplash.jpg" alt="A tray of cheese and fruit">
//         <img src="./images/dan-rooney-xn_I632JDjk-unsplash.jpg" alt="A glass of wine on a candlelit table">
//     </div>
// </div>
// <div class="reserve-section">
//     <div class="hours">
//         <h2>HOURS OF OPERATION</h2>
//         <p>All dinner services are provided by reservation only, limited 
//             to evening hours on the weekend. Available starting times are 
//             early because of the expansive nature of the full-course dinner. 
//             Expect the event to run for several hours.
//         </p>
//         <p>You may schedule a start time during the following hours:</p>
//         <p>Fridays 6:00 p.m. - 8:00 p.m.</p>
//         <p>Saturdays 5:00 p.m. - 9:00 p.m.</p>
//         <p>Sundays 5:00 p.m. - 8:00 p.m.</p>
//     </div>
//     <button class="reserve">MAKE A RESERVATION</button>
// </div>
// <div class="contact-section">
//     <h3>CHEZ VOUS</h3>
//     <p>Phone: xxx-xxx-FAKE</p>
//     <p>Email: notarealemail@fakeservice.com</p>
// </div>
// </div>