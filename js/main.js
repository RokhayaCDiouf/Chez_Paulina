// =========================================
//  Chez Paulina – Main JS
// =========================================

// ---- Menu Data (Plats authentiques Chez Paulina Saly) ----
const menuData = [
    // --- Plats traditionnels ---
    {
        id: "p1",
        category: "cat_plats",
        price: "2 000f",
        icon: "🍛",
        fr: { name: "Thiebou djeun", desc: "" },
        en: { name: "Thiebou djeun", desc: "" }
    },
    {
        id: "p2",
        category: "cat_plats",
        price: "2 000f",
        icon: "🍲",
        fr: { name: "Thiou", desc: "" },
        en: { name: "Thiou", desc: "" }
    },
    {
        id: "p3",
        category: "cat_plats",
        price: "2 500f",
        icon: "🍗",
        fr: { name: "Poulet yassa", desc: "" },
        en: { name: "Chicken yassa", desc: "" }
    },
    {
        id: "p4",
        category: "cat_plats",
        price: "3 000f",
        icon: "🍗",
        fr: { name: "Poulet frite", desc: "" },
        en: { name: "Chicken and fries", desc: "" }
    },
    {
        id: "p5",
        category: "cat_plats",
        price: "3 500f",
        icon: "🥩",
        fr: { name: "Mafé viande (boeuf)", desc: "" },
        en: { name: "Beef mafé", desc: "" }
    },
    {
        id: "p6",
        category: "cat_plats",
        price: "2 000f",
        icon: "🍟",
        fr: { name: "1 assiette de frites", desc: "" },
        en: { name: "1 plate of fries", desc: "" }
    },
    {
        id: "p7",
        category: "cat_plats",
        price: "3 000f",
        icon: "🥗",
        fr: { name: "1 assiette de legumes", desc: "" },
        en: { name: "1 plate of vegetables", desc: "" }
    },

    // --- Grillades ---
    {
        id: "g1",
        category: "cat_grillades",
        price: "3 500f",
        icon: "🐟",
        fr: { name: "Dorade grillée", desc: "" },
        en: { name: "Grilled sea bream", desc: "" }
    },
    {
        id: "g2",
        category: "cat_grillades",
        price: "5 000f",
        icon: "🐟",
        fr: { name: "Capitaine grillé", desc: "" },
        en: { name: "Grilled captain fish", desc: "" }
    },
    {
        id: "g3",
        category: "cat_grillades",
        price: "6 000f",
        icon: "🐟",
        fr: { name: "Mérou grillé", desc: "" },
        en: { name: "Grilled grouper", desc: "" }
    },
    {
        id: "g4",
        category: "cat_grillades",
        price: "8 000f",
        icon: "🐟",
        fr: { name: "Carpe rouge grillée", desc: "" },
        en: { name: "Grilled red snapper", desc: "" }
    },
    {
        id: "g5",
        category: "cat_grillades",
        price: "8 000f",
        icon: "🍗",
        fr: { name: "Poulet dibi", desc: "" },
        en: { name: "Dibi chicken", desc: "" }
    },
    {
        id: "g6",
        category: "cat_grillades",
        price: "4 000f",
        icon: "🐟",
        fr: { name: "Lotte grillée", desc: "" },
        en: { name: "Grilled monkfish", desc: "" }
    },
    {
        id: "g7",
        category: "cat_grillades",
        price: "3 500f",
        icon: "🍢",
        fr: { name: "Brochette de lotte", desc: "" },
        en: { name: "Monkfish skewer", desc: "" }
    },

    // --- Fruits de Mer ---
    {
        id: "m1",
        category: "cat_fruits_de_mer",
        price: "5 000f",
        icon: "🦑",
        fr: { name: "Calamar", desc: "" },
        en: { name: "Squid", desc: "" }
    },
    {
        id: "m2",
        category: "cat_fruits_de_mer",
        price: "4 000f",
        icon: "🐟",
        fr: { name: "Sole", desc: "" },
        en: { name: "Sole", desc: "" }
    },
    {
        id: "m3",
        category: "cat_fruits_de_mer",
        price: "5 000f",
        icon: "🦪",
        fr: { name: "Moules", desc: "" },
        en: { name: "Mussels", desc: "" }
    },
    {
        id: "m4",
        category: "cat_fruits_de_mer",
        price: "4 000f",
        icon: "🍤",
        fr: { name: "Crevettes sautées", desc: "" },
        en: { name: "Sautéed shrimp", desc: "" }
    },
    {
        id: "m5",
        category: "cat_fruits_de_mer",
        price: "7 000f",
        icon: "🦐",
        fr: { name: "Gambas", desc: "" },
        en: { name: "Prawns", desc: "" }
    },
    {
        id: "m6",
        category: "cat_fruits_de_mer",
        price: "3 000f",
        icon: "🐡",
        fr: { name: "Lotte sautées à l'ail", desc: "" },
        en: { name: "Sautéed monkfish with garlic", desc: "" }
    },

    // --- Menus complets ---
    {
        id: "f1",
        category: "cat_menus",
        price: "15 000f",
        icon: "🍽️",
        fr: { name: "Camérones", desc: "Entrée + Riz ou Frites + Dessert" },
        en: { name: "Camarones", desc: "Appetizer + Rice or Fries + Dessert" }
    },
    {
        id: "f2",
        category: "cat_menus",
        price: "20 000f",
        icon: "🍽️",
        fr: { name: "Langoustes", desc: "Entrée + Riz ou Frites + Dessert" },
        en: { name: "Lobsters", desc: "Appetizer + Rice or Fries + Dessert" }
    },

    // --- Desserts ---
    {
        id: "d1",
        category: "cat_desserts",
        price: "1 500f",
        icon: "🍰",
        fr: { name: "Dessert", desc: "" },
        en: { name: "Dessert", desc: "" }
    },

    // --- Boissons ---
    {
        id: "b1",
        category: "cat_boissons",
        price: "1 000f",
        icon: "🥤",
        fr: { name: "Coca / Sprite / Fanta", desc: "" },
        en: { name: "Coca / Sprite / Fanta", desc: "" }
    },
    {
        id: "b2",
        category: "cat_boissons",
        price: "1 000f",
        icon: "🌺",
        fr: { name: "Jus de bissap", desc: "" },
        en: { name: "Bissap juice", desc: "" }
    },
    {
        id: "b3",
        category: "cat_boissons",
        price: "1 000f",
        icon: "🍹",
        fr: { name: "Jus de bouye", desc: "" },
        en: { name: "Bouye juice", desc: "" }
    },
    {
        id: "b4",
        category: "cat_boissons",
        price: "1 000f",
        icon: "🫚",
        fr: { name: "Jus de gingembre", desc: "" },
        en: { name: "Ginger juice", desc: "" }
    },
    {
        id: "b5",
        category: "cat_boissons",
        price: "2 000f",
        icon: "🌿",
        fr: { name: "Jus de moringa", desc: "Sur commande" },
        en: { name: "Moringa juice", desc: "Pre-order" }
    },
    {
        id: "b6",
        category: "cat_boissons",
        price: "1 000f",
        icon: "💧",
        fr: { name: "Eau minérale", desc: "" },
        en: { name: "Mineral water", desc: "" }
    },
    {
        id: "b7",
        category: "cat_boissons",
        price: "1 500f",
        icon: "🫧",
        fr: { name: "Eau pétillante", desc: "" },
        en: { name: "Sparkling water", desc: "" }
    }
];

