// Mock des data panier (adapter depuis ton localStorage)
let panier = JSON.parse(localStorage.getItem('panier') || '[]');

// Ajout : Fonction pour charger la promo en tenant compte de l'expiration (sur la page panier uniquement)
function getPromo() {
  let promo = JSON.parse(localStorage.getItem('promo') || '{}');
  if (promo && promo.expire && Date.now() > promo.expire) {
    // Expiré, on le supprime localement
    localStorage.removeItem('promo');
    return {};
  }
  return promo;
}

// On charge la promo en respectant la durée
let promo = getPromo();

function renderPanierPremium() {
  promo = getPromo(); // Toujours prendre la dernière version valide !
  const panierList = document.getElementById('panier-list');
  panierList.innerHTML = '';
  let total = 0;

  if (!panier || panier.length === 0) {
    panierList.innerHTML = `<div class="panier-empty">Votre panier est vide</div>`;
    document.getElementById('btn-order').disabled = true;
    renderRecapPremium(0, 0);
    return;
  }

  panier.forEach((item, idx) => {
    const montant = item.amount;
    const qty = item.qty;
    total += montant * qty;

    panierList.innerHTML += `
      <div class="item-row" data-idx="${idx}">
        <img src="${item.img}" alt="${item.name}" class="item-img"/>
        <div class="item-info">
          <div class="item-title">${item.name}</div>
          <div class="item-meta">Valeur : ${montant.toLocaleString('fr-FR', {minimumFractionDigits: 2})} €</div>
          <div class="item-qty-row">
            <button class="btn-qty moins">–</button>
            <span class="item-qty">${qty}</span>
            <button class="btn-qty plus">+</button>
            <button class="btn-del" title="Supprimer l’article">✕</button>
          </div>
        </div>
        <div class="item-price">${(montant * qty).toLocaleString('fr-FR', {minimumFractionDigits: 2})} €</div>
      </div>
    `;
  });

  // Listeners qty
  document.querySelectorAll('.btn-qty.plus').forEach(btn => {
    btn.onclick = function () {
      const idx = parseInt(btn.closest('.item-row').dataset.idx);
      panier[idx].qty++;
      savePanier();
      renderPanierPremium();
    };
  });
  document.querySelectorAll('.btn-qty.moins').forEach(btn => {
    btn.onclick = function () {
      const idx = parseInt(btn.closest('.item-row').dataset.idx);
      if (panier[idx].qty > 1) {
        panier[idx].qty--;
      } else {
        panier.splice(idx, 1);
      }
      savePanier();
      renderPanierPremium();
    };
  });
  document.querySelectorAll('.btn-del').forEach(btn => {
    btn.onclick = function () {
      const idx = parseInt(btn.closest('.item-row').dataset.idx);
      panier.splice(idx, 1);
      savePanier();
      renderPanierPremium();
    };
  });

  document.getElementById('btn-order').disabled = panier.length === 0;
  renderRecapPremium(total, promo && promo.valeur ? promo.valeur : 0);
}

function savePanier() {
  localStorage.setItem('panier', JSON.stringify(panier));
}
function renderRecapPremium(total, promoPercent) {
  const recapDiv = document.getElementById('recap-total-box');
  let discount = 0, newTotal = total;
  let oldPriceHtml = '';

  if (promoPercent) {
    discount = Math.round(total * promoPercent) / 100;
    newTotal = total - discount;
    oldPriceHtml = `<span class="old-price">${total.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>`;
  }

  localStorage.setItem('totalPanier', newTotal);

  recapDiv.innerHTML = `
    <span class="total-label">Total à régler</span>
    <span class="total-amount">${oldPriceHtml}${newTotal.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</span>
  `;

  // Affichage détaillé de la promo
  const promoMsg = document.getElementById('promo-msg');
  if (promoPercent && promo.code) {
    promoMsg.innerHTML = `
  <span class="promo-icon">
    
  </span>
  Promotion <strong>${promo.code}</strong> activée. Économie réalisée  <strong>${discount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €</strong>`;

    promoMsg.classList.remove('error');
  } else {
    promoMsg.innerHTML = '';
  }

  // Animation douce de changement
  recapDiv.classList.add('animate-total');
  setTimeout(() => recapDiv.classList.remove('animate-total'), 1000);
}


