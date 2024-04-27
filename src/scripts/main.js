AOS.init();

const eventDate = new Date("Jul 26, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const dateCounter = setInterval(function () {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const eventDistance = eventTimeStamp - nowTimeStamp;
    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minutesMs = 1000 * 60;

    const daysUntilTheEvent = Math.floor(eventDistance / daysMs);
    const hoursUntilTheEvent = Math.floor((eventDistance % daysMs) / hoursMs);
    const minutesUntilTheEvent = Math.floor((eventDistance % hoursMs) / minutesMs);
    const secondsUntilTheEvent = Math.floor((eventDistance % minutesMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilTheEvent}d ${hoursUntilTheEvent}h ${minutesUntilTheEvent}m ${secondsUntilTheEvent}s`;

    if (eventDistance < 0) {
        clearInterval(dateCounter);
        document.getElementById('status').innerHTML = 'Filme disponível!';
        document.getElementById('counter').innerHTML = '';
    }
}, 1000);