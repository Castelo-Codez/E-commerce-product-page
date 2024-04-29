import "./style.css";
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
    } else {
        $aside.classList.add("hidden");
        overlay.classList.add("hidden");
    }
}

$cartBoxOpenner.addEventListener("click", (e) => {
    e.stopPropagation();
    $cartBox.classList.toggle("hidden");
});

$cartBox.addEventListener("click", (e) => {
    e.stopPropagation();
});
