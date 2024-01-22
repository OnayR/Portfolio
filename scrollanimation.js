let body = document.querySelector('body');

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const menucontainer = document.querySelector('.menu-container');
const headerlink1 = document.querySelector('.link1');
const headerlink2 = document.querySelector('.link2');
const headerlink3 = document.querySelector('.link3');
const headerlink4 = document.querySelector('.link4');

let cursor = document.querySelector('#cursor');
let orb1 = document.querySelector('#orb1');

document.addEventListener('mousemove', e => {
});

document.addEventListener('mousemove', e => {
    // body.style.backgroundPositionX = -e.pageX / -4 + 'px';
    // body.style.backgroundPositionY = -e.pageY / -4 + 'px';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    console.log(e.pageX, e.pageY);
});

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
        headerlink2.style.animation = '0.7s ease-out 0s 1 return';
        headerlink3.style.animation = '0.7s ease-out 0s 1 return';
        headerlink4.style.animation = '0.7s ease-out 0s 1 return';
        setTimeout(function () {
            headerlink1.style.display = 'none';
            headerlink2.style.display = 'none';
            headerlink3.style.display = 'none';
            headerlink4.style.display = 'none';
        }, 700);
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