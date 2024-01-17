const menubutton = document.querySelector('.menu-button-container');
const menucontainer = document.querySelector('.menu-container');
const headerlink1 = document.querySelector('.link1');
const headerlink2 = document.querySelector('.link2');
const headerlink3 = document.querySelector('.link3');
const headerlink4 = document.querySelector('.link4');

function revealmenu() {
    if (menucontainer.style.display === 'none') {
        menucontainer.style.display = 'block';
    } else {
        menucontainer.style.animation = '0.7s ease-out 0s 1 slideOutToTop';
        setTimeout(function () {
            menucontainer.style.display = 'none';
        }, 700);
    }
    headerlink1.style.animation = '0.7s ease-out 0s 1 slideInFromTop';
    headerlink2.style.animation = '0.7s ease-out 0s 1 slideInFromTop';
    headerlink3.style.animation = '0.7s ease-out 0s 1 slideInFromTop';
    headerlink4.style.animation = '0.7s ease-out 0s 1 slideInFromTop';
    console.log(menucontainer.style.display);
}

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.description',
        start: 'top 60%',
        end: 'bottom 30%',
        scrub: false,
        markers: false,
    }
});

tl.from('.description', {
    opacity: 0,
    duration: 1,
    y: 100,
});

tl.to('.description', {
    opacity: 1,
    duration: 1,
    y: 0,
});

