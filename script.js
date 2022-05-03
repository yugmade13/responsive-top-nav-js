const mainNav = document.getElementById('main-nav');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

navOpen.addEventListener('click', function () {
    mainNav.classList.add('show-menu');
});

navClose.addEventListener('click', function () {
    mainNav.classList.remove('show-menu');
});

navLink.forEach((item) => {
    item.addEventListener('click', function () {
        const mainNav = document.getElementById('main-nav');
        
        mainNav.classList.remove('show-menu');
        item.classList.add('active-link');
    });
});

// Active Section Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".main-nav a[href*=" + sectionId + "]").classList.add('active-link');
        }else {
            document.querySelector(".main-nav a[href*=" + sectionId + "]").classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Cahnge the background on scroll
function changeHeaderColor() {
    const header = document.getElementById('header');
    
    if(this.scrollY > 100) {
        header.classList.add('change-header');
    }

    if(this.scrollY < 100) {
        header.classList.remove('change-header');
    }
}

window.addEventListener('scroll', changeHeaderColor);