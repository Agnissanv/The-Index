# The Index — annuaire d'outils IA

Site statique construit avec **Astro** + **Tailwind CSS**, pensé pour être hébergé gratuitement sur **Vercel** via **GitHub**.

## 🚀 Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur `http://localhost:4321`.

```bash
npm run build    # génère le site statique dans /dist
npm run preview  # prévisualise le build de production en local
```

## 📁 Structure importante

```
src/
  content/tools/       ← un fichier .md par outil IA (c'est ici que tu ajoutes du contenu)
  content.config.ts    ← schéma de validation des outils (champs obligatoires)
  data/categories.ts   ← liste des catégories (à modifier si tu veux en ajouter)
  pages/                ← les routes du site (accueil, /tools/[slug], /category/[cat], /submit)
  components/           ← ToolCard, header, footer
  styles/global.css     ← tous les tokens de couleur, police, etc.
```

## ➕ Ajouter un nouvel outil

Crée un fichier `src/content/tools/nom-outil.md` en copiant un fichier existant. Champs à remplir :

```yaml
---
name: "Nom de l'outil"
tagline: "Une phrase d'accroche"
description: "2-3 phrases qui expliquent ce que fait l'outil"
category: "writing" # writing | image | video | audio | coding | productivity | research | design
pricing: "freemium"  # free | freemium | paid
startingPrice: "$10/mo"
website: "https://..."
affiliateUrl: "https://...?ref=TON_ID"  # optionnel, sinon website est utilisé
pros:
  - "Point fort 1"
  - "Point fort 2"
cons:
  - "Limite 1"
bestFor: "Pour qui c'est fait"
featured: false        # true = apparaît en avant sur la homepage
catalogNo: "013"        # numéro suivant dans l'ordre
---
```

Le site est **statique** : chaque fois que tu ajoutes/modifies un fichier et push sur GitHub, Vercel redéploie automatiquement.

## 💰 Avant de mettre en ligne pour de vrai (monétisation)

1. **Affiliation** : remplace chaque `affiliateUrl` par ton vrai lien d'affiliation une fois inscrit aux programmes des outils (souvent via des plateformes comme PartnerStack, Impact, ou directement sur le site de l'outil, section "Affiliates" ou "Partners").
2. **Formulaire de soumission** (`/submit`) : crée un compte gratuit sur [formspree.io](https://formspree.io), crée un formulaire, et remplace `YOUR_FORM_ID` dans `src/pages/submit.astro`.
3. **Google AdSense** (optionnel, en complément) : une fois le site en ligne avec du trafic, tu peux demander l'approbation AdSense et ajouter le script dans `src/layouts/Layout.astro`.
4. **URL du site** : remplace `https://example.com` par ton vrai nom de domaine dans `astro.config.mjs` (ligne `site:`) et dans `public/robots.txt` — important pour que le sitemap et le SEO fonctionnent correctement.

## 🌐 Déployer sur Vercel via GitHub

1. Crée un nouveau dépôt sur GitHub et pousse ce projet :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TON_USERNAME/ai-tools-directory.git
   git push -u origin main
   ```
2. Va sur [vercel.com](https://vercel.com), connecte-toi avec GitHub.
3. Clique "Add New Project", sélectionne ton dépôt.
4. Vercel détecte Astro automatiquement (build command: `npm run build`, output: `dist`). Clique "Deploy".
5. À chaque `git push`, le site se redéploie tout seul.

## 🔍 SEO — pour attirer du trafic international

- Chaque page a déjà des balises `<title>` et `<meta description>` uniques.
- Un sitemap est généré automatiquement (`/sitemap-index.xml`).
- Pense à soumettre le sitemap à [Google Search Console](https://search.google.com/search-console) une fois le domaine en ligne.
- Le vrai levier de trafic sera d'ajouter régulièrement de nouveaux outils et, plus tard, des articles de blog ciblant des requêtes comme "best AI tool for X".

## 🎨 Design

Palette et typographies définies dans `src/styles/global.css` (tokens `--color-*`, `--font-*`). Thème "fiche de catalogue" : cartes avec numéro de référence, structure claire par catégorie.
