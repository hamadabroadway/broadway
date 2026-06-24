# Broadway American Casablanca

Site web statique du menu Broadway American Food Casablanca, optimisé mobile et prêt pour Heberjahiz/cPanel Git Version Control.

URL de production :

```text
https://www.broadwayfood.ma/
```

## Aperçu local

Depuis ce dossier :

```bash
python3 -m http.server 4173
```

Puis ouvrir :

```text
http://127.0.0.1:4173/index.html
```

## Publication Heberjahiz / cPanel

Le site est prévu pour être publié depuis la branche `main`, dossier racine du repo.

Dans cPanel :

1. Créer ou ouvrir le domaine `broadwayfood.ma`.
2. Vérifier le document root du domaine.
3. Dans Git Version Control, connecter ce repo et déployer la branche `main`.
4. Si le document root n'est pas `$HOME/public_html`, modifier `DEPLOYPATH` dans `.cpanel.yml`.
5. Activer AutoSSL/SSL pour `broadwayfood.ma` et `www.broadwayfood.ma`.

Le fichier `.cpanel.yml` copie automatiquement `index.html`, `assets/`, les fichiers SEO et `.htaccess` vers le document root. Le fichier `.htaccess` force ensuite l'URL canonique `https://www.broadwayfood.ma/`.

## Structure

- `index.html` : page principale
- `styles.css` : styles responsive
- `script.js` : menu, panier et commande WhatsApp
- `assets/` : images optimisées WebP et logos
- `manifest.json`, `robots.txt`, `sitemap.xml`, `.htaccess` : fichiers utiles pour le référencement et cPanel

## Notes performance

- Images des articles en WebP et dimensionnées pour les cartes.
- Image principale préchargée pour améliorer l'affichage initial.
- JavaScript chargé avec `defer`.
