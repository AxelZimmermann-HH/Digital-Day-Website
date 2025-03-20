const speakers = [
    {
        name: 'Donald J. Trump',
        position: 'CEO United States of America',
        image: 'assets/trump.jpg',
        infos: 'Das ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald Trump',
    },
    {
        name: 'Albus Dumbledore',
        position: 'Director Hogwarts School of Witchcraft and Wizardry',
        image: 'assets/dumbledore.jpg',
        infos: 'Das ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald Trump',

    },
    {
        name: 'Peppa Pig',
        position: 'Marketing Professional',
        image: 'assets/peppa.jpg',
        infos: 'Das ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald Trump',

    },
    {
        name: 'Capital Bra',
        position: 'Capital Expert / Talahon',
        image: 'assets/capital.jpg',
        infos: 'Das ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald TrumpDas ist ein Text über Donald Trump',

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


const events = [
    {
        time: '9.00 UHR',
        title: 'Wie erreiche ich 1 Million Follower in 10 Sekunden?',
        description: 'Donald J. Trump gibt populistische Tipps und Tricks, um eine hohe Reichweite auf X zu erreichen. Wie kommen Unwahrheiten am besten zum Einsatz?',
        speakerName: 'Donald J. Trump',
        speakerPosition: 'CEO United States of America',
        speakerImage: 'assets/trump.jpg'
    },
    {
        time: '11.00 UHR',
        title: 'Magische Momente auf Tiktok',
        description: 'Albus Dumbledore ist einer der Top-Influencer der Gen Z und verzaubert seine Lehrlinge mit funny content.',
        speakerName: 'Albus Dumbledore',
        speakerPosition: 'Director Hogwarts School of Witchcraft and Wizardry',
        speakerImage: 'assets/dumbledore.jpg'
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
        time: '16.00 UHR',
        title: 'Mach Schnapp auf dem Black Market!',
        description: 'Der Bratan himself erklärt in 45 Minuten, wie Vertriebler auf der Straße gefährlicher wirken und so ihren Umsatz steigern können.',
        speakerName: 'Capital Bra',
        speakerPosition: 'Capital Expert / Talahon',
        speakerImage: 'assets/capital.jpg'
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


// document.getElementById('redirect-button').onclick = () => {
//     window.location.href = 'https://www.cash-online.de';
// };

function redirectToCash() {
    window.location.href = 'https://www.cash-online.de';
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

document.querySelector('.outter-layer-speaker').addEventListener('click', function (event) {
    if (!event.target.closest('.inner-layer-speaker')) {
        closeLayer();
    }
});

function closeLayer() {
    document.querySelector('.outter-layer-speaker').classList.add('d-none');
    document.body.style.overflow = 'auto';
}