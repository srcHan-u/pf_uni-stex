// https://github.com/graingert/wow documentation


import WOW from '../../../node_modules/wow.js/dist/wow.min.js'


window.addEventListener('load', () => {
    const config = new WOW({
        boxClass: 'anim',
        animateClass: 'animate__animated'
        // resetAnimation: false
    });
    config.init();
})
// console.log(WOW)

// const config = new WOW(
//     {
//         boxClass: 'anim',
//         nimateClass: 'animated'
//     }
// )

// config.init()
// console.log(config)