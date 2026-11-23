# MELACH VE’OR

> Des lectures pour nourrir la pensée, fortifier la foi et éclairer le monde.

Site de recommandations et de découvertes littéraires. Site statique (HTML, CSS, JavaScript) : aucune installation ni compilation, il fonctionne tel quel sur n’importe quel hébergement (GitHub Pages, Netlify, OVH…).

## Voir le site en local

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Pages

| Page | Fichier |
|---|---|
| Accueil | `index.html` |
| Découvrir (recherche + filtres) | `decouvrir.html` |
| Thématiques | `thematiques.html` |
| Sélections éditoriales | `selections.html` |
| Fiche d’un livre | `livre.html?id=…` |
| Ma liste (favoris) | `ma-liste.html` |
| À propos, démarche, fondatrice | `a-propos.html` |
| Méthode de recommandation | `methode.html` |
| Contact | `contact.html` |
| Politique de confidentialité | `confidentialite.html` |

## Modifier les contenus

Tous les contenus éditoriaux sont dans **`js/data.js`** :

- `MV.LIVRES` : les livres (titre, auteur, thématique, envies, appréciation, résumé, présentation…). Mettre `une: true` pour afficher un livre dans « Recommandations du moment ».
- `MV.SELECTIONS` : les sélections éditoriales (`une: true` pour celle de l’accueil).
- `MV.VERSETS` : les versets du jour (Louis Segond 1910).
- `MV.SITE` : adresse e-mail de contact et, si besoin, l’adresse d’un service de formulaire.
- Le champ `liens` d’un livre permet d’ajouter des liens vers des librairies.

## Structure

```
css/style.css     Styles (palette, typographie, composants)
js/data.js        Contenus
js/app.js         En-tête, pied de page, recherche, ma liste, verset du jour
assets/img/       Emblème du logo, favicon
```

## Logo

- `assets/img/logo/melachveor-logo-vertical.png` : logo complet (emblème + nom), format carré, fond transparent.
- `assets/img/logo/melachveor-logo-horizontal.png` : version en longueur, fond transparent.
- `assets/img/partage.png` : image affichée quand un lien du site est partagé.

## Mise en ligne

Le site est publié automatiquement sur GitHub Pages à chaque envoi sur la branche (`.github/workflows/pages.yml`) :
https://sokhnafall01.github.io/MelachVeor/

Pendant la phase de test, un bandeau « Version test » s’affiche (`versionTest: true` dans `js/data.js`) et `robots.txt` bloque le référencement.
Pour la mise en ligne officielle : passer `versionTest` à `false` et remplacer `Disallow: /` par `Allow: /` dans `robots.txt`.
