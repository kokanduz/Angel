
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".hero h1");
    const wings = document.querySelector(".hero-art .wings");
    const comingSoon = document.querySelector(".hero-copy:after");

    // ANGEL logotipi kirish animatsiyasi
    if (logo) {
        logo.style.opacity = "0";

        setTimeout(() => {
            logo.style.transition = "opacity 1.5s ease";
            logo.style.opacity = "1";
        }, 300);
    }

    // Qanotlarga mayin harakat
    if (wings) {
        wings.style.transformOrigin = "center";
        wings.style.animation = "float 4s ease-in-out infinite";
    }

    // Sahifa ochilganda konsolga xabar
    console.log("ANGEL — TEZ KUNDA ✨");
});
