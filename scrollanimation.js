const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const menucontainer = document.querySelector('.menu-container');
const headerlink1 = document.querySelector('.link1');
const headerlink2 = document.querySelector('.link2');
const headerlink3 = document.querySelector('.link3');
const headerlink4 = document.querySelector('.link4');

function revealmenu() {
    if (menucontainer.style.display === 'none') {
        menucontainer.style.display = 'block';
        line1.style.transform = 'rotate(45deg) translate(5px, 0px) scale(1.5)';
        line2.style.transform = 'rotate(-45deg) translate(5px, 0px) scale(1.5)';
        headerlink1.style.display = 'block';
        headerlink1.style.animation = '0.7s ease-out 0s 1 slideInFromBottom';
        setTimeout(function () {
            headerlink2.style.display = 'block';
            headerlink2.style.animation = '0.7s ease-out 0s 1 slideInFromBottom';
        }, 100);
        setTimeout(function () {
            headerlink3.style.display = 'block';
            headerlink3.style.animation = '0.7s ease-out 0s 1 slideInFromBottom';
        }, 200);
        setTimeout(function () {
            headerlink4.style.display = 'block';
            headerlink4.style.animation = '0.7s ease-out 0s 1 slideInFromBottom';
        }, 300);
    } else {

        headerlink1.style.animation = '0.7s ease-out 0s 1 return';
        setTimeout(function () {
            headerlink1.style.display = 'none';
        }, 700);
        headerlink2.style.animation = '0.7s ease-out 0s 1 return';
        setTimeout(function () {
            headerlink2.style.display = 'none';
        }, 700);
        headerlink3.style.animation = '0.7s ease-out 0s 1 return';
        setTimeout(function () {
            headerlink3.style.display = 'none';
        }, 700);
        headerlink4.style.animation = '0.7s ease-out 0s 1 return';
        setTimeout(function () {
            headerlink4.style.display = 'none';
        }, 700);
        menucontainer.style.animation = '0.7s ease-out 0s 1 slideOutToTop';
        line1.style.transform = 'rotate(0deg) translate(0px, 0px) scale(1)';
        line2.style.transform = 'rotate(0deg) translate(0px, 0px) scale(1)';
        setTimeout(function () {
            menucontainer.style.display = 'none';
        }, 700);
    }
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

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.skill-card',
        start: 'top 80%',
        end: '30% 60%',
        scrub: false,
        markers: false,
    }
});

tl2.from('.skill-card', {
    opacity: 0,
    duration: 1,
});

tl2.to('.skill-card', {
    opacity: 1,
    duration: 1,
});

tl2.from('.skill-name-container', {
    opacity: 0,
    duration: 1,
    x: -100,
});

tl2.to('.skill-name-container', {
    opacity: 1,
    duration: 1,
    x: 0,
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.skill-card2',
        start: 'top 80%',
        end: '30% 60%',
        scrub: false,
        markers: false,
    }
});

tl3.from('.skill-card2', {
    opacity: 0,
    duration: 1,
});

tl3.to('.skill-card2', {
    opacity: 1,
    duration: 1,
});

tl3.from('.skill-name-container2', {
    opacity: 0,
    duration: 1,
    x: 100,
});

tl3.to('.skill-name-container2', {
    opacity: 1,
    duration: 1,
    x: 0,
});