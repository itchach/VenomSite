




const title = document.getElementById('title');
const parallaxSection = document.querySelector('.parallax');
const cloud4 = document.getElementById('cloud4');
const cloud5 = document.getElementById('cloud5');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionTop = parallaxSection.offsetTop;
    const sectionHeight = parallaxSection.offsetHeight;
    

    // Only move title while scrolling within the section
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        let relativeScroll = scrollY - sectionTop;

        // Limit the movement so it stops when scrolling past the section
        const maxMovement = sectionHeight; 
        if (relativeScroll > maxMovement) relativeScroll = maxMovement;

        title.style.top = 3 + relativeScroll * 0.1 + 'rem'; // adjust speed
    }
});






window.addEventListener('scroll', () => {
    let value = window.scrollY;
    cloud4.style.left = value * 1.5 + 'px'; 
});

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    cloud5.style.right = value * 0.5 + 'px'; 
});


const zoom = document.getElementById('zoom');
const zoomx = document.getElementById('zoomx');
const zoomy = document.getElementById('zoomy');
const section = document.querySelector('.symbiote');


const elementsx = [
    { el: zoom,  start: 0.2 },
    { el: zoomx, start: 0.3 },
    {el: zoomy, start: 0.1}
];

window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / sectionHeight));

    elementsx.forEach(item => {
        const element = item.el;
        const start = item.start;

        if (progress > start) {

            // FAST movement
            let normTransform = (progress - start) / 0.2;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - (0.2 * normTransform)}) translateY(${80 - (normTransform * 80)}px)`;

            // SUPER FAST fade-in (no fade-out)
            let normOpacity = (progress - start) / 0.1;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));

        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(80px)';
        }
    });
});




function applyTilt(section) {
    const elements = section.querySelectorAll('h1, p, img'); // elements to tilt

    section.addEventListener('mousemove', (e) => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate angle to mouse
            const angleX = (e.clientY - centerY) / 100; // vertical tilt
            const angleY = (e.clientX - centerX) / 100; // horizontal tilt

            // Apply subtle rotation
            el.style.transform = `rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
        });
    });

    // Optional: reset tilt when mouse leaves section
    section.addEventListener('mouseleave', () => {
        elements.forEach(el => {
            el.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
}

// Apply to multiple sections
const sections = document.querySelectorAll('.symbiote, .section3, .section4'); // add your section classes
sections.forEach(sec => applyTilt(sec));




const intro = document.getElementById("introduction");
let maxReached = false; // flag to check if max position reached

window.addEventListener("scroll", () => {
    if (maxReached) return; // stop updating once max reached

    const sectionTop = section.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    const speed = 2;
    const maxMove = 350; // px

    let y = scrollPos * speed;

    if (y >= maxMove) {
        y = maxMove;
        maxReached = true; // lock the position
    }

    if (y < 0) y = 0;

    intro.style.marginTop = `${y}px`;
});




let scrollPos = 0;

window.addEventListener('scroll', () => {
    const target = window.scrollY;
    scrollPos += (target - scrollPos) * 0.7; // smaller number = slower
    window.scrollTo(0, scrollPos);
});     


const section3 = document.querySelector('.section3');
const panel2 = document.getElementById('panel2');
const panel2text = document.getElementById('panel2text');

window.addEventListener('scroll', () => {
    const sectionTop = section3.offsetTop;
    const sectionHeight = section3.offsetHeight;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / sectionHeight));

    // smooth range
    const fadeStart = 0.01; 
    const fadeEnd   = 0.20; // smoother, longer range

    let opacityValue = 0;
    let moveValue = 0;

    if (progress <= fadeStart) {
        opacityValue = 0;
        moveValue = 40; // start lower (40px down)
    } 
    else if (progress >= fadeEnd) {
        opacityValue = 1;
        moveValue = 0; // natural position
    } 
    else {
        const t = (progress - fadeStart) / (fadeEnd - fadeStart);
        opacityValue = t;
        moveValue = 40 - (40 * t); // move upward from 40px → 0px
    }

    panel2.style.opacity = opacityValue;
    panel2text.style.opacity = opacityValue;

    panel2.style.transform = `translateY(${moveValue}px)`;
    panel2text.style.transform = `translateY(${moveValue}px)`;
});

const section4 = document.querySelector('.section4');
const panel3text = document.getElementById('panel3text');
const panel6text = document.getElementById('panel6text');

window.addEventListener('scroll', () => {
    const sectionTop = section4.offsetTop;
    const sectionHeight = section4.offsetHeight;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / sectionHeight));

    // Smooth fade range
    const fadeStart = 0.01;
    const fadeEnd   = 0.10;

    let opacityValue = 0;
    let moveValue = 40;

    if (progress <= fadeStart) {
        opacityValue = 0;
        moveValue = 40;  
    } 
    else if (progress >= fadeEnd) {
        opacityValue = 1;
        moveValue = 0;
    } 
    else {
        const t = (progress - fadeStart) / (fadeEnd - fadeStart);
        opacityValue = t;
        moveValue = 40 - (40 * t);
    }

    // APPLY to both text elements
    panel3text.style.opacity = opacityValue;
    panel3text.style.transform = `translateY(${moveValue}px)`;

});


