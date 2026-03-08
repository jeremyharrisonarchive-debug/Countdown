const launchDate = new Date("June 1, 2026 00:00:00").getTime();

let prev = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
};

function updateNumber(id, value) {
    const el = document.getElementById(id);

    if (prev[id] !== value) {

        el.style.animation = "none";
        el.offsetHeight; 
        el.style.animation = "slideDown 0.5s ease";

        el.textContent = value.toString().padStart(2, "0");

        prev[id] = value;
    }
}

setInterval(function () {

    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateNumber("days", days);
    updateNumber("hours", hours);
    updateNumber("minutes", minutes);
    updateNumber("seconds", seconds);

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "SIGNAL RECEIVED";
    }

}, 1000);