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
  "Buffalo Beef": "item-sandwich-buffalo-beef.webp",
  "New Yorker": "item-sandwich-new-yorker.webp",
  "California Club": "item-sandwich-california-club.webp",
  "Chicken Winner": "item-sandwich-chicken-winner.webp",
  "Broadway Sandwich": "item-sandwich-broadway.webp",
  "Loaded Fries Regular": "item-loaded-fries-regular.webp",
  "Loaded Fries Chicken": "item-loaded-fries-chicken.webp",
  "Loaded Fries Beef": "item-loaded-fries-beef.webp",
  "Broadway Loaded Fries": "item-loaded-fries-broadway.webp",
  "Mojito Normal": "item-mojito-normal.webp",
  "Mojito Mangue": "item-mojito-mangue.webp",
  "Mojito Rouge": "item-mojito-rouge.webp",
  "Mojito Menthe": "item-mojito-menthe.webp",
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
const sauceModal = document.querySelector("#sauceModal");
const optionEyebrow = document.querySelector("#optionEyebrow");
const sauceTitle = document.querySelector("#sauceTitle");
const sauceItemName = document.querySelector("#sauceItemName");
const sauceClose = document.querySelector("#sauceClose");
const sauceSubmit = document.querySelector("#sauceSubmit");
const sauceChoiceGroup = document.querySelector("#sauceChoiceGroup");
const friesChoiceGroup = document.querySelector("#friesChoiceGroup");
const drinkChoiceGroup = document.querySelector("#drinkChoiceGroup");
const sodaChoice = document.querySelector("#sodaChoice");
const sodaOptions = document.querySelector("#sodaOptions");
const dessertChoiceGroup = document.querySelector("#dessertChoiceGroup");
const dessertChoice = document.querySelector("#dessertChoice");
const dessertOptions = document.querySelector("#dessertOptions");
const tabs = document.querySelectorAll(".tab");
const sauceLabels = {
  normal: "Normal",
  spicy: "Spicy",
  mix: "Mix",
};
const friesLabels = {
  with: "Avec frite",
  without: "Sans frite",
};
const drinkLabels = {
  with: "Avec boisson",
  without: "Sans boisson",
};
const dessertLabels = {
  with: "Avec dessert",
  without: "Sans dessert",
};
const CUSTOM_OPTION_CATEGORIES = new Set(["burrito", "regular-burger", "burger", "sandwich", "loaded-fries"]);
const BURRITO_FRIES_PRICE = 10;
const BURRITO_DRINK_PRICE = 7;
const DESSERT_OPTION_PRICE = 17;
let pendingSauceItem = null;
let pendingOptionCategory = null;
let selectedSauce = null;
let selectedFries = null;
let selectedDrinkOption = null;
let selectedSoda = null;
let selectedDessertOption = null;
let selectedDessert = null;

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function formatPrice(price) {
  return `${price} DH`;
}

function hasBurritoOptions(category) {
  return category === "burrito";
}

function hasFriesOptions(category) {
  return category === "burrito" || category === "burger";
}

function hasDessertOptions(category) {
  return CUSTOM_OPTION_CATEGORIES.has(category);
}

function getCartKey(name, sauce, fries, drinkOption, soda, dessertOption, dessert) {
  const hasOptions = sauce || fries || drinkOption || soda || dessertOption || dessert;
  if (!hasOptions) return name;
  return [
    name,
    sauce || "none",
    fries || "none",
    drinkOption || "without",
    soda || "none",
    dessertOption || "without",
    dessert || "none",
  ].join("::");
}