const agh = document.getElementById('agh');
const ah = document.getElementById('ah');
const panel4 = document.getElementById('paneltxt');
const panel3 = document.getElementById('panel3');
const panel4txt = document.getElementById('panel4text');





const elements4 = [
    { el: ah, start: 0.001 },
    { el: panel4, start: 0.22 },
    { el: panel4txt, start: 0.4 },
    { el: panel6text, start: 0.3 }

];

window.addEventListener('scroll', () => {
    const sectionTop = section4.offsetTop;
    const sectionHeight = section4.offsetHeight;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / sectionHeight));

    elements4.forEach(item => {
        const element = item.el;
        const start = item.start;

        if (progress > start) {

            // smooth upward movement (only Y)
            let normTransform = (progress - start) / 0.2; 
            normTransform = Math.min(normTransform, 1);

            let translateY = 50 - (50 * normTransform);  
            element.style.transform = `translateY(${translateY}px)`;

            // fast fade-in (no fade-out)
            let normOpacity = (progress - start) / 0.00001;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));

        } else {
            // initial state
            element.style.opacity = 0;
            element.style.transform = 'translateY(50px)';
        }
    });
});




window.addEventListener('scroll', () => {
    const sectionTop = section4.offsetTop;
    const sectionHeight = section4.offsetHeight;

    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / sectionHeight));

    // Trigger at very small scroll (like The Boat)
    if (progress > 0.0000000000000000000000000000000001) {
        agh.style.opacity = "1";
        agh.style.transform = "translateY(0)";
    } else {
        agh.style.opacity = "0";
        agh.style.transform = "translateY(40px)";
    }
});


const section5 = document.querySelector('.section5');
const panel5text = document.getElementById('panel5text');

window.addEventListener('scroll', () => {
    const rect = section5.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // progress: 0 = section bottom at bottom of viewport, 1 = section top at top of viewport
    let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
    progress = Math.max(0, Math.min(1, progress)); // clamp 0 → 1

    const start = 0.02;

    if (progress > start) {
        // Parallax motion: move text upward faster than scroll
        let norm = (progress - start) / (1 - start); // normalize 0→1
        let translateY = 50 - 50 * norm;
        panel5text.style.transform = `translateY(${translateY}px)`;

        // Fade-in
        let opacity = Math.min(1, norm * 3); // fades twice as fast

        panel5text.style.opacity = opacity;
    } else {
        panel5text.style.opacity = 0;
        panel5text.style.transform = 'translateY(50px)';
    }
});


const charsec2 = document.querySelector('.bgcharacter2'); // correct BG2 section
const agony = document.getElementById('cagony');

const a = -80; // starting top in rem
const endTop = 40;    // end position in rem
let currentTop = a;

let triggered = false;

function animateAgony() {
    if (!triggered) return;

    // Gradually move towards endTop
    currentTop += (endTop - currentTop) * 0.09; // smaller number = slower
    agony.style.top = currentTop + 'rem';

    // Stop when near endTop
    if (Math.abs(currentTop - endTop) > 0.01) {
        requestAnimationFrame(animateAgony);
    } else {
        agony.style.top = endTop + 'rem';
    }
}

window.addEventListener('scroll', () => {
    const rect = charsec2.getBoundingClientRect();

    if (!triggered && rect.top < window.innerHeight * 0.7) {
        triggered = true;
        agony.style.opacity = 1;   // fade in
        requestAnimationFrame(animateAgony);
    }
});







const ntoxin = document.getElementById('ntoxin');
const nbrock = document.getElementById('nbrock');
const cvenom = document.getElementById('cvenom');
const bgc1 = document.querySelector('.bgcharacter1');

