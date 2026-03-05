function readPanier() {
  try {
    const parsed = JSON.parse(localStorage.getItem('panier') || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function computeTotal(panier) {
  const stored = parseFloat(localStorage.getItem('totalPanier') || '');
  if (Number.isFinite(stored) && stored > 0) return stored;
  return panier.reduce((sum, item) => {
    const amount = Number(item?.amount || 0);
    const qty = Number(item?.qty || 0);
    return sum + (Number.isFinite(amount) ? amount : 0) * (Number.isFinite(qty) ? qty : 0);
  }, 0);
}

function euro(n) {
  return Number(n || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2 }) + ' €';
}

function renderCheckout() {
  const panier = readPanier();
  const recap = document.getElementById('checkout-recap');
  const recapTotal = document.getElementById('recap-total-box');
  const btnFinaliser = document.getElementById('btn-finaliser-wallet');
  const btnCrediter = document.getElementById('btn-crediter-wallet');
  const walletAmount = document.getElementById('user-solde-amount');
  const insuffisantMsg = document.getElementById('solde-insuffisant-msg');

  if (!recap || !recapTotal) return;

  const total = computeTotal(panier);
  localStorage.setItem('totalPanier', String(total));

  if (!panier.length || total <= 0) {
    recap.innerHTML = `<div class="panier-empty">Votre panier est vide.</div>`;
    recapTotal.innerHTML = `<span class="total-label">Total</span><span class="total-amount">0,00 €</span>`;
    if (btnFinaliser) btnFinaliser.disabled = true;
    if (walletAmount) walletAmount.textContent = '0,00 €';
    return;
  }

  recap.innerHTML = panier.map((item) => {
    const amount = Number(item.amount || 0);
    const qty = Number(item.qty || 0);
    const lineTotal = amount * qty;
    return `
      <div class="item-row">
        <img src="${item.img}" alt="${item.name}" class="item-img" />
        <div class="item-info">
          <div class="item-title">${item.name}</div>
          <div class="item-meta">${euro(amount)} × ${qty}</div>
        </div>
        <div class="item-price">${euro(lineTotal)}</div>
      </div>
    `;
  }).join('');

  recapTotal.innerHTML = `
    <span class="total-label">Total a regler</span>
    <span class="total-amount">${euro(total)}</span>
  `;

  const walletSolde = parseFloat(localStorage.getItem('payvia_wallet_solde') || '0');
  if (walletAmount) walletAmount.textContent = euro(walletSolde);

  if (btnCrediter) {
    btnCrediter.onclick = () => {
      window.location.href = 'paiement-payvia-wallet.html';
    };
  }

  if (btnFinaliser) {
    btnFinaliser.disabled = false;
    btnFinaliser.onclick = () => {
      if (walletSolde < total) {
        if (insuffisantMsg) {
          insuffisantMsg.style.display = 'block';
          insuffisantMsg.textContent = 'Solde insuffisant. Ajoutez du credit ou utilisez le paiement invite.';
        }
        return;
      }
      const accessToken = Math.random().toString(36).slice(2) + Date.now();
      localStorage.setItem('payvia_access', accessToken);
      window.location.href = 'paiement-payvia-wallet.html?access=' + encodeURIComponent(accessToken);
    };
  }
}

document.addEventListener('DOMContentLoaded', renderCheckout);