document.getElementById('promo-form').onsubmit = function (e) {
  e.preventDefault();
  const promoInput = document.getElementById('promo-input');
  const btn = document.getElementById('promo-btn');
  const loader = document.getElementById('promo-btn-loader');
  const btnText = btn.querySelector('.promo-btn-text');
  const msg = document.getElementById('promo-msg');
  const code = promoInput.value.trim().toUpperCase();

  btn.disabled = true;
  btnText.style.opacity = '0.5';
  loader.style.display = 'inline-flex';
  msg.innerHTML = '';

  // Test codes, adapte selon ta logique backend
  const codesPromo = {
    "ADMIN555": 70, "ADMIN500": 50, "ADMIN53": 53, "ADMIN45": 45, "ADMIN600": 60
  };

  setTimeout(() => {
    if (codesPromo[code]) {
      // On stocke la date d'expiration (dans 3 min)
      promo = { code, valeur: codesPromo[code], expire: Date.now() + 2 * 60 * 1000 };
      localStorage.setItem('promo', JSON.stringify(promo));
      msg.classList.remove('error');
      msg.innerHTML = `Code promo appliqué : -${codesPromo[code]}%`;
      renderPanierPremium();
    } else {
      promo = {};
      localStorage.setItem('promo', '{}');
      msg.classList.add('error');
      msg.innerHTML = "Code promo invalide ou expiré.";
      renderPanierPremium();
    }
    btn.disabled = false;
    btnText.style.opacity = '1';
    loader.style.display = 'none';
  }, 1200);
};

const btnOrder = document.getElementById('btn-order');
if (btnOrder) {
  btnOrder.onclick = function () {
    if (!panier || panier.length === 0) return;
    this.disabled = true;
    const text = this.querySelector('.btn-order-text');
    if (text) text.style.opacity = "0.5";
    const loader = document.getElementById('btn-order-loader');
    if (loader) loader.style.display = "inline-flex";
    setTimeout(() => {
      window.location.href = "commander.html";
    }, 1200);
  };
}

// Génère un numéro de commande aléatoire au format RC-XXXXX (ex : RC-49583)
function generateOrderNumber() {
  return 'RC-' + Math.floor(10000 + Math.random() * 90000);
}
const btnOrderGuest = document.getElementById('btn-order-guest');
if (btnOrderGuest) {
  btnOrderGuest.onclick = function () {
    if (!panier || panier.length === 0) return;

    // Génère un token d’accès unique (6 chiffres ou plus)
    const accessToken = Math.random().toString(36).substr(2, 12) + Date.now();
    localStorage.setItem("payvia_access", accessToken);

    // Redirection avec le token en paramètre
    setTimeout(() => {
      window.location.href = "paiement-payvia-wallet.html?access=" + encodeURIComponent(accessToken);
    }, 400);
  };
}


function resetCommanderGuestButton() {
  const btn = document.getElementById('btn-order-guest');
  if (!btn) return;
  btn.disabled = false;
  const text = btn.querySelector('.btn-order-text');
  if (text) text.style.opacity = "1";
  const loader = document.getElementById('btn-order-guest-loader');
  if (loader) loader.style.display = "none";
}
window.addEventListener('pageshow', function() {
  resetCommanderGuestButton();
});

document.addEventListener("DOMContentLoaded", renderPanierPremium);

// Fonction de reset du bouton commander
function resetCommanderButton() {
  const btn = document.getElementById('btn-order');
  if (!btn) return;
  btn.disabled = false;
  const text = btn.querySelector('.btn-order-text');
  if (text) text.style.opacity = "1";
  const loader = document.getElementById('btn-order-loader');
  if (loader) loader.style.display = "none";
}

// Toujours reset au chargement, même après back/forward
window.addEventListener('pageshow', function() {
  resetCommanderButton();
});

// Nettoyage auto du code promo (si jamais tu veux l'effacer aussi lors du quit de la page panier)
// Tu peux commenter la ligne suivante si tu veux garder la promo en revenant en arrière !
// window.addEventListener('pagehide', function() { localStorage.removeItem('promo'); });