const elementsn = [
    { el: ntoxin, start: 0.5, transformSpeed: 0.2, opacitySpeed: 0.1 }
];

window.addEventListener('scroll', () => {
    const sectionTop = bgc1.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / window.innerHeight));

    elementsn.forEach(item => {
        const element = item.el;
        const start = item.start;
        const tSpeed = item.transformSpeed;
        const oSpeed = item.opacitySpeed;

        if (progress > start) {
            let normTransform = (progress - start) / tSpeed;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - 0.2 * normTransform}) translateY(${0 - 0 * normTransform}px)`;
            let normOpacity = (progress - start) / oSpeed;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));
        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(0px)';
        }
    });
});


// --- Second scroll listener for nvenom in .characterintro ---
const nvenom = document.getElementById('nvenom');
const c1 = document.querySelector('.characterintro');

const elementsm = [
    { el: nvenom, start: 0.9, transformSpeed: 0.2, opacitySpeed: 0.1 } // very fast, appears instantly
];

window.addEventListener('scroll', () => {
    const sectionTop = c1.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / window.innerHeight));

    elementsm.forEach(item => {
        const element = item.el;
        const start = item.start;
        const tSpeed = item.transformSpeed;
        const oSpeed = item.opacitySpeed;

        if (progress > start) {
            let normTransform = (progress - start) / tSpeed;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - 0.2 * normTransform}) translateY(${0 - 0 * normTransform}px)`;
            let normOpacity = (progress - start) / oSpeed;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));
        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(0px)';
        }
    });
});





const ncarnage = document.getElementById('ncarnage');
const carnage = document.getElementById('carnage');
const nagony = document.getElementById('nagony');
const nphage = document.getElementById('nphage');
const nriot = document.getElementById('nriot');
const bgc2 = document.querySelector('.bgcharacter2');


const elementsb = [
    { el: ncarnage, start: 0.0000, transformSpeed: 0.2, opacitySpeed: 0.1 },
    { el: nagony, start: 0.2, transformSpeed: 0.3, opacitySpeed: 0.1 },
    { el: nphage, start: 0.7, transformSpeed: 0.3, opacitySpeed: 0.1 },
    { el: nriot, start: 0.9, transformSpeed: 0.3, opacitySpeed: 0.1 },
    { el: nbrock, start: 0.0000000000000000000000000, transformSpeed: 0.1, opacitySpeed: 0.1 }
];

window.addEventListener('scroll', () => {
    const sectionTop = bgc2.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / window.innerHeight));

    elementsb.forEach(item => {
        const element = item.el;
        const start = item.start;
        const tSpeed = item.transformSpeed;
        const oSpeed = item.opacitySpeed;

        if (progress > start) {
            let normTransform = (progress - start) / tSpeed;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - 0.2 * normTransform}) translateY(${0 - 0 * normTransform}px)`;
            let normOpacity = (progress - start) / oSpeed;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));
        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(0px)';
        }
    });
});

const chybrid = document.getElementById('chybrid');
const nhybrid = document.getElementById('nhybrid');
const nsleeper = document.getElementById('nsleeper');
const bgc3 = document.querySelector('.bgcharacter3');

const elementsv = [
    { el: nhybrid, start: 0.2, transformSpeed: 0.2, opacitySpeed: 0.1 }, // very fast, appears instantly
    { el: chybrid, start: 0.1, transformSpeed: 0.2  , opacitySpeed: 0.1 },
    { el: nsleeper, start: 0.7, transformSpeed: 0.2, opacitySpeed: 0.1 }
];

window.addEventListener('scroll', () => {
    const sectionTop = bgc3.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / window.innerHeight));

    elementsv.forEach(item => {
        const element = item.el;
        const start = item.start;
        const tSpeed = item.transformSpeed;
        const oSpeed = item.opacitySpeed;

        if (progress > start) {
            let normTransform = (progress - start) / tSpeed;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - 0.2 * normTransform}) translateY(${0 - 0 * normTransform}px)`;
            let normOpacity = (progress - start) / oSpeed;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));
        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(0px)';
        }
    });
});


const nlasher = document.getElementById('nlasher');
const nanti = document.getElementById('nanti');
const bgc4 = document.querySelector('.bgcharacter4');

const elementsc = [
    { el: nlasher, start: 0.2, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: nanti, start: 0.8, transformSpeed: 0.3, opacitySpeed: 0.1 }
];

