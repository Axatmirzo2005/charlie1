document.addEventListener('DOMContentLoaded', function() {

    const navBtn = document.querySelector('.nav-hamburger');

    const tl2 = gsap.timeline({defaults: { ease: Expo.easeOut, duration: 1 }});

    navBtn.addEventListener('click', () => {
        if(navBtn.classList.contains('active')) {
            navBtn.classList.remove('active');

            document.querySelector('.nav-logo').style.filter = 'none';

            tl2.to('.nav-open-wrapper', { y: '-100%', opacity: 0 })
                .to('.open-nav-link', { y: '100%', stagger: .3, opacity: 0}, "-=1")
                .to('.nav-secondary-item', { y: '100%', stagger: .3, opacity: 0 }, "-=1")
                .to('.line', { width: '0%', stagger: .3 }, "-=.1");

        } else {
            navBtn.classList.add('active');

            tl2.to('.nav-open-wrapper', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 })
                .to('.open-nav-link', { y: 0, stagger: .3, opacity: 1 }, "-=1")
                .to('.nav-secondary-item', { y: 0, stagger: .3, opacity: 1 }, "-=1")
                .to('.line', { width: '100%', stagger: .2 }, "-=1");
            
            document.querySelector('.nav-logo').style.filter = 'invert(100%)';
        }
    });

    let tl = gsap.timeline({Defaults: { Easing: Expo.easeOut}});

    tl.from('.hero-overlay', { height: '0vh', bottom: '-100%', duration: 1.5, ease: Expo.easeOut, delay: 0.2 })
        .to('.span-text', { y: 0, opacity: 1, stagger: .3, duration: 1.5, delay: 0.2 }, '-=2')
        .to('.anim-para', { y: 0, opacity: 1, stagger: .4, duration: 1.5, delay: 0.2 }, '-=2')
        .to('.scroll-indicator-wrap', { opacity: 1, stagger: .3, duration: 1.5, delay: 0.2 }, '-=2')


});