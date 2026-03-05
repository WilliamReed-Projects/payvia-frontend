

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelector('.card-animate')?.classList.add('show');
      document.querySelector('.header-animate')?.classList.add('show');
      document.querySelector('.signup-cta')?.classList.add('show');
    }, 80);
  
    // Password show/hide
    const toggle = document.getElementById("togglePassword");
    const pwd = document.getElementById("password");
    let pwdVisible = false;
    toggle.onclick = (e) => {
      e.preventDefault();
      pwdVisible = !pwdVisible;
      pwd.type = pwdVisible ? "text" : "password";
      toggle.innerHTML = `<i data-feather="${pwdVisible ? "eye-off" : "eye"}"></i>`;
      feather.replace();
    };
  
    // Icônes email/pwd auto-hide on input
    const emailInput = document.getElementById('email');
    const iconMail = document.getElementById('iconMail');
    emailInput.addEventListener('input', () => {
      if (emailInput.value.trim().length > 0) {
        iconMail.style.opacity = "0";
        iconMail.style.pointerEvents = "none";
      } else {
        iconMail.style.opacity = "1";
        iconMail.style.pointerEvents = "";
      }
    });
    const API_BASE = "https://soldora-backend-backend.up.railway.app/";
    const pwdInput = document.getElementById('password');
    const iconLock = document.getElementById('iconLock');
    pwdInput.addEventListener('input', () => {
      if (pwdInput.value.trim().length > 0) {
        iconLock.style.opacity = "0";
        iconLock.style.pointerEvents = "none";
      } else {
        iconLock.style.opacity = "1";
        iconLock.style.pointerEvents = "";
      }
    });
  
    // Gestion du submit
    const form = document.getElementById("loginForm");
    const btn = document.getElementById("loginBtn");
    const loader = document.getElementById("loginLoader");
    const error = document.getElementById("loginError");
  
    form.onsubmit = async (e) => {
      e.preventDefault();
      error.textContent = "";
      error.classList.remove("active");
      btn.disabled = true;
      loader.classList.remove("hidden");
      btn.querySelector("span").textContent = "Connexion...";
  
      const email = form.email.value;
      const mot_de_passe = form.password.value;
  
      try {
        const resp = await fetch(`${API_BASE}api/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, mot_de_passe })
        });
        const data = await resp.json();
  
        loader.classList.add("hidden");
        btn.disabled = false;
        btn.querySelector("span").textContent = "Connexion";
  
        if (!resp.ok) {
          error.textContent = data.error || "Email ou mot de passe incorrect.";
          error.classList.add("active");
          return;
        }
  
        // Stocke le token JWT et redirige (à adapter si tu veux un cookie)
        localStorage.setItem("jwt", data.token);
  
        // Redirection page d’accueil / dashboard
        window.location.href = "/dashboard2.html";
      } catch (err) {
        loader.classList.add("hidden");
        btn.disabled = false;
        error.textContent = "Erreur réseau ou serveur.";
        error.classList.add("active");
      }
    };
  });
  
