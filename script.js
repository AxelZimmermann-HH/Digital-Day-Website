/* ARRAY UND HANDLING FÜR SPEAKER / LAYER SPEAKER */
const speakers = [
    {
        name: 'Frank Rottenbacher',
        position: 'Vorstand AfW Bundesverband Finanzdienstleistung e.V. / Going Public Akademie für Finanzberatung AG & Co. KG',
        image: 'assets/rottenbacher.jpg',
        infos: '',
    },
    {
        name: 'Clemens Köbler',
        position: 'Sales und Onboarding-Manager, Walnut',
        image: 'assets/koebler.jpg',
        infos: 'Clemens Köbler ist Sales und Onboarding Manager bei Walnut. Mit 20 Jahren Vertriebserfahrung und einem besonderen Gespür für die Praxis unterstützt er Finanzberater dabei, Walnut Live in ihren Arbeitsalltag zu integrieren - flexibel angepasst an ihre individuellen Bedürfnisse.',

    },
    {
        name: 'Peppa Pig',
        position: 'Marketing Professional',
        image: 'assets/peppa.jpg',
        infos: 'Das ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald Trump',

    },
    {
        name: 'Tanja Schmidt',
        position: 'Vertriebsmanagerin LV 1871',
        image: 'assets/schmidt.jpg',
        infos: '',

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
        title: 'Der EU AI Act – <br> Was kommt auf Vermittlerinnen und Vermittler zu?',
        description: 'Die neue KI-Verordnung der EU verpflichtet Unternehmen mit KI-Systemen dazu, die erforderlichen KI-Kompetenzen ihrer Mitarbeitenden sicherzustellen. Doch was bedeutet das konkret für Vermittlerbetriebe?',
        speakerName: 'Frank Rottenbacher',
        speakerPosition: 'Vorstand AfW Bundesverband Finanzdienstleistung e.V. / Going Public Akademie für Finanzberatung AG & Co. KG',
        speakerImage: 'assets/rottenbacher.jpg'
    },
    {
        time: '10.15 UHR',
        title: 'Vom Erstkontakt zur digitalen Zeichnung: <br>So optimieren Sie Ihre Beratung mit Walnut Live',
        description: 'Ein Haken falsch gesetzt – und der Antrag geht zurück. Ein Tool zu viel – und der Kunde springt ab. Kommt Ihnen das bekannt vor? In diesem Webinar erfahren Sie, wie Sie mit Walnut Live den gesamten Beratungs- und Zeichnungsprozess für Privatmarktfonds digital und durchgängig abbilden: von der fehlerfreien Antragserstellung über die digitale Legitimation bis hin zur elektronischen Zeichnung – FinVermV-konform, browserbasiert und ohne Medienbrüche.',
        speakerName: 'Clemens Köbler',
        speakerPosition: 'Sales und Onboarding-Manager, Walnut',
        speakerImage: 'assets/koebler.jpg'
    },
    {
        time: '14.00 UHR',
        title: 'Saugeile Sales-Tricks!',
        description: 'Peppa Pig fühlt sich sauwohl in ihrem Gebiet Marketing & Sales. Das macht sich am Umsatz erkennbar.',
        speakerName: 'Peppa Pig',
        speakerPosition: 'Marketing Professional',
        speakerImage: 'assets/peppa.jpg'
    },
    {
        time: '14.00 UHR',
        title: 'Effizienter Beraten - mit den digitalen Tools der LV 1871',
        description: 'Die private Altersvorsorge ist ein komplexes und beratungsintensives Thema, an dem heute kein Weg mehr vorbeiführt. Doch: Kaum jemand möchte mehr als zwei Stunden Zeit investieren, um mit einer Beraterin oder einem Berater über die Absicherung in der Rente zu sprechen. Entsprechend wichtig ist der Einsatz von digitalen Tools im Maklergeschäft. Die Angebotssoftware der LV 1871 ermöglicht unabhängigen Maklerinnen und Maklern einen schnellen und reibungslosen Prozess im Beratungsgespräch. Um die Beratung so effizient wie möglich zu gestalten, wird Tanja Schmidt Vertriebsmanagerin der LV 1871 Ihnen alles Nötige in diesem Webinar mit an die Hand geben.',
        speakerName: 'Tanja Schmidt',
        speakerPosition: 'Vertriebsmanagerin LV 1871',
        speakerImage: 'assets/schmidt.jpg'
    }
];

const eventContent = document.querySelector('.event-content');

for (let i = 0; i < events.length; i++) {
    const event = events[i];
    eventContent.innerHTML += `
        <div class="event">
            <div class="event-time">${event.time}</div>
            <div class="event-infos">
                <div class="event-title">${event.title}</div>
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
                    <button class="signup">           
                        JETZT ANMELDEN
                        <img src="assets/icons/forward-white.svg" alt="">
                    </button>
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