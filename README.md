# Broadway American Casablanca

Site web statique du menu Broadway American Food Casablanca, optimisé mobile et prêt pour GitHub Pages.

## Aperçu local

Depuis ce dossier :

```bash
python3 -m http.server 4173
```

Puis ouvrir :

```text
http://127.0.0.1:4173/index.html
```

## Publication GitHub Pages

Le site est prévu pour être publié depuis la branche `main`, dossier racine.

URL attendue après activation de GitHub Pages :

https://hamadabroadway.github.io/broadway/

## Structure

- `index.html` : page principale
- `styles.css` : styles responsive
- `script.js` : menu, panier et commande WhatsApp
- `assets/` : images optimisées WebP et logos
- `manifest.json`, `robots.txt`, `sitemap.xml`, `.nojekyll` : fichiers utiles pour GitHub Pages

## Notes performance

- Images des articles en WebP et dimensionnées pour les cartes.
- Image principale préchargée pour améliorer l'affichage initial.
- JavaScript chargé avec `defer`.
