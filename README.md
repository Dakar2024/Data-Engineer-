# Data Engineering 2025 - Guide Interactif

Une application web interactive moderne présentant les compétences, outils et tâches essentielles d'un Data Engineer en 2025.

## 🚀 Aperçu

Cette application présente de manière interactive les 8 domaines d'expertise fondamentaux du métier de Data Engineer moderne :

- **Data Ingestion & Collection** - Collecte et ingestion de données
- **Data Processing & Transformation** - Transformation et nettoyage des données
- **Data Storage & Architecture** - Conception d'architectures de stockage
- **Workflow Orchestration** - Orchestration des pipelines
- **Cloud & Infrastructure** - Déploiement cloud-native
- **ML Engineering & MLOps** - Support des initiatives ML
- **Data Security & Governance** - Sécurisation et gouvernance
- **Monitoring & Observability** - Surveillance des systèmes

## 🛠 Technologies utilisées

- **Framework** : Next.js 13.5.1 avec App Router
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Deployment** : Optimisé pour Vercel

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18.0 ou supérieure)
- **npm** (généralement inclus avec Node.js)

Vous pouvez vérifier vos versions avec :
```bash
node --version
npm --version
```

## 🚀 Installation et lancement

### 1. Cloner le projet
```bash
git clone <url-du-repository>
cd data-engineering-2025
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer l'application en mode développement
```bash
npm run dev
```

### 4. Ouvrir dans le navigateur
Ouvrez votre navigateur et allez à l'adresse :
```
http://localhost:3000
```

L'application se rechargera automatiquement lorsque vous modifiez les fichiers.

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run start` - Lance l'application en mode production (après build)
- `npm run lint` - Vérifie le code avec ESLint

## 🏗 Structure du projet

```
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil interactive
├── public/                  # Fichiers statiques
├── package.json             # Dépendances et scripts
├── tailwind.config.ts       # Configuration Tailwind
├── tsconfig.json           # Configuration TypeScript
└── README.md               # Ce fichier
```

## ✨ Fonctionnalités

### Interface interactive
- **Cards cliquables** : Cliquez sur chaque domaine d'expertise pour voir les détails
- **Animations fluides** : Transitions et micro-interactions avec Framer Motion
- **Design responsive** : Optimisé pour tous les écrans (mobile, tablette, desktop)

### Contenu dynamique
- **Tech Stack 2025** : Ticker animé des technologies populaires
- **Barres de progression** : Visualisation de la popularité des outils
- **Détails complets** : Tâches principales et outils pour chaque domaine

### Design moderne
- **Gradients animés** : Effets visuels modernes
- **Glass morphism** : Effets de transparence et blur
- **Scrollbar personnalisée** : Design cohérent sur tous les navigateurs

## 🎨 Personnalisation

### Modifier les couleurs
Les couleurs principales sont définies dans `tailwind.config.ts` et peuvent être personnalisées.

### Ajouter du contenu
Le contenu principal se trouve dans `app/page.tsx` dans les constantes :
- `dataEngineerTasks` : Les 8 domaines d'expertise
- `techStack2025` : Les technologies et leur popularité

### Modifier les animations
Les animations sont gérées par Framer Motion dans les composants `motion.*`.

## 🚀 Déploiement

### Déploiement sur Vercel (recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployez en un clic

### Build local pour production
```bash
npm run build
npm run start
```

## 🐛 Résolution de problèmes

### Port déjà utilisé
Si le port 3000 est occupé, Next.js utilisera automatiquement le port suivant disponible (3001, 3002, etc.).

### Erreurs de dépendances
```bash
# Supprimer node_modules et package-lock.json
rm -rf node_modules package-lock.json
# Réinstaller
npm install
```

### Problèmes de cache
```bash
# Nettoyer le cache Next.js
npm run build -- --no-cache
```

## 📱 Compatibilité

- **Navigateurs** : Chrome, Firefox, Safari, Edge (versions récentes)
- **Appareils** : Desktop, tablette, mobile
- **Résolutions** : Responsive design adaptatif

## 👨‍💻 Développement

### Ajouter une nouvelle section
1. Créez votre composant dans `app/page.tsx`
2. Ajoutez les animations avec Framer Motion
3. Utilisez les classes Tailwind pour le styling

### Modifier les données
Les données sont stockées dans des constantes au début du fichier `app/page.tsx` pour faciliter les modifications.

## 📄 Licence

Ce projet est à des fins éducatives et de démonstration.

## 👤 Auteur

**MANTSOUAKA MPINDOU Franck Arthur**

---

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à contribuer au projet !# Data-Engineer-
