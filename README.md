# Atelier d'optimisation (Site volontairement lent)

Ce projet contient un site statique HTML/CSS/JS conçu pour **charger lentement**. Il sert de support pédagogique pour identifier et corriger des problèmes de performance.

## Objectifs pour les étudiant·e·s

1. **Images** : réduire la résolution, compresser (mozjpeg/guetzli), convertir en WebP/AVIF, ajouter `srcset`/`sizes`, activer `loading="lazy"`, définir `width`/`height`.
2. **JavaScript** : supprimer les boucles bloquantes; charger le script avec `defer` ou en bas de page; découper/retarder ce qui n'est pas critique.
3. **CSS** : retirer `@import` et fusionner `styles.css` + `extra.css`; minifier; extraire un *critical CSS* inline.
4. **Polices** : réduire le nombre de variantes; `font-display: swap`; héberger localement ou précharger; fallback système.
5. **Réseau** : réduire le nombre et le poids des requêtes; configurer la mise en cache; activer Gzip/Brotli.
6. **Animations/ombres** : alléger les effets et privilégier `transform`/`opacity`.
7. **Nettoyage** : enlever CSS/JS morts et répétitions.
8. **Mesure** : utiliser Lighthouse, WebPageTest, DevTools (Coverage, Performance, Network) pour mesurer l'impact.

## Déploiement

Hébergez le dossier `slow-site/` tel quel sur un serveur statique (GitHub Pages, Netlify, Vercel, nginx/apache). L'URL servira aux tests.
