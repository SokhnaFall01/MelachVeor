/* =========================================================
   MELACH VE'OR — Comportements du site
   ========================================================= */
(function () {
  "use strict";
  var MV = window.MV;

  /* ---------- Icônes (traits fins, style épuré) ---------- */
  var ICONES = {
    flamme: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.2 1.2-3.6 2.4-4.6.2 1.6.9 2.6 2.1 3.1C11 9 11 6 12 3Z"/>',
    livre: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5Z"/>',
    colonnes: '<path d="M3 9.5 12 4l9 5.5"/><path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7"/><path d="M3 20h18"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1 0 1.6-.8 1.6-1.6 0-.5-.2-.8-.4-1.1-.3-.3-.4-.6-.4-1.1 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.6 17 3 12 3Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="14.5" cy="7" r="1"/><circle cx="17" cy="11" r="1"/>',
    personnes: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.6a3.2 3.2 0 0 1 0 6.3M18 14.3c1.8.8 3 2.6 3 4.7"/>',
    lune: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"/>',
    loupe: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    bulles: '<path d="M4 5h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/><path d="M16 9h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1v3l-4-3h-3"/>',
    boussole: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    plume: '<path d="M20 4c-7 0-12 5-13 12l-3 4"/><path d="M20 4c0 7-5 11-11 11"/><path d="M8 11h6"/>',
    marquePage: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
    marquePagePlein: '<path d="M6 3h12v18l-6-4-6 4V3Z" fill="currentColor"/>',
    copier: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    rafraichir: '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>',
    fleche: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    fermer: '<path d="M6 6l12 12M18 6 6 18"/>',
    soleil: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    coeur: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
    partage: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/>',
    sel: '<path d="M8 8h8l-1 12H9L8 8Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/><path d="M11 12h.01M13 15h.01M11 17h.01"/>',
    montagne: '<path d="m3 20 6-10 4 6 2-3 6 7H3Z"/><path d="M11 6h2v3h-2zM10 9h4"/>',
    etoile: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    courrier: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'
  };

  function icone(nom, extra) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' + (extra || "") + ">" + (ICONES[nom] || "") + "</svg>";
  }
  MV.icone = icone;

  /* ---------- Utilitaires ---------- */
  function echapper(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  MV.echapper = echapper;

  function normaliser(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, " ");
  }
  MV.normaliser = normaliser;

  function theme(id) { return MV.THEMES.filter(function (t) { return t.id === id; })[0]; }
  function envie(id) { return MV.ENVIES.filter(function (e) { return e.id === id; })[0]; }
  function livre(id) { return MV.LIVRES.filter(function (l) { return l.id === id; })[0]; }
  MV.theme = theme; MV.envie = envie; MV.livre = livre;

  function param(nom) {
    try { return new URLSearchParams(window.location.search).get(nom); } catch (e) { return null; }
  }
  MV.param = param;

  /* ---------- Ma liste (stockée dans le navigateur) ---------- */
  var CLE_LISTE = "melachveor-liste";
  var memoire = [];
  function lireListe() {
    try {
      var v = JSON.parse(window.localStorage.getItem(CLE_LISTE) || "[]");
      return Array.isArray(v) ? v : [];
    } catch (e) { return memoire.slice(); }
  }
  function ecrireListe(liste) {
    memoire = liste.slice();
    try { window.localStorage.setItem(CLE_LISTE, JSON.stringify(liste)); } catch (e) { /* stockage indisponible */ }
  }
  MV.liste = {
    tous: function () { return lireListe().filter(function (id) { return !!livre(id); }); },
    contient: function (id) { return lireListe().indexOf(id) !== -1; },
    basculer: function (id) {
      var l = lireListe(); var i = l.indexOf(id); var ajoute = i === -1;
      if (ajoute) l.push(id); else l.splice(i, 1);
      ecrireListe(l); majListe(); return ajoute;
    },
    vider: function () { ecrireListe([]); majListe(); }
  };

  function majListe() {
    var n = MV.liste.tous().length;
    document.querySelectorAll("[data-compte-liste]").forEach(function (el) { el.textContent = n; });
    document.querySelectorAll("[data-basculer-liste]").forEach(function (btn) {
      majBoutonListe(btn, MV.liste.contient(btn.getAttribute("data-basculer-liste")));
    });
    document.dispatchEvent(new CustomEvent("mv:liste"));
  }

  function majBoutonListe(btn, dedans) {
    btn.setAttribute("aria-pressed", dedans ? "true" : "false");
    btn.innerHTML = icone(dedans ? "marquePagePlein" : "marquePage") + "<span>" + (dedans ? "Dans ma liste" : "Ajouter à ma liste") + "</span>";
  }

  /* ---------- Notification ---------- */
  var toastTimer;
  function toast(msg) {
    var t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.setAttribute("aria-live", "polite"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("visible");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("visible"); }, 2400);
  }
  MV.toast = toast;

  /* ---------- Gabarits ---------- */
  function points(n) {
    var h = '<span class="points" aria-hidden="true">';
    for (var i = 1; i <= 5; i++) h += '<i class="' + (i <= n ? "" : "vide") + '"></i>';
    return h + "</span>";
  }

  function couverture(l, classe) {
    return '<div class="couverture ' + (classe || "") + '" data-theme="' + l.theme + '" aria-hidden="true">' +
      '<span class="couverture-titre">' + echapper(l.titre) + "</span>" +
      '<span class="couverture-auteur">' + echapper(l.auteur) + "</span></div>";
  }
  MV.couverture = couverture;

  function carteLivre(l) {
    var t = theme(l.theme);
    var url = "livre.html?id=" + encodeURIComponent(l.id);
    return '<article class="carte-livre" data-theme="' + l.theme + '">' +
      '<a class="carte-livre-lien" href="' + url + '" tabindex="-1" aria-hidden="true">' + couverture(l) + "</a>" +
      '<div class="carte-livre-corps">' +
        '<span class="etiquette">' + echapper(t ? t.nom : "") + "</span>" +
        '<h3><a class="carte-livre-lien" href="' + url + '">' + echapper(l.titre) + "</a></h3>" +
        '<p class="auteur">' + echapper(l.auteur) + "</p>" +
        '<p class="resume">' + echapper(l.resume) + "</p>" +
        '<p class="appreciation">' + points(l.appreciation) + '<span><span class="sr-only">Appréciation ' + l.appreciation + " sur 5 : </span>" + echapper(l.libelle) + "</span></p>" +
        '<button type="button" class="btn btn-doux btn-bloc" data-basculer-liste="' + l.id + '"></button>' +
      "</div></article>";
  }
  MV.carteLivre = carteLivre;
  MV.points = points;

  function rendreLivres(conteneur, livres) {
    conteneur.innerHTML = livres.map(carteLivre).join("");
    majListe();
  }
  MV.rendreLivres = rendreLivres;

  /* ---------- En-tête & pied de page ---------- */
  var page = document.body.getAttribute("data-page") || "";

  function lienNav(href, texte, cle) {
    return '<li><a href="' + href + '"' + (page === cle ? ' aria-current="page"' : "") + ">" + texte + "</a></li>";
  }

  function rendreEntete() {
    var el = document.getElementById("entete");
    if (!el) return;
    el.className = "entete";
    el.innerHTML =
      '<div class="conteneur entete-inner">' +
        '<a class="marque" href="index.html" aria-label="MELACH VE’OR — accueil">' +
          '<img src="assets/img/emblem-sm.png" alt="" width="54" height="39">' +
          '<span class="marque-texte"><span class="marque-nom">MELACH VE’OR</span><span class="marque-sous">Sel &amp; lumière</span></span>' +
        "</a>" +
        '<nav class="nav-principale" id="nav-principale" aria-label="Navigation principale"><ul>' +
          lienNav("decouvrir.html", "Découvrir", "decouvrir") +
          lienNav("thematiques.html", "Thématiques", "thematiques") +
          lienNav("selections.html", "Sélections", "selections") +
          lienNav("a-propos.html", "À propos", "a-propos") +
        "</ul></nav>" +
        '<div class="entete-actions">' +
          '<a class="pastille-liste" href="ma-liste.html"' + (page === "ma-liste" ? ' aria-current="page"' : "") + ">" + icone("marquePage") + '<span data-compte-liste>0</span><span class="libelle-long">&nbsp;dans ma liste</span><span class="sr-only"> livres dans ma liste</span></a>' +
          '<button type="button" class="btn-icone" data-ouvrir-recherche aria-label="Rechercher">' + icone("loupe") + "</button>" +
          '<button type="button" class="btn-icone btn-menu" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav-principale">' + icone("menu") + "</button>" +
        "</div>" +
      "</div>";

    var btnMenu = el.querySelector(".btn-menu");
    var nav = el.querySelector(".nav-principale");
    btnMenu.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("ouvert");
      btnMenu.setAttribute("aria-expanded", ouvert ? "true" : "false");
      btnMenu.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
      btnMenu.innerHTML = icone(ouvert ? "fermer" : "menu");
    });
  }

  function rendrePied() {
    var el = document.getElementById("pied");
    if (!el) return;
    el.className = "pied";
    var annee = new Date().getFullYear();
    el.innerHTML =
      '<div class="conteneur">' +
        '<div class="pied-grille">' +
          "<div>" +
            '<a class="marque" href="index.html"><img src="assets/img/emblem-sm.png" alt="" width="64" height="46"><span class="marque-texte"><span class="marque-nom">MELACH VE’OR</span><span class="marque-sous">Sel &amp; lumière</span></span></a>' +
            '<p class="pied-texte">' + echapper(MV.SITE.signature) + "</p>" +
          "</div>" +
          '<div><h4>Le projet</h4><ul>' +
            '<li><a href="a-propos.html">À propos</a></li>' +
            '<li><a href="a-propos.html#demarche">Notre démarche</a></li>' +
            '<li><a href="methode.html">Méthode de recommandation</a></li>' +
          "</ul></div>" +
          '<div><h4>Nous écrire</h4><ul>' +
            '<li><a href="contact.html">Contact</a></li>' +
            '<li><a href="confidentialite.html">Politique de confidentialité</a></li>' +
            '<li><a href="ma-liste.html">Ma liste</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="pied-bas"><span>© ' + annee + " MELACH VE’OR</span><em>« Vous êtes le sel de la terre et la lumière du monde. » — Matthieu 5:13-14</em></div>" +
      "</div>";
  }

  /* ---------- Recherche (fenêtre) ---------- */
  function rendreRecherche() {
    var m = document.createElement("div");
    m.className = "recherche-modale";
    m.setAttribute("role", "dialog");
    m.setAttribute("aria-modal", "true");
    m.setAttribute("aria-label", "Rechercher");
    m.innerHTML =
      '<div class="recherche-modale-boite">' +
        '<form class="barre-recherche" action="decouvrir.html" method="get" role="search" style="max-width:none;box-shadow:none">' +
          icone("loupe") +
          '<label class="sr-only" for="recherche-globale">Rechercher un livre, un auteur ou une thématique</label>' +
          '<input id="recherche-globale" name="q" type="search" placeholder="Un livre, un auteur, une thématique…" autocomplete="off">' +
          '<button class="btn btn-primaire" type="submit">Rechercher</button>' +
        "</form>" +
        "<p>Essayez : « Pascal », « démocratie », « espérance », « roman »…</p>" +
      "</div>";
    document.body.appendChild(m);
    var input = m.querySelector("input");
    var dernierFocus;
    function ouvrir() { dernierFocus = document.activeElement; m.classList.add("ouvert"); setTimeout(function () { input.focus(); }, 30); }
    function fermer() { m.classList.remove("ouvert"); if (dernierFocus) dernierFocus.focus(); }
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-ouvrir-recherche]")) { e.preventDefault(); ouvrir(); }
    });
    m.addEventListener("click", function (e) { if (e.target === m) fermer(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && m.classList.contains("ouvert")) fermer();
      if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); ouvrir(); }
    });
  }

  /* ---------- Clics sur « Ajouter à ma liste » ---------- */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-basculer-liste]");
    if (!btn) return;
    var id = btn.getAttribute("data-basculer-liste");
    var l = livre(id);
    var ajoute = MV.liste.basculer(id);
    toast(ajoute ? "« " + l.titre + " » ajouté à votre liste" : "« " + l.titre + " » retiré de votre liste");
  });

  /* ---------- Verset du jour ---------- */
  function indexDuJour() {
    var d = new Date();
    var debut = new Date(d.getFullYear(), 0, 0);
    var jour = Math.floor((d - debut) / 86400000);
    return jour % MV.VERSETS.length;
  }

  function initVerset() {
    var bloc = document.querySelector("[data-verset]");
    if (!bloc) return;
    var courant = indexDuJour();
    var ref = bloc.querySelector("[data-verset-ref]");
    var txt = bloc.querySelector("[data-verset-texte]");
    var refl = bloc.querySelector("[data-verset-reflexion]");
    var titre = bloc.querySelector("[data-verset-titre]");
    function afficher(i, estDuJour) {
      var v = MV.VERSETS[i];
      ref.textContent = v.ref;
      txt.textContent = v.texte;
      refl.textContent = v.reflexion;
      if (titre) titre.textContent = estDuJour ? "Verset du jour" : "Un autre verset";
    }
    afficher(courant, true);
    bloc.querySelector("[data-verset-autre]").addEventListener("click", function () {
      var n;
      do { n = Math.floor(Math.random() * MV.VERSETS.length); } while (n === courant && MV.VERSETS.length > 1);
      courant = n; afficher(courant, false);
    });
    bloc.querySelector("[data-verset-copier]").addEventListener("click", function () {
      var v = MV.VERSETS[courant];
      var texte = "« " + v.texte + " » — " + v.ref + " (Louis Segond)";
      copier(texte).then(function () { toast("Verset copié"); }, function () { toast("Impossible de copier le verset"); });
    });
  }

  function copier(texte) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(texte);
    return new Promise(function (ok, ko) {
      var ta = document.createElement("textarea");
      ta.value = texte; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy") ? ok() : ko(); } catch (e) { ko(e); }
      document.body.removeChild(ta);
    });
  }
  MV.copier = copier;

  /* ---------- Cartes thématiques ---------- */
  function compteTheme(id) { return MV.LIVRES.filter(function (l) { return l.theme === id; }).length; }

  function initThemes() {
    document.querySelectorAll("[data-grille-themes]").forEach(function (grille) {
      grille.innerHTML = MV.THEMES.map(function (t) {
        var n = compteTheme(t.id);
        return '<a class="carte-theme" data-theme="' + t.id + '" href="decouvrir.html?theme=' + t.id + '">' +
          '<span class="carte-theme-icone">' + icone(t.icone) + "</span>" +
          "<h3>" + echapper(t.nom) + "</h3>" +
          "<p>" + echapper(grille.hasAttribute("data-longue") ? t.longue : t.description) + "</p>" +
          '<span class="carte-theme-compte">' + n + " recommandation" + (n > 1 ? "s" : "") + "</span></a>";
      }).join("");
    });
  }

  /* ---------- Envies (accueil) ---------- */
  function initEnvies() {
    var bloc = document.querySelector("[data-envies]");
    if (!bloc) return;
    var puces = bloc.querySelector(".puces");
    var desc = bloc.querySelector(".envie-description");
    var res = bloc.querySelector(".envie-resultats");
    var lien = bloc.querySelector("[data-envie-lien]");
    puces.innerHTML = MV.ENVIES.map(function (e) {
      return '<button type="button" class="puce" aria-pressed="false" data-envie="' + e.id + '">' + icone(e.icone) + echapper(e.nom) + "</button>";
    }).join("");
    puces.addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-envie]");
      if (!b) return;
      var dejaActif = b.getAttribute("aria-pressed") === "true";
      puces.querySelectorAll(".puce").forEach(function (p) { p.setAttribute("aria-pressed", "false"); });
      if (dejaActif) { desc.textContent = ""; res.innerHTML = ""; lien.hidden = true; return; }
      b.setAttribute("aria-pressed", "true");
      var e = envie(b.getAttribute("data-envie"));
      desc.textContent = e.description;
      var livres = MV.LIVRES.filter(function (l) { return l.envies.indexOf(e.id) !== -1; })
        .sort(function (a, c) { return c.appreciation - a.appreciation; }).slice(0, 4);
      res.innerHTML = '<div class="grille-livres"></div>';
      rendreLivres(res.firstChild, livres);
      lien.hidden = false;
      lien.href = "decouvrir.html?envie=" + e.id;
      lien.querySelector("span").textContent = "Toutes les lectures pour " + e.nom.toLowerCase();
    });
  }

  /* ---------- Apparition douce au défilement ---------- */
  function initApparitions() {
    var els = document.querySelectorAll(".apparition");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("visible"); }); return; }
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });
    els.forEach(function (e) { obs.observe(e); });
  }

  /* ---------- Bandeau « version test » ---------- */
  function rendreBandeauTest() {
    if (!MV.SITE.versionTest) return;
    var b = document.createElement("div");
    b.className = "bandeau-test";
    b.innerHTML = "<strong>Version test</strong> — les livres présentés sont provisoires et seront remplacés par la sélection définitive.";
    document.body.insertBefore(b, document.body.firstChild);
  }

  /* ---------- Démarrage ---------- */
  rendreBandeauTest();
  rendreEntete();
  rendrePied();
  rendreRecherche();
  initThemes();
  initEnvies();
  initVerset();

  // Éléments « livres » déclaratifs : <div data-livres="une"> ou data-livres="id1,id2"
  document.querySelectorAll("[data-livres]").forEach(function (el) {
    var v = el.getAttribute("data-livres");
    var livres = v === "une" ? MV.LIVRES.filter(function (l) { return l.une; }) : v.split(",").map(livre).filter(Boolean);
    rendreLivres(el, livres);
  });

  // Les scripts de page peuvent s'exécuter ici
  if (typeof MV.page === "function") MV.page();

  majListe();
  initApparitions();
})();
