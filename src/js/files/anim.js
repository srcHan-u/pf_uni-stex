// https://github.com/graingert/wow documentation


import WOW from '../../../node_modules/wow.js/dist/wow.min.js'


window.addEventListener('load', () => {
    const config = new WOW({
        boxClass: 'anim',
        animateClass: 'animate__animated'
    });
    config.init();
})
