"use strict";

const $ = id => document.getElementById(id);

const mangaData = [
  {id:1,title:"One Piece",genre:"Adventure",rating:9.8,chapters:1120,status:"Davom etmoqda",image:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",description:"Monkey D. Luffy va uning jamoasi afsonaviy xazinani izlab dengizlarda katta sarguzashtga yo'l oladi."},
  {id:2,title:"Naruto",genre:"Action",rating:9.5,chapters:700,status:"Tugallangan",image:"https://images.unsplash.com/photo-1614583225154-5fcdda07019e?auto=format&fit=crop&w=600&q=80",description:"Naruto Uzumaki eng kuchli ninja bo'lish va qishlog'ining hurmatiga sazovor bo'lishni orzu qiladi."},
  {id:3,title:"Attack on Titan",genre:"Drama",rating:9.7,chapters:139,status:"Tugallangan",image:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",description:"Insoniyat devorlar ortida yashab, titanlar xavfiga qarshi omon qolish uchun kurashadi."},
  {id:4,title:"Demon Slayer",genre:"Action",rating:9.4,chapters:205,status:"Tugallangan",image:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",description:"Tanjiro oilasini himoya qilish va singlisini qutqarish uchun iblis ovchilariga qo'shiladi."},
  {id:5,title:"Solo Leveling",genre:"Fantasy",rating:9.6,chapters:200,status:"Tugallangan",image:"https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80",description:"Dunyodagi eng zaif ovchi sirli tizim orqali kuchli jangchiga aylana boshlaydi."},
  {id:6,title:"Jujutsu Kaisen",genre:"Action",rating:9.3,chapters:271,status:"Tugallangan",image:"https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?auto=format&fit=crop&w=600&q=80",description:"Yuji Itadori la'natlar va sehrgarlar olamidagi xavfli janglarga qo'shiladi."},
  {id:7,title:"Your Name",genre:"Romance",rating:9.2,chapters:9,status:"Tugallangan",image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",description:"Bir-birini tanimaydigan ikki yosh sirli tarzda bir-biriga bog'lanib qoladi."},
  {id:8,title:"Black Clover",genre:"Fantasy",rating:9.0,chapters:370,status:"Davom etmoqda",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",description:"Sehr ishlata olmaydigan Asta sehrgarlar qiroli bo'lish uchun tinimsiz harakat qiladi."},
  {id:9,title:"Spy x Family",genre:"Comedy",rating:9.1,chapters:100,status:"Davom etmoqda",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",description:"Maxfiy agent soxta oila tuzadi, ammo oila a'zolarining har biri sir yashiradi."},
  {id:10,title:"Death Note",genre:"Drama",rating:9.6,chapters:108,status:"Tugallangan",image:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",description:"Light Yagami g'alati daftarni topib, adolat va hokimiyat haqida xavfli qarorlar qabul qiladi."},
  {id:11,title:"Chainsaw Man",genre:"Horror",rating:9.0,chapters:180,status:"Davom etmoqda",image:"https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80",description:"Denji iblis ovchisi sifatida omon qolish va yangi hayot topish uchun kurashadi."},
  {id:12,title:"My Hero Academia",genre:"Action",rating:9.1,chapters:430,status:"Tugallangan",image:"https://images.unsplash.com/photo-1614583225154-5fcdda07019e?auto=format&fit=crop&w=600&q=80",description:"Superqobiliyatlar keng tarqalgan dunyoda Izuku haqiqiy qahramon bo'lishni maqsad qiladi."},
  {id:13,title:"Blue Lock",genre:"Drama",rating:8.9,chapters:290,status:"Davom etmoqda",image:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",description:"Yosh futbolchilar dunyoning eng yaxshi hujumchisiga aylanish uchun raqobatlashadi."},
  {id:14,title:"Fairy Tail",genre:"Adventure",rating:8.8,chapters:545,status:"Tugallangan",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",description:"Sehrgarlar gildiyasi do'stlik, jasorat va ajoyib sarguzashtlarga to'la safarlarga chiqadi."},
  {id:15,title:"Horimiya",genre:"Romance",rating:8.8,chapters:122,status:"Tugallangan",image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",description:"Maktabdagi ikki yosh bir-birining yashirin tomonlarini bilib, yaqinlashib boradi."},
  {id:16,title:"Berserk",genre:"Fantasy",rating:9.7,chapters:380,status:"Davom etmoqda",image:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",description:"Guts qorong'u va shafqatsiz dunyoda o'z taqdiri va dushmanlariga qarshi kurashadi."}
];

const state = {
  query: "",
  genre: "all",
  favoritesOnly: false,
  favorites: new Set(),
  sort: "popular",
  visible: 8,
  selected: null
};

const elements = {
  grid: $("mangaGrid"),
  search: $("searchInput"),
  sort: $("sortSelect"),
  count: $("resultCount"),
  empty: $("emptyState"),
  loadMore: $("loadMore"),
  modal: $("mangaModal"),
  favoriteCount: $("favoriteCount"),
  toast: $("toast")
};

let toastTimer;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function getFilteredManga() {
  let items = mangaData.filter(manga => {
    const titleMatch = manga.title.toLowerCase().includes(state.query);
    const genreMatch = state.genre === "all" || manga.genre === state.genre;
    const favoriteMatch = !state.favoritesOnly || state.favorites.has(manga.id);
    return titleMatch && genreMatch && favoriteMatch;
  });

  if (state.sort === "rating") {
    items.sort((a, b) => b.rating - a.rating);
  } else if (state.sort === "az") {
    items.sort((a, b) => a.title.localeCompare(b.title));
  } else if (state.sort === "chapters") {
    items.sort((a, b) => b.chapters - a.chapters);
  } else {
    items.sort((a, b) => b.rating - a.rating);
  }

  return items;
}

function createMangaCard(manga, index) {
  const saved = state.favorites.has(manga.id);

  return `
    <article class="manga-card" data-card="${manga.id}" tabindex="0"
      style="animation-delay:${Math.min(index * 45, 400)}ms">
      <div class="cover">
        <img src="${escapeHTML(manga.image)}"
          alt="${escapeHTML(manga.title)} muqovasi"
          loading="lazy">
        <span class="rating">⭐ ${manga.rating}</span>
        <button class="favorite-btn ${saved ? "saved" : ""}"
          data-favorite="${manga.id}"
          aria-label="${saved ? "Sevimlidan olib tashlash" : "Sevimliga qo'shish"}">
          ${saved ? "♥" : "♡"}
        </button>
        <span class="cover-bottom">${manga.chapters} bob · ${escapeHTML(manga.status)}</span>
      </div>
      <div class="card-info">
        <h3>${escapeHTML(manga.title)}</h3>
        <div class="card-meta">
          <span>${escapeHTML(manga.genre)}</span>
          <span>⭐ ${manga.rating}</span>
        </div>
      </div>
    </article>`;
}

function renderManga() {
  const filtered = getFilteredManga();
  const visibleItems = filtered.slice(0, state.visible);

  elements.count.textContent = `${filtered.length} ta manga`;
  elements.grid.innerHTML = visibleItems.map(createMangaCard).join("");

  elements.empty.classList.toggle("hidden", filtered.length > 0);
  elements.loadMore.classList.toggle("hidden", visibleItems.length >= filtered.length);

  elements.favoriteCount.textContent = state.favorites.size;

  const genreNames = {
    all: "Barcha mangalar",
    Action: "Action mangalar",
    Adventure: "Adventure mangalar",
    Fantasy: "Fantasy mangalar",
    Romance: "Romance mangalar",
    Drama: "Drama mangalar",
    Comedy: "Comedy mangalar",
    Horror: "Horror mangalar"
  };

  $("activeFilterLabel").textContent = state.favoritesOnly
    ? "Sevimli mangalar"
    : genreNames[state.genre] || "Barcha mangalar";
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2300);
}

function toggleFavorite(id) {
  const manga = mangaData.find(item => item.id === id);
  if (!manga) return;

  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast(`${manga.title} sevimlilardan olib tashlandi`);
  } else {
    state.favorites.add(id);
    showToast(`${manga.title} sevimlilarga qo'shildi ♥`);
  }

  renderManga();
  updateModalFavorite();
}

function openMangaModal(id) {
  const manga = mangaData.find(item => item.id === id);
  if (!manga) return;

  state.selected = manga;

  $("modalImage").src = manga.image;
  $("modalImage").alt = manga.title;
  $("modalTitle").textContent = manga.title;
  $("modalGenre").textContent = manga.genre;
  $("modalDescription").textContent = manga.description;
  $("modalMeta").textContent = `⭐ ${manga.rating} / 10 · ${manga.chapters} bob · ${manga.status}`;

  updateModalFavorite();
  elements.modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  $("modalClose").focus();
}

function closeMangaModal() {
  elements.modal.classList.add("hidden");
  document.body.style.overflow = "";
  state.selected = null;
}

function updateModalFavorite() {
  if (!state.selected) return;

  $("modalFavorite").textContent = state.favorites.has(state.selected.id)
    ? "♥ Sevimlilardan olib tashlash"
    : "♡ Sevimlilarga qo'shish";
}

function resetFilters() {
  state.query = "";
  state.genre = "all";
  state.favoritesOnly = false;
  state.sort = "popular";
  state.visible = 8;

  elements.search.value = "";
  elements.sort.value = "popular";
  $("favoriteToggle").classList.remove("active");

  document.querySelectorAll("[data-genre]").forEach(button => {
    button.classList.toggle("active", button.dataset.genre === "all");
  });

  $("favoriteToggle").style.color = "";
  renderManga();
}

elements.search.addEventListener("input", event => {
  state.query = event.target.value.trim().toLowerCase();
  state.visible = 8;
  renderManga();
});

elements.sort.addEventListener("change", event => {
  state.sort = event.target.value;
  renderManga();
});

$("genreFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-genre]");
  if (!button) return;

  state.genre = button.dataset.genre;
  state.favoritesOnly = false;
  state.visible = 8;

  $("favoriteToggle").classList.remove("active");
  $("favoriteToggle").style.color = "";

  document.querySelectorAll("[data-genre]").forEach(item => {
    item.classList.toggle("active", item === button);
  });

  renderManga();
});

elements.grid.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");

  if (favoriteButton) {
    event.stopPropagation();
    toggleFavorite(Number(favoriteButton.dataset.favorite));
    return;
  }

  const card = event.target.closest("[data-card]");
  if (card) openMangaModal(Number(card.dataset.card));
});

elements.grid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") &&
      event.target.matches("[data-card]")) {
    event.preventDefault();
    openMangaModal(Number(event.target.dataset.card));
  }
});

elements.loadMore.addEventListener("click", () => {
  state.visible += 8;
  renderManga();
});

$("resetFilters").addEventListener("click", resetFilters);
$("emptyReset").addEventListener("click", resetFilters);

$("favoriteToggle").addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  state.visible = 8;

  $("favoriteToggle").classList.toggle("active", state.favoritesOnly);
  $("favoriteToggle").style.color = state.favoritesOnly ? "#c084fc" : "";

  renderManga();
  $("catalog").scrollIntoView({ behavior: "smooth" });
});