// ---- Reviews Data (basés sur les vrais avis Google Maps ⭐ 4.8/5 — 44 avis) ----
const reviewsData = [
    {
        id: "r1",
        rating: 5,
        name: "Sophie M.",
        avatar: "😍",
        source: "Google Maps",
        fr: "Un endroit calme et magnifique au bord de l'océan. Paulina est adorable, elle se dévoue pour ses clients. Le thieboudienne était d'une fraîcheur incroyable, préparé le jour même. On recommande les yeux fermés !",
        en: "A calm and beautiful spot by the ocean. Paulina is adorable and so dedicated to her guests. The thieboudienne was incredibly fresh, prepared that very day. We recommend it wholeheartedly!"
    },
    {
        id: "r2",
        rating: 5,
        name: "Jean-Pierre L.",
        avatar: "🤩",
        source: "Google Maps",
        fr: "Meilleur rapport qualité-prix de toute la région de Saly ! La lotte à l'ail était sublime, et la banane flambée en dessert... un pur délice. La terrasse avec vue sur l'océan est tout simplement parfaite.",
        en: "Best value for money in the whole Saly area! The monkfish in garlic was sublime, and the flambéed banana dessert... absolutely divine. The terrace with ocean view is simply perfect."
    },
    {
        id: "r3",
        rating: 5,
        name: "Amina D.",
        avatar: "🥰",
        source: "Google Maps",
        fr: "Une adresse authentique et conviviale. Tout est frais, tout est bon. Pensez à réserver la veille et à préciser ce que vous souhaitez manger — tout est préparé le jour même ! Paulina met un soin particulier à chaque plat.",
        en: "An authentic and friendly address. Everything is fresh, everything is delicious. Book the day before and tell them what you'd like to eat — everything is prepared fresh that day! Paulina puts special care into every dish."
    },
    {
        id: "r4",
        rating: 5,
        name: "Caroline & Marc T.",
        avatar: "😊",
        source: "Google Maps",
        fr: "Nous y sommes retournés trois fois en une semaine ! Les fruits de mer sont d'une fraîcheur irréprochable, les prix très légers et l'accueil toujours chaleureux. Un vrai coup de cœur à Saly.",
        en: "We went back three times in one week! The seafood is impeccably fresh, the prices very reasonable and the welcome always warm. A real gem in Saly."
    }
];


