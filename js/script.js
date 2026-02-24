// --- Liste des cartes cadeaux ---
const cards = [
    {
      name: "Airbnb",
      img: "assets/airbnb.png",
    },
    {
      name: "Amazon",
      img: "assets/amazon.png",
    },
    {
      name: "Apple",
      img: "assets/apple.png",
    },
    {
      name: "Paysafecard",
      img: "assets/paysafecard.png",
    },
    {
      name: "Transcash",
      img: "assets/transcash.png",
    },
    {
      name: "PCS",
      img: "assets/pcs.png",
    },
    {
      name: "payvia",
      img: "assets/payvia.png",
    },
    {
      name: "Fnac",
      img: "assets/fnac.png",
    },
  ];
  function renderCards(filteredCards = cards) {
    const cardsList = document.getElementById('cards-list');
    if (!cardsList) return; // <= ajout de cette ligne !
    cardsList.innerHTML = "";
  
    filteredCards.forEach(card => {
      if (card.outOfStock) {
        cardsList.innerHTML += `
          <div class="product-logo-card out-of-stock">
            <img class="product-logo-img" src="${card.img}" alt="${card.name}">
            <div class="product-logo-name">${card.name}</div>
            <div class="rupture-badge-pro">Rupture de stock</div>
          </div>
        `;
      } else {
        cardsList.innerHTML += `
          <a href="produit.html?name=${encodeURIComponent(card.name)}" class="product-logo-card">
            <img class="product-logo-img" src="${card.img}" alt="${card.name}">
            <div class="product-logo-name">${card.name}</div>
          </a>
        `;
      }
    });
  }
  
  
  // Initialisation
  renderCards();
  
  // Lire plus / Lire moins présentation
  const readMoreBtn = document.getElementById('read-more-btn');
  const fullText = document.getElementById('full-text');
  const shortText = document.getElementById('short-text');
  
  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', function() {
      if (fullText.style.display === "none") {
        fullText.style.display = "inline";
        readMoreBtn.textContent = "Lire moins";
        shortText.style.display = "none";
      } else {
        fullText.style.display = "none";
        readMoreBtn.textContent = "Lire plus";
        shortText.style.display = "inline";
      }
    });
  }
  
  // ==== POPUP RECHERCHE ====
  // (renommé produitsRecherche pour éviter le conflit)
  const produitsRecherche = [
    {
      nom: "Transcash",
      img: "assets/transcash.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Transcash"
    },
    {
      nom: "Apple",
      img: "assets/apple.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Apple"
    },
    {
      nom: "PCS",
      img: "assets/pcs.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=PCS"
    },
    {
      nom: "Nike",
      img: "assets/nike.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Nike"
    },
    {
      nom: "Fnac",
      img: "assets/fnac.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Fnac"
    },
    {
      nom: "Airbnb",
      img: "assets/airbnb.png",
      description: "E-carte cadeau / à partir de 50,00 €",
      url: "produit.html?name=Airbnb"
    },
    {
      nom: "Amazon",
      img: "assets/amazon.png",
      description: "Carte cadeau Amazon, dès 20€",
      url: "produit.html?name=Amazon"
    },
  ];
  
  const openSearch = document.getElementById('open-search');
  const searchPopup = document.getElementById('search-popup');
  const closeSearch = document.getElementById('close-search');
  const searchBlur = document.getElementById('search-blur');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if(openSearch) openSearch.onclick = () => {
    searchPopup.classList.add('active');
    searchBlur.classList.add('active');
    document.body.classList.add('popup-open');
    setTimeout(() => {
      const si = document.getElementById('search-input');
      if (si) si.focus();
    }, 140);
  };
  function closeSearchPopup() {
    searchPopup.classList.remove('active');
    searchBlur.classList.remove('active');
    document.body.classList.remove('popup-open');
  }
  if(closeSearch) closeSearch.onclick = closeSearchPopup;
  if(searchBlur) searchBlur.onclick = closeSearchPopup;
  
  // Recherche live dans la popup
  if(searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      searchResults.innerHTML = "";
      if(!query) return;
  
      const filtered = produitsRecherche.filter(p => p.nom.toLowerCase().includes(query));
      if(filtered.length > 0){
        filtered.forEach(prod => {
          searchResults.innerHTML += `
            <div class="search-result-item">
              <img src="${prod.img}" class="search-result-img" alt="${prod.nom}">
              <div class="search-result-infos">
                <div class="search-result-title">${prod.nom} <span style="color:#789;font-size:.97em;">FR</span></div>
                <div class="search-result-desc">${prod.description}</div>
                <a class="search-result-btn" href="${prod.url}">Voir le résultat</a>
              </div>
            </div>
          `;
        });
      } else {
        searchResults.innerHTML = `
          <div class="search-result-suggestion">
            <span>Aucune carte n'a été trouvée<span>
          </div>
          <a class="search-result-btn" href="index.html">Découvrir</a>
        `;
      }
    });
  }
  
  // ==== POPUP PANIER ====
  const openCart = document.getElementById('open-cart');
  const cartPopup = document.getElementById('cart-popup');
  const closeCart = document.getElementById('close-cart');
  const cartBlur = document.getElementById('cart-blur');
  const cartCount = document.getElementById('cart-count');
  const cartCountPopup = document.getElementById('cart-count-popup');
  
  if(openCart) openCart.onclick = () => {
    cartPopup.classList.add('active');
    cartBlur.classList.add('active');
    document.body.classList.add('popup-open');
    if(cartCount && cartCountPopup) {
      cartCountPopup.innerText = cartCount.innerText;
    }
  };
  function closeCartPopup() {
    cartPopup.classList.remove('active');
    cartBlur.classList.remove('active');
    document.body.classList.remove('popup-open');
  }
  if(closeCart) closeCart.onclick = closeCartPopup;
  if(cartBlur) cartBlur.onclick = closeCartPopup;
  
  // ==== ESC pour fermer n'importe quelle popup ====
  window.addEventListener('keydown', function(e){
    if(e.key==="Escape"){
      closeSearchPopup();
      closeCartPopup();
    }
  });
  
  const openAccount = document.getElementById('open-account');
  if(openAccount) openAccount.onclick = () => {
    window.location.href = "Connexion.html";
  };
  
  // Slider bannière
  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dots .dot');
    let slideIndex = 0;
    function showSlide(idx) {
      slides.forEach((slide,i) => slide.classList.toggle('active', i === idx));
      dots.forEach((dot,i) => dot.classList.toggle('active', i === idx));
    }
    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }
    let slideInterval = setInterval(nextSlide, 3000);
    const banner = document.getElementById('product-banner');
    if(banner){
      banner.addEventListener('mouseenter', ()=>clearInterval(slideInterval));
      banner.addEventListener('mouseleave', ()=>slideInterval = setInterval(nextSlide, 3000));
    }
    dots.forEach((dot, i) => dot.onclick = ()=>{ slideIndex=i; showSlide(slideIndex); });
    showSlide(0);
  });
  