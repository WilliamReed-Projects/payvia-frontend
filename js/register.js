

const STEPS = 7;
let currentStep = 1;

function showStep(n) {
  document.querySelectorAll('.register-step').forEach(sec => {
    sec.classList.remove('active', 'show');
    sec.style.display = 'none';
  });
  const current = document.querySelector(`.register-step[data-step="${n}"]`);
  if (current) {
    current.classList.add('active');
    setTimeout(() => current.classList.add('show'), 30);
    current.style.display = 'flex';
  }
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    progressBar.style.width = `${((n-1)/(STEPS-1))*100}%`;
  }
  if (window.feather) feather.replace();
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.header-animate')?.classList.add('show');
    document.querySelector('.card-animate')?.classList.add('show');
    document.querySelector('.signup-cta')?.classList.add('show');
  }, 80);

  showStep(1);

  const API_BASE = `${(window.__PAYVIA_API_BASE || "https://soldora-backend-backend.up.railway.app").replace(/\/+$/, "")}/`;
  const BASE = "/";


  const step1Form = document.getElementById('step1Form');
  const step2Form = document.getElementById('step2Form');
  const resendCodeBtn = document.getElementById('resendCodeBtn');
  const registerEmailInput = document.getElementById('registerEmail');
  const displayEmail = document.getElementById('displayEmail');
  const registerCodeInput = document.getElementById('registerCode');
  const codeError = document.getElementById('codeError');
  const hasStep3 = !!document.querySelector('.register-step[data-step="3"]');

  // ETAPE 1 : Email
  if (step1Form) step1Form.onsubmit = async e => {
    e.preventDefault();
    const email = registerEmailInput?.value;
    if (!email) return;
    if (displayEmail) displayEmail.textContent = email;

    try {
      const resp = await fetch(`${API_BASE}api/send-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await resp.json();
      if (!resp.ok) {
        alert(data.error || "Erreur d’envoi de mail.");
        return;
      }
      if (data && data.debugCode) {
        alert(`Code temporaire: ${data.debugCode}`);
      }
      currentStep = 2;
      showStep(currentStep);
    } catch (err) {
      alert("Erreur réseau !");
    }
  };

  // ETAPE 2 : Code
  if (step2Form) step2Form.onsubmit = async e => {
    e.preventDefault();
    const code = registerCodeInput?.value;
    const email = registerEmailInput?.value;
    if (!email || !code) return;

    try {
      const resp = await fetch(`${API_BASE}api/verify-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code })
      });
      const data = await resp.json();

      if (data.success) {
        if (hasStep3) {
          currentStep = 3;
          showStep(currentStep);
        } else {
          window.location.href = `${BASE}login.html`;
        }
      } else {
        if (registerCodeInput) registerCodeInput.classList.add('border-pink-400');
        if (codeError) codeError.textContent = "Code incorrect ou expiré.";
        setTimeout(() => {
          if (registerCodeInput) registerCodeInput.classList.remove('border-pink-400');
          if (codeError) codeError.textContent = "";
        }, 1500);
      }
    } catch (err) {
      if (codeError) codeError.textContent = "Erreur réseau.";
    }
  };

  // ETAPE 2 BIS : Renvoyer le code
  if (resendCodeBtn) resendCodeBtn.onclick = async () => {
    const email = registerEmailInput?.value;
    if (!email) return;
    try {
      const resp = await fetch(`${API_BASE}api/send-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await resp.json();
      if (!resp.ok) {
        alert(data.error || "Erreur d’envoi de mail.");
        return;
      }
      if (data && data.debugCode) {
        alert(`Code temporaire: ${data.debugCode}`);
      }
      alert("Nouveau code envoyé par email !");
    } catch (err) {
      alert("Erreur réseau !");
    }
  };

  // ETAPE 3 : Mot de passe
  const pwdInput = document.getElementById('registerPwd');
  const ruleLength = document.getElementById('rule-length');
  const ruleDigit = document.getElementById('rule-digit');
  const ruleUpper = document.getElementById('rule-upper');
  if (pwdInput && ruleLength && ruleDigit && ruleUpper) pwdInput.oninput = () => {
    const val = pwdInput.value;
    ruleLength.classList.toggle('valid', val.length >= 8 && val.length <= 26);
    ruleDigit.classList.toggle('valid', /\d/.test(val));
    ruleUpper.classList.toggle('valid', /[A-Z]/.test(val));
  };
  const toggleRegisterPwd = document.getElementById('toggleRegisterPwd');
  if (toggleRegisterPwd && pwdInput) toggleRegisterPwd.onclick = e => {
    e.preventDefault();
    pwdInput.type = pwdInput.type === "password" ? "text" : "password";
    toggleRegisterPwd.innerHTML =
      `<i data-feather="${pwdInput.type === "password" ? "eye" : "eye-off"}"></i>`;
    if(window.feather) feather.replace();
  };
  const step3Form = document.getElementById('step3Form');
  if (step3Form && pwdInput) step3Form.onsubmit = e => {
    e.preventDefault();
    if (
      pwdInput.value.length >= 8 && pwdInput.value.length <= 26 &&
      /\d/.test(pwdInput.value) && /[A-Z]/.test(pwdInput.value)
    ) {
      currentStep = 4;
      showStep(currentStep);
    }
  };

  // ETAPE 4 : Parrainage
  let parrainOui = false;
  document.querySelectorAll('.parrain-btn').forEach(btn => {
    btn.onclick = () => {
      const val = btn.dataset.answer;
      parrainOui = val === "oui";
      document.getElementById('parrainCodeContainer').classList.toggle('hidden', !parrainOui);
      if (!parrainOui) {
        setTimeout(() => {
          currentStep = 5;
          showStep(currentStep);
        }, 350);
      }
    }
  });
  const step4Form = document.getElementById('step4Form');
  if (step4Form) step4Form.onsubmit = e => {
    e.preventDefault();
    currentStep = 5;
    showStep(currentStep);
  };

  // ETAPE 5 : Pays
  const countryList = [
    "France", "Belgique", "Suisse", "Canada", "Allemagne", "Royaume-Uni", "Italie", "Espagne", "Maroc", "Tunisie",
    "Sénégal", "Côte d’Ivoire", "Émirats arabes unis", "États-Unis", "Portugal", "Pays-Bas", "Luxembourg", "Turquie",
    "Pologne", "Roumanie", "Cameroun", "Algérie", "Madagascar", "Israël", "Japon", "Chine", "Russie", "Australie", "Brésil"
  ];
  const select = document.getElementById('countrySelect');
  if (select) {
    countryList.forEach(pays => {
      const opt = document.createElement('option');
      opt.value = pays;
      opt.textContent = pays;
      select.appendChild(opt);
    });
    select.value = "France";
  }
  const step5Form = document.getElementById('step5Form');
  if (step5Form) step5Form.onsubmit = e => {
    e.preventDefault();
    currentStep = 6;
    showStep(currentStep);

  };
  const openTerms = document.getElementById('openTerms');
  if (openTerms) openTerms.onclick = e => {
    e.preventDefault();
    alert('Conditions générales (à personnaliser plus tard)');
  };

  const step6Form = document.getElementById('step6Form');
  if (step6Form) step6Form.onsubmit = async e => {
    e.preventDefault();

    // Récupération et sécurisation des champs
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const tel = document.getElementById('telephone').value.trim();
    const date_naissance = document.getElementById('dateNaissance').value.trim();
    const countryCode = '+33';
    const email = document.getElementById('registerEmail').value;
    const mot_de_passe = document.getElementById('registerPwd').value;
    const adresse = document.getElementById('adresse').value.trim();
    const code_postal = document.getElementById('postal').value.trim() || null;
    const ville = document.getElementById('ville').value.trim() || null;
    const pays = document.getElementById('countrySelect').value;
    const code_parrain = document.getElementById('parrainCode')?.value.trim() || null;

    // Validation stricte JS pour chaque champ :
    const errorDiv = document.getElementById('registerError');
    errorDiv.textContent = "";
    const nameRegex = /^[A-Za-zÀ-ÿ -]{1,30}$/;
    if (!nameRegex.test(prenom)) return errorDiv.textContent = "Prénom invalide (lettres uniquement, 30 max)";
    if (!nameRegex.test(nom)) return errorDiv.textContent = "Nom invalide (lettres uniquement, 30 max)";
    if (adresse.length < 5 || adresse.length > 30) return errorDiv.textContent = "Adresse invalide (5-30 caractères)";
    if (code_postal && !/^[0-9]{4,10}$/.test(code_postal)) return errorDiv.textContent = "Code postal invalide (4-10 chiffres)";
    if (ville && !nameRegex.test(ville)) return errorDiv.textContent = "Ville invalide";
    if (!/^(06|07)[0-9]{8}$/.test(tel)) return errorDiv.textContent = "Format : 06XXXXXXXX ou 07XXXXXXXX";

    if (!date_naissance) return errorDiv.textContent = "Date de naissance obligatoire";
    if (prenom.length > 30 || nom.length > 30 || adresse.length > 30) return errorDiv.textContent = "Champs trop longs (30 max)";

    // Affiche le loader
    const loader = document.getElementById('registerLoader');
    loader.classList.remove('hidden');

    try {
      const resp = await fetch(`${API_BASE}api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom, prenom, email, mot_de_passe, adresse, code_postal, ville, pays, code_parrain,
          telephone: '+33' + tel,
          date_naissance
        })
      });
      const data = await resp.json();

      loader.classList.add('hidden');

      if (!resp.ok) {
        errorDiv.textContent = data.error || "Erreur lors de l'inscription";
        return;
      }
      currentStep = 7;
      showStep(currentStep);
      window.setTimeout(() => {
        window.location.href = `${BASE}login.html`;
      }, 1300);

    } catch (err) {
      loader.classList.add('hidden');
      errorDiv.textContent = "Erreur réseau ou serveur.";
    }
  };

  // ---- CORRECTION FINALE DISPARITION ICONE ----
  document.querySelectorAll('.relative').forEach(function(container) {
    const input = container.querySelector('input.input-glass');
    const icon = container.querySelector('i[data-feather].input-icon, .input-icon, i[data-feather]');
    if(input && icon) {
      function updateIcon() {
        icon.style.opacity = input.value.length > 0 ? '0' : '1';
      }
      input.addEventListener('input', updateIcon);
      updateIcon();
    }
  });
});
