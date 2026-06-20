const WHATSAPP_NUMBER = "212669072070";

const menu = [
  { category: "regular-burger", name: "Cheese Burger", description: "Burger au fromage", price: 35 },
  { category: "regular-burger", name: "Chicken Burger", description: "Burger au poulet", price: 35 },
  { category: "burger", name: "Easy Cheezy", description: "Pain burger, steak bœuf, pickles, tomate, iceberg, sauce burger, oignons caramélisés, cheddar", price: 37 },
  { category: "burger", name: "Chiky Smoky", description: "Poulet crispy, pickles, iceberg, dinde fumée, sauce mayo", price: 37 },
  { category: "burger", name: "Chilly Smoky", description: "Steak bœuf ou poulet crispy, iceberg, pickles, oignons crispy, jalapeños", price: 42 },
  { category: "burger", name: "Eggy Smoky", description: "Steak bœuf, œuf, cheddar, pickles, tomate, oignons crispy, iceberg, dinde fumée", price: 42 },
  { category: "burger", name: "Mushy Cheezy", description: "Poulet crispy, cheddar, dinde fumée, iceberg, sauce champignons", price: 40 },
  { category: "burger", name: "Broadway Burger", description: "Double steak ou double poulet crispy, double cheddar, iceberg, pickles, oignons crispy, sauce cheddar", price: 57 },
  { category: "burrito", name: "Burrito Classic", description: "Wrap, bœuf, iceberg, tomate, frites, fromage, oignons crispy, sauce", price: 37 },
  { category: "burrito", name: "Burrito Chicken", description: "Wrap, poulet, iceberg, tomate, frites, fromage, oignons crispy, sauce", price: 37 },
  { category: "burrito", name: "Burrito Crunchy", description: "Wrap, poulet crispy, iceberg, tomate, frites, fromage, oignons crispy, sauce", price: 37 },
  { category: "burrito", name: "Broadway Burrito", description: "Wrap, poulet crispy, bœuf, dinde fumée, iceberg, frites, fromage, oignons crispy, sauce", price: 50 },
  { category: "sandwich", name: "Buffalo Beef", description: "Bœuf, cheddar, tomate, iceberg, sauce mayo", price: 43 },
  { category: "sandwich", name: "New Yorker", description: "Poulet crispy, iceberg, sauce champignons, mozzarella, sauce pesto", price: 40 },
  { category: "sandwich", name: "California Club", description: "Poulet, tomate, iceberg, oignon, cheddar, sauce mayo", price: 40 },
  { category: "sandwich", name: "Chicken Winner", description: "Poulet crispy, iceberg, tomate, dinde fumée, sauce cheddar", price: 43 },
  { category: "sandwich", name: "Broadway Sandwich", description: "Bœuf, poulet, poulet crispy, iceberg, œuf, oignons crispy, cheddar, dinde fumée, sauce mayo", price: 50 },
  { category: "loaded-fries", name: "Loaded Fries Regular", description: "Frites, dinde fumée, jalapeños, oignons crispy, sauce fromage", price: 20 },
  { category: "loaded-fries", name: "Loaded Fries Chicken", description: "Poulet, frites, oignons crispy, dinde fumée, jalapeños, sauce fromage", price: 32 },
  { category: "loaded-fries", name: "Loaded Fries Crunchy", description: "Poulet crispy, frites, oignons crispy, dinde fumée, jalapeños, sauce fromage", price: 32 },
  { category: "loaded-fries", name: "Loaded Fries Beef", description: "Bœuf, frites, oignons crispy, dinde fumée, jalapeños, sauce fromage", price: 32 },
  { category: "loaded-fries", name: "Broadway Loaded Fries", description: "Poulet crispy, bœuf, poulet, dinde fumée, jalapeños, frites, oignons crispy, sauce fromage", price: 42 },
  { category: "frites", name: "Frites", description: "Portion de frites dorées et croustillantes", price: 10 },
  { category: "mojito", name: "Mojito Normal", description: "Mojito classique citron vert et menthe", price: 10 },
  { category: "mojito", name: "Mojito Mangue", description: "Mojito à la mangue fraîche", price: 10 },
  { category: "mojito", name: "Mojito Rouge", description: "Mojito aux fruits rouges", price: 10 },
  { category: "mojito", name: "Mojito Menthe", description: "Mojito double menthe rafraîchissant", price: 10 },
  { category: "soda", name: "Coca-Cola", description: "Canette Coca-Cola", price: 7 },
  { category: "soda", name: "Poms", description: "Canette Poms", price: 7 },
  { category: "soda", name: "Sprite", description: "Canette Sprite", price: 7 },
  { category: "soda", name: "Hawaï", description: "Canette Hawaï", price: 7 },
  { category: "dessert", name: "Tiramisu Oreo", description: "Tiramisu onctueux aux biscuits Oreo", price: 17 },
  { category: "dessert", name: "Tiramisu Lotus", description: "Tiramisu crémeux au spéculoos Lotus", price: 17 },
];

