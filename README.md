# Pokedex App

Welcome to the Pokedex App! This is a web application that allows you to browse and discover all the different Pokemon species and their details.

---

## Stack

![Nest JS](https://img.shields.io/badge/Nest.js-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![REACT JS](https://img.shields.io/badge/React.JS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-08B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## Snapshots

<img  align="left"  src="pokedex-react/src/assets/snapshots/mobile.png" alt="mobile-screenshot" width="23%" />
<img  src="pokedex-react/src/assets/snapshots/laptop.png" alt="laptop-screenshot-1"  width="74%" />

---

## Prerequisites

Before you can install and run this application, make sure you have the following dependencies installed:

- Node.js
- npm
- git

---

## Installation

1. Clone this repository onto your local machine:

```js
git clone https://github.com/Branda0/pokedex.git
```

2. Navigate to the root directory

```js
cd pokedex
```

3. From their you need to install the front and back dependencies and run them

   #### For the backend & from the root directory

   ```js
   // Install
   cd pokedex-nestjs
   npm install

   // Run
   npm run start
   ```

   #### For the frontend & from the root directory

   ```js
   // Install
   cd pokedex-react
   npm install

   // Run
   npm run dev

   ```

4. You should now have your two servers running

   Front should be running on : http://127.0.0.1:5173/

   Back should be running on : http://127.0.0.1:3333/

---

## Dependencies

The Pokedex App uses the following dependencies:

### Frontend

- axios: ^1.2.2
- dotenv: ^16.0.3
- react: ^18.2.0
- react-dom: ^18.2.0
- react-query: ^3.39.2
- react-router-dom: ^6.6.1

### Backend

- @nestjs/axios: ^1.0.1
- @nestjs/common: ^9.2.1
- @nestjs/core: ^9.0.0
- @nestjs/cqrs: ^9.0.1
- @nestjs/platform-express: ^9.0.0
- axios: ^1.2.2
- class-transformer: ^0.5.1
- class-validator: ^0.14.0
- reflect-metadata: ^0.1.13
- rxjs: ^7.2.0

---

## Mediflash

### Question

Si 5 devs rejoignent ton équipe demain et que ton application est en production, quelles sont les améliorations à apporter à l'environnement de Dev et pourquoi ?
Les classer par ordre de priorité

### Réponse

- Si 5 devs rejoignent mon équipe, la première problématique sera de faire en sorte que la collaboration entre nous soit la plus optimale, mettre en place un système de versioning sera donc je pense la priorité pour éviter la collision entre nos différents codes et faciliter le déploiement de nouvelles fonctionnalités.

- En grandissant l’équipe, garder le contrôle sur la qualité du code sera aussi un des challenge premier, ainsi en plus de tests unitaires il est primordiale de s’assurer que le code passé en production est « validé » et ainsi mettre en place un processus d’intégration continue sera ma seconde mesure.

- En grandissant l’application se doit aussi de continuer d’être performante, il faut ainsi s’assurer de la scalabilité de notre architecture et pour cela mettre en place un système de monitoring sera ma troisième mesure.

- Afin de rendre l’ensemble du code plus compréhensible pour l’ensemble des devs mais aussi de faciliter sa maintenance, mettre en place un système de documentation.

- Pour finir il me semble important de maintenir une certaine culture d’entreprise, favoriser les échanges entre les différents membres et mettre en place des sessions de peer review et de pair programming.