window.addEventListener('scroll', () => {
    const sectionTop = bgc4.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / window.innerHeight));

    elementsc.forEach(item => {
        const element = item.el;
        const start = item.start;
        const tSpeed = item.transformSpeed;
        const oSpeed = item.opacitySpeed;

        if (progress > start) {
            let normTransform = (progress - start) / tSpeed;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - 0.2 * normTransform}) translateY(${0 - 0 * normTransform}px)`;
            let normOpacity = (progress - start) / oSpeed;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));
        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(0px)';
        }
    });
});
const vhead = document.getElementById('vhead');
const black = document.querySelector('.chapter');

// 🔧 CONTROLS
const speeds = 0.05;       // lower = slower movement
const startTop = -30;     // starting position in rem
const maxTop = -20;       // where vhead should STOP (in rem)

// Add smooth transition via CSS
vhead.style.transition = 'top 0.5s ease-out';

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const sectionTop = black.offsetTop;
    const sectionHeight = black.offsetHeight;

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        let relativeScroll = scrollY - sectionTop;

        // calculate movement
        let movement = startTop + relativeScroll * speeds;

        // STOP vhead at maxTop
        if (movement > maxTop) movement = maxTop;

        vhead.style.top = movement + 'rem';
    }
});









    // Elements
    const firstSection = document.querySelector('.chapter');
    const secondSections = document.querySelectorAll('.chapterz1');

    // Trigger flag
    let shakeTriggered = false;

    // Trigger zone helper
    function isInTriggerZone(el, start = 0.3, end = 0.6) {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    return rect.top <= vh * end && rect.bottom >= vh * start;
    }

    // Shake function (5s shake + smooth stop)
    function shakeFor5Seconds(el) {
    const SHAKE_TIME = 2000; // 5 seconds
    const FADE_TIME = 700;   // smooth stop
    const START_INTENSITY = 6;

    el.style.setProperty('--shake', START_INTENSITY);
    el.classList.add('shake');

    setTimeout(() => {
        let start = performance.now();

        function fadeOut(now) {
        const progress = Math.min((now - start) / FADE_TIME, 1);
        el.style.setProperty('--shake', START_INTENSITY * (1 - progress));

        if (progress < 1) {
            requestAnimationFrame(fadeOut);
        } else {
            el.classList.remove('shake');
            el.style.removeProperty('--shake');
            }
        }

        requestAnimationFrame(fadeOut);
        }, SHAKE_TIME);
    }

    // Scroll listener
    window.addEventListener('scroll', () => {
        if (shakeTriggered) return;

        if (isInTriggerZone(firstSection, 0.3, 0.6)) {
        shakeTriggered = true;

        // Shake the first section
        shakeFor5Seconds(firstSection);

        // Shake ALL .chapterr sections
        secondSections.forEach(sec => shakeFor5Seconds(sec));
        }
    });

    

    // Sections to slow down
const slowSections = document.querySelectorAll('.chapter, .chapterz2, .chapterz1, .chapterz3, .bgcharacter1, .bgcharacter2,  .bgcharacter3,  .bgcharacter4 ');

// Virtual scroll positions
let targetScrollY = window.scrollY;
let currentScrollY = window.scrollY;

// Slow factor per section (0 = stop, 1 = normal)
const slowFactorDefault = 0.4;

// Track wheel input
window.addEventListener('wheel', e => {
  let slowFactor = 1; // default = normal scroll

    slowSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      slowFactor = slowFactorDefault; // slow down inside section
    }
    });

  targetScrollY += e.deltaY * slowFactor;
  e.preventDefault(); // stop default scroll
}, { passive: false });

// Smooth interpolation loop
function smoothScroll() {
  currentScrollY += (targetScrollY - currentScrollY) * 0.1; // smooth factor
    window.scrollTo(0, currentScrollY);
    requestAnimationFrame(smoothScroll);
}

requestAnimationFrame(smoothScroll);








    document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        // 🔓 sync custom scroll with real position
        targetScrollY = target.offsetTop;
        currentScrollY = window.scrollY;
    });
    });


    /*
const chap1 = document.getElementById('chap1');
const bchap1 = document.getElementById('bchap1');
const chap2 = document.getElementById('chap2');
const bchap2 = document.getElementById('bchap2');
const chap3 = document.getElementById('chap3');
const bchap3 = document.getElementById('bchap3');
const chap4 = document.getElementById('chap4');
const bchap4 = document.getElementById('bchap4');
const chapterz1 = document.querySelector('.chapterz1');

const elementsq = [
    { el: chap1, start: 0.02, transformSpeed: 0.5, opacitySpeed: 0.1 },
    { el: bchap1, start: 0.08, transformSpeed: 0.5, opacitySpeed: 0.1 },
    { el: chap2, start: 0.1, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap2, start: 0.2, transformSpeed: 0.3, opacitySpeed: 0.1 },
    { el: chap3, start: 0.3, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap3, start: 0.4, transformSpeed: 0.3, opacitySpeed: 0.1 },
    { el: chap4, start: 0.5, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap4, start: 0.6, transformSpeed: 0.3, opacitySpeed: 0.1 }
];

window.addEventListener('scroll', () => {
    const sectionTop = chapterz1.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / window.innerHeight));

    elementsq.forEach(item => {
        const element = item.el;
        const start = item.start;
        const tSpeed = item.transformSpeed;
        const oSpeed = item.opacitySpeed;

        if (progress > start) {
            let normTransform = (progress - start) / tSpeed;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - 0.2 * normTransform}) translateY(${0 - 0 * normTransform}px)`;
            let normOpacity = (progress - start) / oSpeed;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));
        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(0px)';
        }
    });
});