$("modalFavorite").addEventListener("click", () => {
  if (state.selected) toggleFavorite(state.selected.id);
});

$("modalClose").addEventListener("click", closeMangaModal);

elements.modal.addEventListener("click", event => {
  if (event.target.matches("[data-close-modal]")) closeMangaModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !elements.modal.classList.contains("hidden")) {
    closeMangaModal();
  }

  if (event.key === "/" &&
      !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) &&
      elements.modal.classList.contains("hidden")) {
    event.preventDefault();
    elements.search.focus();
  }
});

$("menuToggle").addEventListener("click", () => {
  $("navigation").classList.toggle("open");
});

$("navigation").addEventListener("click", event => {
  if (event.target.closest("a")) {
    $("navigation").classList.remove("open");
  }
});

const backToTop = $("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 450);
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Animatsiyali fon */
const canvas = $("particles");
const context = canvas.getContext("2d");

let particles = [];
let canvasWidth = 0;
let canvasHeight = 0;
let animationFrame = null;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);

  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;

  canvas.width = canvasWidth * ratio;
  canvas.height = canvasHeight * ratio;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  particles = Array.from({
    length: Math.min(70, Math.floor(canvasWidth / 17))
  }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    radius: Math.random() * 1.7 + 0.4,
    speed: Math.random() * 0.35 + 0.08,
    alpha: Math.random() * 0.5 + 0.1
  }));
}

function animateParticles() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  for (const particle of particles) {
    particle.y -= particle.speed;

    if (particle.y < -5) {
      particle.y = canvasHeight + 5;
      particle.x = Math.random() * canvasWidth;
    }

    context.beginPath();
    context.arc(
      particle.x,
      particle.y,
      particle.radius,
      0,
      Math.PI * 2
    );

    context.fillStyle = `rgba(192,132,252,${particle.alpha})`;
    context.fill();
  }

  animationFrame = requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", resizeCanvas, { passive: true });

resizeCanvas();
animateParticles();
renderManga();