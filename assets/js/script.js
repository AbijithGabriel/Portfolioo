'use strict';

// add EventListener on multiple Elements

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.lenght; i < len ; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}
// preloader 
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});
