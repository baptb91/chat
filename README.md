# Application de Chat en Temps Réel

Une application de chat en temps réel construite avec Next.js, Firebase et Tailwind CSS.

## Fonctionnalités

- Chat public en temps réel
- Authentification des utilisateurs
- Liste de contacts
- Statuts en ligne/hors ligne
- Interface responsive
- Historique des messages

## Prérequis

- Node.js 18 ou supérieur
- Compte Firebase

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd chat-app
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :
```
NEXT_PUBLIC_FIREBASE_API_KEY=votre_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=votre_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=votre_app_id
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Configuration Firebase

1. Créez un projet sur [Firebase Console](https://console.firebase.google.com)
2. Activez l'authentification par email/mot de passe
3. Créez une base de données Firestore
4. Copiez les informations de configuration de votre projet Firebase dans le fichier `.env.local`

## Structure du Projet

```
chat-app/
├── app/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── chat/
│   │   │   └── ChatWindow.tsx
│   │   └── contacts/
│   │       └── ContactList.tsx
│   ├── firebase/
│   │   └── config.ts
│   └── page.tsx
├── public/
└── package.json
```

## Technologies Utilisées

- Next.js 14
- TypeScript
- Firebase (Authentication, Firestore)
- Tailwind CSS
- Socket.IO

## Déploiement

L'application peut être déployée sur Vercel :

```bash
npm run build
vercel
```

## Licence

MIT
#   c h a t e n l i g n e  
 