// ---- Active filter ----
let activeFilter = 'all';

// ---- Render Menu ----
window.renderMenu = function () {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    menuGrid.innerHTML = '';

    const filtered = activeFilter === 'all'
        ? menuData
        : menuData.filter(item => item.category === activeFilter);

    // Group by category
    const categories = [...new Set(filtered.map(item => item.category))];

    categories.forEach(cat => {
        const items = filtered.filter(item => item.category === cat);
        if (!items.length) return;

        const catSection = document.createElement('div');
        catSection.className = 'menu-category';
        catSection.setAttribute('data-category', cat);

        const catTitle = document.createElement('h3');
        catTitle.className = 'menu-category-title';
        catTitle.textContent = translations[currentLang][cat] || cat;

        const itemsList = document.createElement('div');
        itemsList.className = 'menu-items-list';

        items.forEach(item => {
            const data = item[currentLang];
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';
            itemEl.innerHTML = `
                <div class="menu-item-icon">${item.icon}</div>
                <div class="menu-item-info">
                    <div class="menu-item-header">
                        <h4 class="menu-item-name">${data.name}</h4>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${data.desc}</p>
                </div>
            `;
            itemsList.appendChild(itemEl);
        });

        catSection.appendChild(catTitle);
        catSection.appendChild(itemsList);
        menuGrid.appendChild(catSection);
    });
};

// ---- Render Reviews ----
window.renderReviews = function () {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    container.innerHTML = '';

    reviewsData.forEach(review => {
        const text = review[currentLang];
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += `<span class="star ${i < review.rating ? 'filled' : ''}">★</span>`;
        }

        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-header">
                <span class="review-avatar">${review.avatar}</span>
                <div>
                    <div class="review-stars">${stars}</div>
                    <p class="review-author">${review.name}</p>
                </div>
                ${review.source ? `<a href="https://www.google.com/maps?q=14.43728,-17.00291" target="_blank" rel="noopener" class="review-source" style="text-decoration:none;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> Google Maps</a>` : ''}
            </div>
            <p class="review-text">"${text}"</p>
        `;
        container.appendChild(card);
    });
};

// ---- DOMContentLoaded ----
document.addEventListener('DOMContentLoaded', () => {

    // ---- Mobile Menu Toggle ----
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // ---- Sticky Header ----
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ---- Menu Category Tabs ----
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-cat');
            renderMenu();
        });
    });

    // ---- Scroll Reveal Animation ----
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(el => observer.observe(el));

    // ---- Scroll Spy ----
    const navLinks = document.querySelectorAll('.nav-link');

    // Build a map: section id → nav link
    const spyMap = {};
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            spyMap[href.slice(1)] = link;
        }
    });

    // List of sections to spy on (in order)
    const spySections = ['hero', 'about', 'menu', 'reviews', 'reservation', 'footer'];

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = spyMap[id];
            if (!link) return;

            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active-section'));
                link.classList.add('active-section');
            }
        });
    }, {
        threshold: 0.35,
        rootMargin: '-64px 0px -30% 0px'
    });

    spySections.forEach(id => {
        const el = document.getElementById(id);
        if (el) spyObserver.observe(el);
    });

    // ---- Smooth scroll for nav links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
