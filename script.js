/* ARRAY UND HANDLING FÜR SPEAKER / LAYER SPEAKER */
const speakers = [
    {
        name: 'Diana Sprung',
        position: 'Teamleiterin Kundenberatung, Going Public',
        image: 'assets/sprung.jpg',
        infos: '',
    },
    {
        name: 'Frank Neumann',
        position: 'Vertriebsdirektor, AUREUS Golddepot GmbH',
        image: 'assets/neumann.jpg',
        infos: 'Frank Neumann ist seit mehr als 40 Jahren in der Finanzbranche tätig. Er gründete 2010 mit der Exchange AG die Aureus Golddepot GmbH. Herr Neumann ist maßgeblich beteiligt an der Entwicklung der Produktlösungen der Aureus, sein Motto ist: Aus der Praxis für die Praxis!',

    },
    {
        name: 'Sebastian Plaza',
        position: 'Head of Sales Management, blau direkt',
        image: 'assets/plaza.jpg',
        infos: 'Sebastian Plaza ist seit knapp 18 Jahren in der Branche bei blau direkt aktiv. Er bringt umfassende Praxiserfahrung aus dem Makleralltag und Vertrieb mit.',

    }
];

const speakerArea = document.querySelector('.speaker-area');

for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];
    speakerArea.innerHTML += `
        <div class="speaker-element" onclick="openLayer(${i})">
            <img src="${speaker.image}" alt="${speaker.name}">
            <div class="speaker-infos">
                <p class="event-speaker-headline">${speaker.name}</p>
                <div class="line"></div>
                <p class="event-speaker-position grey-text">${speaker.position}</p>
            </div>
        </div>
    `;
}

function openLayer(index) {
    const speaker = speakers[index];
    const layer = document.querySelector('.outter-layer-speaker');
    layer.classList.remove('d-none');

    document.body.style.overflow = 'hidden';

    layer.innerHTML = `
        <div class="inner-layer-speaker">
            <div class="close" onclick="closeLayer()"><img src="assets/icons/close-white.svg" alt=""></div>
            <div class="layer-top">
                <img src="${speaker.image}" alt="${speaker.name}">
                <div class="layer-speaker-infos">
                    <p class="layer-speaker-headline">${speaker.name}</p>
                    <p class="layer-speaker-position dark-text">${speaker.position}</p>
                </div>
            </div>
            <div class="layer-speaker-text">${speaker.infos}</div>
        </div>
    `;
}

function closeLayer() {
    document.querySelector('.outter-layer-speaker').classList.add('d-none');
    document.body.style.overflow = 'auto';
}

/* CLOSE LAYER BEI CLICK AUSSERHALB INNER-LAYER */ 
document.querySelector('.outter-layer-speaker').addEventListener('click', function (event) {
    if (!event.target.closest('.inner-layer-speaker')) {
        closeLayer();
    }
});







/* ARRAY EVENTS */
const events = [
    {
        time: '9.00 UHR',
        title: 'Vom Wissen zum Können: Wie KI Weiterbildung<br>in der Finanzbranche verändert',
        description: 'Die Teilnehmenden verstehen, wie KI Lernen und Kompetenzaufbau verändert – und wie sie KI sinnvoll, kritisch und regulatorisch verantwortbar in Weiterbildung und Beratungstraining einsetzen können.',
        speakerName: 'Diana Sprung',
        speakerPosition: 'Teamleiterin Kundenberatung, Going Public',
        speakerImage: 'assets/sprung.jpg',
        link: 'https://cash.clickmeeting.com/vom-wissen-zum-konnen-wie-ki-weiterbildung-in-der-finanzbranche-verandert/register',
        idd: '25'
    },
    {
        time: '10.15 UHR',
        title: 'Edelmetalle im Trend der Zeit',
        description: 'Holen Sie sich wichtige Informationen, warum Edelmetalle in der aktuellen Zeit elementar sind, und welche Edelmetalle am besten performen werden und warum! Erfahren Sie mehr über die umfangreichen Sicherheits- und Serviceleistungen sowie die Einkaufsvorteile, die Aureus bietet.',
        speakerName: 'Frank Neumann',
        speakerPosition: 'Vertriebsdirektor, AUREUS Golddepot GmbH',
        speakerImage: 'assets/neumann.jpg',
        link: 'https://cash.clickmeeting.com/edelmetalle-im-trend-der-zeit/register',
    },
    {
        time: '11.30 UHR',
        title: 'Vom Software-Flickenteppich zum <br>KI-gestützten System: <br>So arbeiten erfolgreiche Makler heute',
        description: 'Im Webinar zeigen wir, warum viele Makler trotz guter Tools im Alltag Zeit verlieren und wie man das mit einem zentralen System spürbar vereinfacht. Wie sieht eine medienbruchfreie Customer Journey im Maklerbüro aus – vom Erstkontakt bis zur laufenden Betreuung. Wie und wo kann KI entlang des gesamten Beratungsprozesses unterstützen, z. B. bei Recherche, Dokumentation und Kundenanfragen. An praxisnahen Beispielen zeigen wir, wie mehr Effizienz, bessere Beratung und stärkere Kundenbindung entstehen. ',
        speakerName: 'Sebastian Plaza',
        speakerPosition: 'Head of Sales Management, blau direkt',
        speakerImage: 'assets/plaza.jpg',
        link: 'https://cash.clickmeeting.com/vom-software-flickenteppich-zum-ki-gestutzten-system-so-arbeiten-erfolgreiche-makler-heute/register',
        idd: '20'
    },
];

const eventContent = document.querySelector('.event-content');

for (let i = 0; i < events.length; i++) {
    const event = events[i];
    eventContent.innerHTML += `
        <div class="event">
            <div class="event-time">${event.time}</div>
            <div class="event-infos">
                <div class="event-title">
                    ${event.title}
                    ${event.idd ? `<div class="idd">${event.idd} IDD-Minuten</div>` : ''}
                </div>
                ${event.idd ? `<div class="idd-mobile">${event.idd} IDD-Minuten</div>` : ''}
                <div class="separator" style="height: 2px"></div>
                <div class="event-description">
                    ${event.description}
                </div>
                <div class="separator" style="height: 2px"></div>
                <div class="event-speaker">
                    <div class="event-speaker-infos">
                        <p class="event-speaker-headline dark-text" style="padding-bottom: 10px;">SPEAKER:</p>
                        <p class="event-speaker-headline">${event.speakerName}</p>
                        <p class="event-speaker-position dark-text">${event.speakerPosition}</p>
                    </div>
                    <a href="${event.link}" target="_blank">
                        <button class="signup">           
                            JETZT ANMELDEN
                            <img src="assets/icons/forward-white.svg" alt="">
                        </button>
                    </a>
                    <img class="portrait" src="${event.speakerImage}" alt="${event.speakerName}">
                </div>
            </div>
        </div>
    `;
}








/* HEADER NUR SICHTBAR BEI SCROLL UP */ 
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-100px';
    } else {
        header.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Für Safari
});







function redirectToCash() {
    window.location.href = 'https://www.cash-online.de';
}