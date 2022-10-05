// TweenMax.staggerFrom('.anim-first', 1, {
//     delay: 0.4,
//     opacity: 0,
//     x: -20,
//     ease: Power4.easeInOut
// }, 0.08)
// // TweenMax.staggerFrom('.about-story', 1, {
// //         delay: 0.4,
// //         opacity: 0,
// //         x: -20,

// //         ease: Power4.easeInOut
// //     }, 0.08)
// TweenMax.from('.classydev-pic', 1, {
//     delay: 1,
//     opacity: 0,
//     x: -20,
//     ease: Expo.easeInOut
// })
// TweenMax.to('.name-headers', 1, {
//     delay: 0.2,
//     // width: '100%',
//     ease: Expo.easeInOut
// })
const text = document.querySelector('.name-headers h1')
// let splitText = new SplitType(".name-headers h1")
// console.log(splitText.words);
//  gsap.to(".words",{
//     y: 0,
//     delay: 0.2,
//     duration: .1,
//  })

let tl = gsap.timeline({ defaults: { opacity: 0, ease: "linear" } });

function init() {
    tl.from("#demo", {
        ease: "power1.inOut",
        autoAlpha: 0
    })
        .from(".name-headers h1", { y: 0, duration: 1 })
        .from(".name-headers h2", { x: -80, duration: 1 }, "<")
        .from(".about-story p", { y: 30 })
        .from(".classydev-pic", { opacity: 0,
            x: -20, ease: "back" }, "2")
        .from(".name-headers button", { y: 50, }, "-=0.4")
        .from("#items > g", { scale: 0, stagger: 0.1, transformOrigin: "50% 50%" }, "-=0.5")
}

window.addEventListener("load", () => {
    init()
})
let svgElems = document.querySelectorAll(".project-link-con")
let svgElemParents = document.querySelectorAll(".each-project")
svgElemParents.forEach((svgElemParent, idx) => {
    svgElemParent.addEventListener("mouseenter", () => {
        svgElems[idx].querySelectorAll(".project-link-con a svg").forEach(e => {
            e.classList.add("hovered")
        })
    })
    svgElemParent.addEventListener("mouseleave", () => {
        svgElems[idx].querySelectorAll(".project-link-con a svg").forEach(e => {
            e.classList.remove("hovered")
        })
    })
});
// (function () {

//     "use strict";

//     var win = window
//         , doc = document
//         , target = doc.getElementsByTagName('body')[0]
//         , children = target.childNodes
//         , childTag = 'DIV'
//         , easing = "ease-out" //css easing
//         , duration = "1.2s" //duration ms(millisecond) or s(second)
//         , top = 0
//         , wrappers = [];

//     for (var i = 0; i < children.length; i++) {
//         if (children[i].tagName == childTag) {
//             wrappers.push(children[i]);
//         }
//     }

//     var mScroll = {
//         _init: function () {
//             target.style.height = wrappers[0].offsetHeight + 'px';
//             target.style.overflow = 'auto';

//             wrappers[0].style.transition = 'transform ' + duration + ' ' + easing;
//             wrappers[0].style.position = 'fixed';
//             wrappers[0].style.top = '0';
//             wrappers[0].style.left = '0';
//             wrappers[0].style.width = '100%';
//             wrappers[0].style.padding = '0';
//             wrappers[0].style.zIndex = '2';
//             wrappers[0].style.display = 'block';
//             wrappers[0].style.backfaceVisibility = 'hidden';
//         },
//         _scroll: function () {
//             top = -(win.pageYOffset || doc.documentElement.scrollTop);
//             wrappers[0].style.transform = 'translateY(' + top + 'px)';
//         }
//     };

//     if (typeof window.ontouchstart == 'undefined' && wrappers.length == 1) {
//         win.onload = function () {
//             mScroll._init();
//         };
//         win.onscroll = function () {
//             mScroll._scroll();
//         };
//         win.onresize = function () {
//             target.style.height = wrappers[0].offsetHeight + 'px';
//         };
//     }
// })();