let activeCategory = "regular-burger";
const cart = new Map();

const categoryImages = {
  "regular-burger": "item-burger.webp",
  burger: "item-burger.webp",
  burrito: "item-burrito.webp",
  sandwich: "item-sandwich.webp",
  "loaded-fries": "item-loaded-fries.webp",
  frites: "item-frites.webp",
  mojito: "item-mojito.webp",
  soda: "item-soda.webp",
  dessert: "item-dessert.webp",
};

const itemImages = {
  "Cheese Burger": "item-burger-cheese.webp",
  "Chicken Burger": "item-burger-chicken.webp",
  "Easy Cheezy": "item-burger-easy-cheezy.webp",
  "Chiky Smoky": "item-burger-chiky-smoky.webp",
  "Chilly Smoky": "item-burger-chilly-smoky.webp",
  "Eggy Smoky": "item-burger-eggy-smoky.webp",
  "Mushy Cheezy": "item-burger-mushy-cheezy.webp",
  "Broadway Burger": "item-burger-broadway.webp",
  "Burrito Classic": "item-burrito-classic.webp",
  "Burrito Chicken": "item-burrito-chicken.webp",
  "Burrito Crunchy": "item-burrito-crunchy.webp",
  "Broadway Burrito": "item-burrito-broadway.webp",
  "Coca-Cola": "item-soda-coca-cola.webp",
  Poms: "item-soda-poms.webp",
  Sprite: "item-soda-sprite.webp",
  Hawaï: "item-soda-hawai.webp",
  "Tiramisu Oreo": "item-dessert-oreo.webp",
  "Tiramisu Lotus": "item-dessert-lotus.webp",
};

const menuGrid = document.querySelector("#menuGrid");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const cartBadge = document.querySelector("#cartBadge");
const whatsappButton = document.querySelector("#whatsappButton");
const navWhatsapp = document.querySelector("#navWhatsapp");
const categoryTabs = document.querySelector("#categoryTabs");
const categoryPrev = document.querySelector("#categoryPrev");
const categoryNext = document.querySelector("#categoryNext");
const cartToggle = document.querySelector("#cartToggle");
const cartPanel = document.querySelector("#panier");
const toast = document.querySelector("#toast");
const tabs = document.querySelectorAll(".tab");

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function formatPrice(price) {
  return `${price} DH`;
}