const chap5 = document.getElementById('chap5');
const bchap5 = document.getElementById('bchap5');
const chap6 = document.getElementById('chap6');
const bchap6 = document.getElementById('bchap6');
const chap7 = document.getElementById('chap7');
const bchap7 = document.getElementById('bchap7');
const chap8 = document.getElementById('chap8');
const bchap8 = document.getElementById('bchap8');
const chapterz2 = document.querySelector('.chapterz2');

const elementsw = [
    { el: chap5, start: 0.02, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap5, start: 0.08, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: chap6, start: 0.1, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap6, start: 0.2, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: chap7, start: 0.3, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap7, start: 0.4, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: chap8, start: 0.5, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap8, start: 0.6, transformSpeed: 0.1, opacitySpeed: 0.1 }
];

window.addEventListener('scroll', () => {
    const sectionTop = chapterz2.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / window.innerHeight));

    elementsw.forEach(item => {
        const element = item.el;
        const start = item.start;
        const tSpeed = item.transformSpeed;
        const oSpeed = item.opacitySpeed;

        if (progress > start) {
            let normTransform = (progress - start) / tSpeed;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - 0.2 * normTransform}) translateY(${0 - 0 * normTransform}px)`;
            let normOpacity = (progress - start) / oSpeed;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));
        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(0px)';
        }
    });
});




const chap9 = document.getElementById('chap9');
const bchap9 = document.getElementById('bchap9');
const chap10 = document.getElementById('chap10');
const bchap10 = document.getElementById('bchap10');

const chapterz3 = document.querySelector('.chapterz3');

const elementse = [
    { el: chap9, start: 0.02, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap9, start: 0.08, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: chap10, start: 0.1, transformSpeed: 0.1, opacitySpeed: 0.1 },
    { el: bchap10, start: 0.2, transformSpeed: 0.1, opacitySpeed: 0.1 }
];

window.addEventListener('scroll', () => {
    const sectionTop = chapterz3.offsetTop;
    const scrollPos = window.scrollY - sectionTop;

    let progress = Math.max(0, Math.min(1, scrollPos / window.innerHeight));

    elementse.forEach(item => {
        const element = item.el;
        const start = item.start;
        const tSpeed = item.transformSpeed;
        const oSpeed = item.opacitySpeed;

        if (progress > start) {
            let normTransform = (progress - start) / tSpeed;
            normTransform = Math.min(normTransform, 1);
            element.style.transform =
                `scale(${1.2 - 0.2 * normTransform}) translateY(${0 - 0 * normTransform}px)`;
            let normOpacity = (progress - start) / oSpeed;
            element.style.opacity = Math.max(0, Math.min(normOpacity, 1));
        } else {
            element.style.opacity = 0;
            element.style.transform = 'scale(1.2) translateY(0px)';
        }
    });
});
    */


// ------------------------
// Utility function for scroll-triggered animations
// ------------------------
function setupChapterAnimation(elements, chapterClass) {
    const chapterSection = document.querySelector(chapterClass);

    // Initialize elements
    elements.forEach(item => {
        item.el.style.opacity = '0';
        item.el.style.transform = 'scale(1.2) translateY(50px)';
        item.triggered = false; // flag to trigger animation once
    });

    window.addEventListener('scroll', () => {
        const sectionTop = chapterSection.offsetTop;
        const scrollPos = window.scrollY - sectionTop;
        const vh = window.innerHeight;
        const progress = Math.max(0, scrollPos / vh);

        elements.forEach(item => {
            if (!item.triggered && progress > item.start) {
                item.triggered = true;
                item.el.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
                item.el.style.transform = 'scale(1) translateY(0)';
                item.el.style.opacity = '1';
            }
        });
    });
}

// ------------------------
// Chapterz1
// ------------------------
const elementsq = [
    { el: document.getElementById('chap1'), start: 0.02 },
    { el: document.getElementById('bchap1'), start: 0.08 },
    { el: document.getElementById('chap2'), start: 0.1 },
    { el: document.getElementById('bchap2'), start: 0.2 },
    { el: document.getElementById('chap3'), start: 0.3 },
    { el: document.getElementById('bchap3'), start: 0.4 },
    { el: document.getElementById('chap4'), start: 0.5 },
    { el: document.getElementById('bchap4'), start: 0.6 }
];
setupChapterAnimation(elementsq, '.chapterz1');

// ------------------------
// Chapterz2
// ------------------------
const elementsw = [
    { el: document.getElementById('chap5'), start: 0.02 },
    { el: document.getElementById('bchap5'), start: 0.08 },
    { el: document.getElementById('chap6'), start: 0.1 },
    { el: document.getElementById('bchap6'), start: 0.2 },
    { el: document.getElementById('chap7'), start: 0.3 },
    { el: document.getElementById('bchap7'), start: 0.4 },
    { el: document.getElementById('chap8'), start: 0.5 },
    { el: document.getElementById('bchap8'), start: 0.6 }
];
setupChapterAnimation(elementsw, '.chapterz2');

// ------------------------
// Chapterz3
// ------------------------
const elementse = [
    { el: document.getElementById('chap9'), start: 0.02 },
    { el: document.getElementById('bchap9'), start: 0.08 },
    { el: document.getElementById('chap10'), start: 0.1 },
    { el: document.getElementById('bchap10'), start: 0.2 }
];
setupChapterAnimation(elementse, '.chapterz3');




/*
// Get elements
const cVenom = document.getElementById('cvenom'); // the clickable image
const characterModal = document.getElementById('characterContainer');
const closeBtn = document.getElementById('closeCharacter');

// Show modal when clicking the image
cVenom.addEventListener('click', () => {
    characterModal.style.display = 'flex'; // show modal
});

// Close modal when clicking the ✕ button
closeBtn.addEventListener('click', () => {
    characterModal.style.display = 'none';
});

// Optional: close modal if clicking outside the inner content
characterModal.addEventListener('click', (e) => {
    if (e.target === characterModal) {
        characterModal.style.display = 'none';
    }
});*/

// Get modal elements
const characterModal = document.getElementById('characterContainer');
const closeBtn = document.getElementById('closeCharacter');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalInfo = document.getElementById('modalInfo');

// Select all images with id starting with "c"
const characterImages = document.querySelectorAll('img[id^="c"]');

// Example data for each character
const characterData = {
    cvenom: {
        name: "The Endless Hunger   ",
        img: "cvenom.png",
        info: `
            <p><strong><h1>Origin</h1></strong><br>
            In the depths of the cosmos, far beyond the known galaxies, exists an ancient, parasitic species known as the Klyntar. These beings survive by bonding with hosts, forming a hybrid lifeform that amplifies the physical and mental capabilities of the host while influencing their darker instincts. One Klyntar, later called Venom, was different—curious, intelligent, and capable of both violence and empathy, traits rare among its kind.</p>
            
            
        ` 
    },
    cbrock: {
        name: "The Man Behind the Monster",
        img: "cbrock.png",
        info:`
            <p><strong><h1>EDDIE'S BACKGROUND</h1></strong><br>
            Once a fallen journalist, Eddie’s life shattered under betrayal and humiliation. The Venom symbiote found him at his lowest, amplifying both his power and his fury. Together, they become a force of chaos and protection, a shadow in the night feared by criminals. Eddie fights not just enemies, but his own darkness, learning that strength comes from control as much as power.</p>
            
            
        ` 
    },
    ctoxin: {
        name: "The Offspring of Chaos",
        img: "toxicin.png",
        info: `
            <p><strong><h1>Origin</h1></strong><br>
            Toxin is the child of Carnage, making him the third generation of the most dangerous symbiotes. Born from pure chaos, he was meant to be an agent of destruction, but unlike Carnage, Toxin inherited a fragment of morality from his alien genetics. His first host was Patrick Mulligan, a young police officer whose sense of justice clashed with the symbiote’s violent instincts.</p>
            
            
        ` 
    },
    carnage: {
        name: "The Spawn of Chaos",
        img: "ccarnage.png",
        info: `
            <p><strong><h1>Origin</h1></strong><br>
            Carnage is the offspring of Venom, born when the symbiote spawned a new generation. Unlike Venom, Carnage inherited pure chaos and aggression, a symbiote untempered by morality or restraint. Its first host, Cletus Kasady, was a psychotic serial killer whose mind perfectly matched the symbiote’s thirst for violence. Together, they became a nearly unstoppable force of destruction, merging human insanity with alien rage.</p>
            
            
        ` 
    },
    cagony: {
        name: "The Venomous Torment",
        img: "cagony.png",
        info:`
            <p><strong><h1>Origin</h1></strong><br>
            Agony is one of the children of Carnage, born from a fragment of his chaotic essence. Unlike Carnage, Agony’s nature is tied to suffering rather than sheer violence—it feeds on pain, fear, and emotional torment. Its first host, Leslie Gesneria, was a weak-willed scientist who became a vessel for Agony’s influence, amplifying her insecurities and fears into a horrifying form of power.</p>
            
            
        ` 
    },
    cphage: {
        name: "The Hunter of Shadows",
        img: "cphage.png",
        info: `
            <p><strong><h1>Origin</h1></strong><br>
            Phage is one of the five Life Foundation symbiotes, artificially created from Venom to serve as living weapons. Unlike Venom, Phage was designed to be aggressive and obedient, a perfect predator with a thirst for violence. Its first host was Carl Mach, a mercenary who eagerly embraced the power Phage granted him.</p>
            
            
        ` 
    },
    criot: {
        name: "The Mercenary Juggernaut",
        img: "criot.png",
        info: `
            <p><strong><h1>Origin</h1></strong><br>
            Riot is one of the Life Foundation symbiotes, created from Venom to serve as a powerful enforcer and weapon. Unlike Venom or other offspring, Riot was engineered to prioritize raw power and dominance, making it nearly unstoppable in combat. Its first host was Trevor Cole, a ruthless mercenary whose violent nature perfectly aligned with Riot’s purpose.</p>
            
            
        ` 
    },
    chybrid: {
        name: "The Perfect Fusion",
        img: "chybrid.png",
        info:`
            <p><strong><h1>Origin</h1></strong><br>
            Hybrid is a symbiote born from the fusion of four Life Foundation symbiotes: Riot, Phage, Lasher, and Agony. Unlike its “parents,” Hybrid is more intelligent, strategic, and adaptable, combining the strengths and traits of each symbiote into a single, terrifying entity. Its first host was Scott Washington, a man with a strong sense of justice, whose morality created a balance between the symbiote’s chaotic instincts and control.</p>
            
            
        ` 
    },
    csleeper: {
        name: "The Silent Predator",
        img: "csleeper.png",
        info: `
            <p><strong><h1>Origin</h1></strong><br>
            Sleeper is one of the Life Foundation symbiotes, created as an experimental blend to explore stealth, infiltration, and subtlety rather than brute force. Unlike Riot or Phage, Sleeper was designed to be patient and calculating, lying dormant until the perfect opportunity to strike arises. Its first host is Mattie Franklin, who inadvertently bonded with Sleeper, giving the symbiote access to both her skills and human morality.</p>
            
            
        ` 
    },

    clasher: {
        name: "The Whipping Fury",
        img: "clasher.png",
        info: `
            <p><strong><h1></h1>Origin</strong><br>
            Lasher is one of the Life Foundation symbiotes, artificially created from Venom to serve as a weaponized predator. Its design emphasized speed, agility, and offensive versatility, making it deadly in combat. The first host of Lasher was Ramon Hernandez, a mercenary whose aggressive instincts perfectly matched the symbiote’s nature.</p>
            
            
        ` 
    },

    canti:{
        name: "The Cleansing Symbiote",
        img: "canti.png",
        info:`
            <p><strong><h1>Origin</h1></strong><br>
            Anti-Venom is a unique symbiote born from a fusion of Eddie Brock’s antibodies and remnants of the Venom symbiote after a near-death experience. Unlike Venom, Anti-Venom’s purpose is purification—it can cure diseases, cleanse toxins, and even weaken other symbiotes. Its creation was accidental, born from Eddie’s body fighting off cancer while bonding with remnants of the original symbiote.</p>
            
            
        ` 
    },
    
};












// Loop through each "c" image and add click event
characterImages.forEach(img => {
    img.addEventListener('click', () => {
        const data = characterData[img.id]; // get data based on id
        if (!data) return; // skip if no data

        // Fill modal content
        modalTitle.textContent = data.name;
        modalImage.src = data.img;
        modalImage.alt = data.name;
        modalInfo.innerHTML = `<p>${data.info}</p>`;

        // Show modal
        characterModal.style.display = 'flex';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    characterModal.style.display = 'none';
});

// Close if click outside modal
characterModal.addEventListener('click', (e) => {
    if (e.target === characterModal) {
        characterModal.style.display = 'none';
    }
});

const liquid = document.getElementById('liquid');
const liquid2 = document.getElementById('liquid2');
const sectiona = document.querySelector('.symbiote-section');

window.addEventListener('scroll', () => {
    const sectionTop = sectiona.getBoundingClientRect().top;
    const scrollSpeed = 0.3; // adjust for parallax intensity
    if(sectionTop < window.innerHeight) {
        // moves slower than scroll to create parallax
        liquid.style.transform = `translateX(-50%) translateY(${Math.max(0, -sectionTop * scrollSpeed)}px)`;
        liquid2.style.transform = `translateX(-50%) translateY(${Math.max(0, -sectionTop * scrollSpeed)}px)`;
        
    }
});


const cursor = document.getElementById('venomCursor');
const whipSegments = [];
const MAX_SEGMENTS = 15; // number of trailing segments

    // create segments
    for(let i=0;i<MAX_SEGMENTS;i++){
    const seg = document.createElement('div');
    seg.className = 'whip';
    document.body.appendChild(seg);
    whipSegments.push({el: seg, x:0, y:0});
    }

    let mouse = {x: window.innerWidth/2, y: window.innerHeight/2};

    document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // move the main cursor
    cursor.style.left = mouse.x + 'px';
    cursor.style.top = mouse.y + 'px';
    });

    function animate() {
    // first segment follows the cursor
    let prevX = mouse.x;
    let prevY = mouse.y;

    whipSegments.forEach((seg, index) => {
        // follow previous point with some easing
        seg.x += (prevX - seg.x) * 0.2;
        seg.y += (prevY - seg.y) * 0.2;

        seg.el.style.left = seg.x + 'px';
        seg.el.style.top = seg.y + 'px';
        
        // make tail segments fade
        seg.el.style.opacity = (1 - index/MAX_SEGMENTS) * 0.6;

        prevX = seg.x;
        prevY = seg.y;
    });

    requestAnimationFrame(animate);
    }

    animate();

    const pointer = document.getElementById('pointer');

    document.addEventListener('mousemove', e => {
    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px';
    });

    const venomCursor = document.getElementById('venomCursor');

    document.addEventListener('mousemove', (e) => {
    venomCursor.style.left = e.clientX + 'px';
    venomCursor.style.top = e.clientY + 'px';
    });



    const cover = document.getElementById('cover');
    const enterBtn = document.getElementById('enterBtn');


enterBtn.addEventListener('click', () => {
    cover.style.display = 'none';
    // Reset scroll positions
    window.scrollTo(0, 0);
    scrollPos = 0;
    targetScrollY = 0;
    currentScrollY = 0;
});


    const tooltip = document.getElementById("tooltip");
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        tooltip.innerText = btn.dataset.label;
        tooltip.style.opacity = 1;

        const rect = btn.getBoundingClientRect();
        tooltip.style.top = `${rect.top + rect.height / 2}px`;
        tooltip.style.left = `${rect.left - tooltip.offsetWidth - 8}px`;
    });

    btn.addEventListener("mousemove", () => {
        const rect = btn.getBoundingClientRect();
        tooltip.style.top = `${rect.top + rect.height / 2}px`;
        tooltip.style.left = `${rect.left - tooltip.offsetWidth - 8}px`;
    });

    btn.addEventListener("mouseleave", () => {
        tooltip.style.opacity = 0;
    });
    });

    const coverp = document.getElementById('cover');
const enterBtnp = document.querySelector('#cover .enter-btn');

enterBtnp.addEventListener('click', () => {
    coverp.style.display = 'none';          // hide cover
    document.body.classList.add('cover-hidden'); // reveal nav
});