function getCartItemTitle(item) {
  const options = [];
  if (item.sauce) options.push(sauceLabels[item.sauce] || item.sauce);
  if (item.fries) options.push(friesLabels[item.fries] || item.fries);
  if (item.drinkOption) {
    options.push(item.drinkOption === "with" && item.soda ? `${drinkLabels[item.drinkOption]}: ${item.soda}` : drinkLabels[item.drinkOption] || item.drinkOption);
  }
  if (item.dessertOption) {
    options.push(item.dessertOption === "with" && item.dessert ? `${dessertLabels[item.dessertOption]}: ${item.dessert}` : dessertLabels[item.dessertOption] || item.dessertOption);
  }
  return options.length ? `${item.name} (${options.join(", ")})` : item.name;
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
          ${item.sauce ? `<span class="cart-item-note">Sauce: ${escapeHtml(sauceLabels[item.sauce] || item.sauce)}</span>` : ""}
          ${item.fries ? `<span class="cart-item-note">Frites: ${escapeHtml(friesLabels[item.fries] || item.fries)}${item.fries === "with" ? " +10 DH" : ""}</span>` : ""}
          ${item.drinkOption ? `<span class="cart-item-note">Boisson: ${item.drinkOption === "with" ? `${escapeHtml(item.soda)} +7 DH` : escapeHtml(drinkLabels[item.drinkOption] || item.drinkOption)}</span>` : ""}
          ${item.dessertOption ? `<span class="cart-item-note">Dessert: ${item.dessertOption === "with" ? `${escapeHtml(item.dessert)} +17 DH` : escapeHtml(dessertLabels[item.dessertOption] || item.dessertOption)}</span>` : ""}
          <div class="cart-controls">
            <span>${formatPrice(item.price * item.qty)}</span>
            <span class="qty-controls" aria-label="Quantité ${escapeHtml(getCartItemTitle(item))}">
              <button type="button" aria-label="Retirer un ${escapeHtml(getCartItemTitle(item))}" data-action="decrease" data-key="${escapeHtml(item.key)}">−</button>
              <span>${item.qty}</span>
              <button type="button" aria-label="Ajouter un ${escapeHtml(getCartItemTitle(item))}" data-action="increase" data-key="${escapeHtml(item.key)}">+</button>
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

function renderSodaOptions() {
  const sodas = menu.filter((item) => item.category === "soda");
  sodaOptions.innerHTML = sodas
    .map(
      (item) => `
        <button type="button" data-soda="${escapeHtml(item.name)}" aria-pressed="false">
          ${escapeHtml(item.name)}
          <small>${formatPrice(BURRITO_DRINK_PRICE)}</small>
        </button>
      `
    )
    .join("");
}

function renderDessertOptions() {
  const desserts = menu.filter((item) => item.category === "dessert");
  dessertOptions.innerHTML = desserts
    .map(
      (item) => `
        <button type="button" data-dessert="${escapeHtml(item.name)}" aria-pressed="false">
          ${escapeHtml(item.name)}
          <small>${formatPrice(DESSERT_OPTION_PRICE)}</small>
        </button>
      `
    )
    .join("");
}

function openSauceModal(name) {
  const item = menu.find((menuItem) => menuItem.name === name);
  if (!item) return;
  const isBurrito = hasBurritoOptions(item.category);
  const hasFriesOption = hasFriesOptions(item.category);
  const hasDessertOption = hasDessertOptions(item.category);

  pendingSauceItem = name;
  pendingOptionCategory = item.category;
  selectedSauce = null;
  selectedFries = null;
  selectedDrinkOption = null;
  selectedSoda = null;
  selectedDessertOption = null;
  selectedDessert = null;
  optionEyebrow.textContent = isBurrito ? "Options burrito" : "Menu en option";
  sauceTitle.textContent = isBurrito ? "Choisis tes options" : "Complète ton menu";
  sauceItemName.textContent = name;
  sauceSubmit.disabled = true;
  sauceChoiceGroup.hidden = !isBurrito;
  friesChoiceGroup.hidden = !hasFriesOption;
  drinkChoiceGroup.hidden = false;
  dessertChoiceGroup.hidden = !hasDessertOption;
  sodaChoice.hidden = true;
  dessertChoice.hidden = true;
  renderSodaOptions();
  renderDessertOptions();
  sauceModal.querySelectorAll("[data-sauce], [data-fries], [data-drink-option], [data-soda], [data-dessert-option], [data-dessert]").forEach((button) => {
    button.classList.remove("selected");
    button.setAttribute("aria-pressed", "false");
  });
  sauceModal.hidden = false;
  const firstOption = isBurrito ? sauceModal.querySelector("[data-sauce]") : sauceModal.querySelector("[data-drink-option]");
  if (firstOption) firstOption.focus();
}

function closeSauceModal() {
  pendingSauceItem = null;
  pendingOptionCategory = null;
  selectedSauce = null;
  selectedFries = null;
  selectedDrinkOption = null;
  selectedSoda = null;
  selectedDessertOption = null;
  selectedDessert = null;
  sauceModal.hidden = true;
}

function updateSauceSubmitState() {
  const isBurrito = hasBurritoOptions(pendingOptionCategory);
  const hasFriesOption = hasFriesOptions(pendingOptionCategory);
  const hasDessertOption = hasDessertOptions(pendingOptionCategory);
  const hasBurritoChoices = !isBurrito || selectedSauce;
  const hasFriesChoice = !hasFriesOption || selectedFries;
  const hasDrinkChoice = selectedDrinkOption === "without" || (selectedDrinkOption === "with" && selectedSoda);
  const hasDessertChoice = !hasDessertOption || selectedDessertOption === "without" || (selectedDessertOption === "with" && selectedDessert);
  sauceSubmit.disabled = !(hasBurritoChoices && hasFriesChoice && hasDrinkChoice && hasDessertChoice);
}

function selectModalOption(button, selector) {
  button.closest(".sauce-options, .soda-options").querySelectorAll(selector).forEach((option) => {
    option.classList.toggle("selected", option === button);
    option.setAttribute("aria-pressed", option === button ? "true" : "false");
  });
}

function addToCart(name, sauce = null, fries = null, drinkOption = null, soda = null, dessertOption = null, dessert = null) {
  const item = menu.find((menuItem) => menuItem.name === name);
  if (!item) return;

  const needsOptions = CUSTOM_OPTION_CATEGORIES.has(item.category);
  const needsBurritoOptions = hasBurritoOptions(item.category);
  const needsFriesOptions = hasFriesOptions(item.category);
  const needsDessertOptions = hasDessertOptions(item.category);
  const missingBurritoOptions = needsBurritoOptions && !sauce;
  const missingFriesOptions = needsFriesOptions && !fries;
  const missingDrinkOptions = !drinkOption || (drinkOption === "with" && !soda);
  const missingDessertOptions = needsDessertOptions && (!dessertOption || (dessertOption === "with" && !dessert));

  if (needsOptions && (missingBurritoOptions || missingFriesOptions || missingDrinkOptions || missingDessertOptions)) {
    openSauceModal(name);
    return;
  }

  const friesPrice = needsFriesOptions && fries === "with" ? BURRITO_FRIES_PRICE : 0;
  const drinkPrice = needsOptions && drinkOption === "with" ? BURRITO_DRINK_PRICE : 0;
  const dessertPrice = needsDessertOptions && dessertOption === "with" ? DESSERT_OPTION_PRICE : 0;
  const key = getCartKey(name, sauce, fries, drinkOption, soda, dessertOption, dessert);
  const existing = cart.get(key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.set(key, { ...item, key, sauce, fries, drinkOption, soda, dessertOption, dessert, price: item.price + friesPrice + drinkPrice + dessertPrice, qty: 1 });
  }

  renderCart();
  showToast(`${getCartItemTitle({ name, sauce, fries, drinkOption, soda, dessertOption, dessert })} ajouté au panier`);

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

function updateQuantity(key, delta) {
  const item = cart.get(key);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart.delete(key);
  }

  renderCart();
}

function buildWhatsAppMessage() {
  const items = [...cart.values()];
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const lines = items.map(
    (item) => `- ${item.qty} x ${getCartItemTitle(item)}: ${formatPrice(item.qty * item.price)}`
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
    const data = [...cart.entries()].map(([k, v]) => [k, { name: v.name, category: v.category, price: v.price, sauce: v.sauce, fries: v.fries, drinkOption: v.drinkOption, soda: v.soda, dessertOption: v.dessertOption, dessert: v.dessert, qty: v.qty }]);
    localStorage.setItem("broadway_cart", JSON.stringify(data));
  } catch (_) {}
}

function loadCart() {
  try {
    const raw = localStorage.getItem("broadway_cart");
    if (!raw) return;
    const data = JSON.parse(raw);
    for (const [key, val] of data) {
      const menuItem = menu.find((m) => m.name === val.name || m.name === key);
      if (menuItem) {
        const hasOptions = val.sauce || val.fries || val.drinkOption || val.soda || val.dessertOption || val.dessert;
        const cartKey = hasOptions ? getCartKey(menuItem.name, val.sauce, val.fries, val.drinkOption, val.soda, val.dessertOption, val.dessert) : menuItem.name;
        cart.set(cartKey, { ...menuItem, key: cartKey, price: val.price || menuItem.price, sauce: val.sauce || null, fries: val.fries || null, drinkOption: val.drinkOption || null, soda: val.soda || null, dessertOption: val.dessertOption || null, dessert: val.dessert || null, qty: val.qty });
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
  updateQuantity(button.dataset.key, delta);
});

sauceModal.addEventListener("click", (event) => {
  if (event.target === sauceModal) {
    closeSauceModal();
    return;
  }

  const sauceButton = event.target.closest("[data-sauce]");
  if (sauceButton) {
    selectedSauce = sauceButton.dataset.sauce;
    selectModalOption(sauceButton, "[data-sauce]");
    updateSauceSubmitState();
    return;
  }

  const friesButton = event.target.closest("[data-fries]");
  if (friesButton) {
    selectedFries = friesButton.dataset.fries;
    selectModalOption(friesButton, "[data-fries]");
    updateSauceSubmitState();
    return;
  }

  const drinkButton = event.target.closest("[data-drink-option]");
  if (drinkButton) {
    selectedDrinkOption = drinkButton.dataset.drinkOption;
    selectedSoda = null;
    selectModalOption(drinkButton, "[data-drink-option]");
    sodaChoice.hidden = selectedDrinkOption !== "with";
    sodaOptions.querySelectorAll("[data-soda]").forEach((option) => {
      option.classList.remove("selected");
      option.setAttribute("aria-pressed", "false");
    });
    updateSauceSubmitState();
    return;
  }

  const sodaButton = event.target.closest("[data-soda]");
  if (sodaButton) {
    selectedSoda = sodaButton.dataset.soda;
    selectModalOption(sodaButton, "[data-soda]");
    updateSauceSubmitState();
    return;
  }

  const dessertButton = event.target.closest("[data-dessert-option]");
  if (dessertButton) {
    selectedDessertOption = dessertButton.dataset.dessertOption;
    selectedDessert = null;
    selectModalOption(dessertButton, "[data-dessert-option]");
    dessertChoice.hidden = selectedDessertOption !== "with";
    dessertOptions.querySelectorAll("[data-dessert]").forEach((option) => {
      option.classList.remove("selected");
      option.setAttribute("aria-pressed", "false");
    });
    updateSauceSubmitState();
    return;
  }

  const dessertItemButton = event.target.closest("[data-dessert]");
  if (dessertItemButton) {
    selectedDessert = dessertItemButton.dataset.dessert;
    selectModalOption(dessertItemButton, "[data-dessert]");
    updateSauceSubmitState();
  }
});

sauceClose.addEventListener("click", closeSauceModal);

sauceSubmit.addEventListener("click", () => {
  const isBurrito = hasBurritoOptions(pendingOptionCategory);
  const hasFriesOption = hasFriesOptions(pendingOptionCategory);
  const hasDessertOption = hasDessertOptions(pendingOptionCategory);
  if (!pendingSauceItem || !selectedDrinkOption) return;
  if (isBurrito && !selectedSauce) return;
  if (hasFriesOption && !selectedFries) return;
  if (selectedDrinkOption === "with" && !selectedSoda) return;
  if (hasDessertOption && !selectedDessertOption) return;
  if (selectedDessertOption === "with" && !selectedDessert) return;
  const name = pendingSauceItem;
  const sauce = selectedSauce;
  const fries = selectedFries;
  const drinkOption = selectedDrinkOption;
  const soda = selectedSoda;
  const dessertOption = selectedDessertOption;
  const dessert = selectedDessert;
  closeSauceModal();
  addToCart(name, sauce, fries, drinkOption, soda, dessertOption, dessert);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !sauceModal.hidden) {
    closeSauceModal();
  }
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
