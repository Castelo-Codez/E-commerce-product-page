import "./style.css";
import Swiper from "swiper";
import {Keyboard, Navigation} from "swiper/modules";
import "swiper/css";
const $productShower = document.querySelector("#productShower");
const $listOfProductImages = document.querySelectorAll(
    "#listOfProductImages > li"
);
const $navOpenner = document.querySelector("#openNav");
const $navClosser = document.querySelector("#closeNav");
const $cartBoxOpenner = document.querySelector("#cartBoxOpenner");
const $cartBox = document.querySelector("#cartBox");
const $aside = document.querySelector("aside");
const overlay = document.querySelector(".overlay");

$navOpenner.addEventListener("click", (e) => {
    e.stopPropagation();
    $changeStateOfNav(true);
});

$navClosser.addEventListener("click", () => {
    $changeStateOfNav(!true);
});

$aside.addEventListener("click", (e) => {
    e.stopPropagation();
});

window.addEventListener("click", () => {
    $changeStateOfNav(!true);
    $cartBox.classList.add("hidden");
});

function $changeStateOfNav(state) {
    if (state) {
        $aside.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    } else {
        $aside.classList.add("hidden");
        overlay.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
}

$cartBoxOpenner.addEventListener("click", (e) => {
    e.stopPropagation();
    $cartBox.classList.toggle("hidden");
});

$cartBox.addEventListener("click", (e) => {
    e.stopPropagation();
});

const swiper = new Swiper(".swiper", {
    modules: [Navigation, Keyboard],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: true,
    direction: "horizontal",
});

$listOfProductImages.forEach(($li) => {
    $li.firstElementChild.addEventListener("click", (e) => {
        $listOfProductImages.forEach((li) =>
            li.firstElementChild.classList.remove("active")
        );
        $li.firstElementChild.classList.add("active");

        $productShower.firstElementChild.src =
            $li.firstElementChild.firstElementChild.src;
    });
});
