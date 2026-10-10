
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

function closeMenu() {
  menuToggle.classList.remove("active");
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Menyuni ochish");
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Menyuni yopish" : "Menyuni ochish"
  );
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    closeMenu();
  }
});