function renderMenu() {
  const items = menu.filter((item) => item.category === activeCategory);
  menuGrid.innerHTML = items
    .map(
      (item) => `
        <article class="menu-card">
          <img class="menu-card-image" src="./assets/${itemImages[item.name] || categoryImages[item.category]}" alt="${escapeHtml(item.name)}" loading="lazy" width="400" height="300" />
          <div class="menu-card-top">
            <div>
              <h3>${escapeHtml(item.name)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </div>
            <span class="price">${formatPrice(item.price)}</span>
          </div>
          <button class="add-button" type="button" data-name="${escapeHtml(item.name)}">
            Ajouter au panier
          </button>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  const items = [...cart.values()];
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  cartCount.textContent = totalQty;
  cartTotal.textContent = formatPrice(total);
  whatsappButton.disabled = items.length === 0;

  if (cartBadge) {
    cartBadge.textContent = totalQty;
    cartBadge.hidden = totalQty === 0;
  }

  if (items.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Ajoute un article pour préparer ta commande WhatsApp.</p>';
    saveCart();
    return;
  }

  cartItems.innerHTML = items
    .map(
      (item) => `
        <div class="cart-item">
          <strong>${escapeHtml(item.name)}</strong>
          <div class="cart-controls">
            <span>${formatPrice(item.price * item.qty)}</span>
            <span class="qty-controls" aria-label="Quantité ${escapeHtml(item.name)}">
              <button type="button" aria-label="Retirer un ${escapeHtml(item.name)}" data-action="decrease" data-name="${escapeHtml(item.name)}">−</button>
              <span>${item.qty}</span>
              <button type="button" aria-label="Ajouter un ${escapeHtml(item.name)}" data-action="increase" data-name="${escapeHtml(item.name)}">+</button>
            </span>
          </div>
        </div>
      `
    )
    .join("");

  saveCart();
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => { toast.hidden = true; }, 260);
  }, 1800);
}

function addToCart(name) {
  const item = menu.find((menuItem) => menuItem.name === name);
  if (!item) return;
  const existing = cart.get(name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.set(name, { ...item, qty: 1 });
  }

  renderCart();
  showToast(`${name} ajouté au panier`);

  const btn = menuGrid.querySelector(`[data-name="${CSS.escape(name)}"]`);
  if (btn) {
    btn.classList.add("added");
    btn.textContent = "Ajouté ✓";
    setTimeout(() => {
      btn.classList.remove("added");
      btn.textContent = "Ajouter au panier";
    }, 1200);
  }
}

function updateQuantity(name, delta) {
  const item = cart.get(name);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart.delete(name);
  }

  renderCart();
}

function buildWhatsAppMessage() {
  const items = [...cart.values()];
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const lines = items.map(
    (item) => `- ${item.qty} x ${item.name}: ${formatPrice(item.qty * item.price)}`
  );

  return [
    "Bonjour Broadway American Casablanca, je voudrais commander:",
    "",
    ...lines,
    "",
    `Total: ${formatPrice(total)}`,
    "",
    "Nom:",
    "Adresse:",
    "Remarque:",
  ].join("\n");
}

function saveCart() {
  try {
    const data = [...cart.entries()].map(([k, v]) => [k, { name: v.name, category: v.category, price: v.price, qty: v.qty }]);
    localStorage.setItem("broadway_cart", JSON.stringify(data));
  } catch (_) {}
}

function loadCart() {
  try {
    const raw = localStorage.getItem("broadway_cart");
    if (!raw) return;
    const data = JSON.parse(raw);
    for (const [key, val] of data) {
      const menuItem = menu.find((m) => m.name === key);
      if (menuItem) {
        cart.set(key, { ...menuItem, qty: val.qty });
      }
    }
  } catch (_) {}
}

function updateCategoryArrows() {
  const maxScroll = categoryTabs.scrollWidth - categoryTabs.clientWidth;
  categoryPrev.disabled = categoryTabs.scrollLeft <= 2;
  categoryNext.disabled = categoryTabs.scrollLeft >= maxScroll - 2;
}

function scrollCategoryTabs(direction) {
  categoryTabs.scrollBy({
    left: direction * Math.max(180, categoryTabs.clientWidth * 0.72),
    behavior: "smooth",
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCategory = tab.dataset.category;
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    renderMenu();
    updateCategoryArrows();
  });
});

categoryPrev.addEventListener("click", () => scrollCategoryTabs(-1));
categoryNext.addEventListener("click", () => scrollCategoryTabs(1));
categoryTabs.addEventListener("scroll", updateCategoryArrows);
window.addEventListener("resize", updateCategoryArrows);

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-name]");
  if (!button || button.closest(".cart-item")) return;
  addToCart(button.dataset.name);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const delta = button.dataset.action === "increase" ? 1 : -1;
  updateQuantity(button.dataset.name, delta);
});

whatsappButton.addEventListener("click", () => {
  const message = encodeURIComponent(buildWhatsAppMessage());
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
});

if (cartToggle) {
  cartToggle.addEventListener("click", () => {
    cartPanel.classList.toggle("collapsed");
    const isCollapsed = cartPanel.classList.contains("collapsed");
    cartToggle.setAttribute("aria-label", isCollapsed ? "Ouvrir le panier" : "Réduire le panier");
  });
}

navWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}`;

loadCart();
renderMenu();
renderCart();
updateCategoryArrows();
