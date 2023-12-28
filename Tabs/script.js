"use strict";

const tabsContainer = document.querySelector(".tabs-container");
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabs.forEach((tab_btn) => {
    tab_btn.addEventListener("click", () => {
        const tab = +tab_btn.dataset.tab;

        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.add("hidden");
            tabs[i].classList.remove("-translate-y-1/4")
        }
        
        tabContents[tab].classList.remove("hidden");
        tabs[tab].classList.add("-translate-y-1/4")
    });
});

