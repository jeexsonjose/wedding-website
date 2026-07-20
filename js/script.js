function startCountdown(targetDate, daysId, hoursId, minutesId, secondsId) {

    function updateCountdown() {

        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();

        const difference = target - now;


        if (difference <= 0) {
            document.getElementById(daysId).innerHTML = 0;
            document.getElementById(hoursId).innerHTML = 0;
            document.getElementById(minutesId).innerHTML = 0;
            document.getElementById(secondsId).innerHTML = 0;
            return;
        }


        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60)) /
            1000
        );


        document.getElementById(daysId).innerHTML = days;
        document.getElementById(hoursId).innerHTML = hours;
        document.getElementById(minutesId).innerHTML = minutes;
        document.getElementById(secondsId).innerHTML = seconds;
    }


    updateCountdown();

    setInterval(updateCountdown, 1000);
}



// Engagement Countdown
startCountdown(
    "October 22, 2026 11:00:00",
    "eng-days",
    "eng-hours",
    "eng-minutes",
    "eng-seconds"
);


// Wedding Countdown
startCountdown(
    "October 26, 2026 11:00:00",
    "wed-days",
    "wed-hours",
    "wed-minutes",
    "wed-seconds"
);



const storyLink = document.getElementById('story-link');
const contactLink = document.getElementById('contact-link');
const venueLink = document.getElementById('venue-link');
const aboutLink = document.getElementById('about-link');
const storyModal = document.getElementById('storyModal');
const contactModal = document.getElementById('contactModal');
const venueModal = document.getElementById('venueModal');
const aboutModal = document.getElementById('aboutModal');
const closeButtons = document.querySelectorAll('.modal .close');

storyLink.addEventListener('click', event => {
    event.preventDefault();
    storyModal.style.display = 'block';
});

contactLink.addEventListener('click', event => {
    event.preventDefault();
    contactModal.style.display = 'block';
});

venueLink.addEventListener('click', event => {
    event.preventDefault();
    venueModal.style.display = 'block';
});

aboutLink.addEventListener('click', event => {
    event.preventDefault();
    aboutModal.style.display = 'block';
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        storyModal.style.display = 'none';
        contactModal.style.display = 'none';
        venueModal.style.display = 'none';
        aboutModal.style.display = 'none';
    });
});

window.addEventListener('click', event => {
    if (event.target === storyModal) storyModal.style.display = 'none';
    if (event.target === contactModal) contactModal.style.display = 'none';
    if (event.target === venueModal) venueModal.style.display = 'none';
    if (event.target === aboutModal) aboutModal.style.display = 'none';
});

// Remove the duplicate listener below - delete these lines:
// window.addEventListener('click', event => {
//     if (event.target === storyModal) storyModal.style.display = 'none';
//     if (event.target === contactModal) contactModal.style.display = 'none';
//     if (event.target === venueModal) venueModal.style.display = 'none';
// });

const people = {

    jeexson:{

        name:"Jeexson Jose",

        description:`
Software Engineer

Currently living in Belgium.

Loves travelling, playing music and volleyball.

Believes every journey is
better when shared with
someone special.
`
    },

    julie:{

        name:"Julie Mathew",

        description:`
Kind-hearted and family-oriented.

Believes in love, laughter,
and making memories together.

Always brings warmth and
positivity wherever she goes.
`
    }

};

const nameBox = document.getElementById("person-name");

const descriptionBox =
document.getElementById("person-description");

document.getElementById("jeexson-photo")
.addEventListener("click",function(){

    nameBox.innerHTML =
    people.jeexson.name;

    descriptionBox.innerHTML =
    people.jeexson.description;

});


document.getElementById("julie-photo")
.addEventListener("click",function(){

    nameBox.innerHTML =
    people.julie.name;

    descriptionBox.innerHTML =
    people.julie.description;

});

// Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
let currentImageIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        lightboxImage.src = img.src;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex].src;
});

lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImageIndex].src;
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});