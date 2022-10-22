# Olaren-dev-homepage

Le code source de ma page personnelle (qui sera éventuellement disponible au [https://olaren.dev](https://olaren.dev))

## Développement local

### Outils nécessaires :

- Node JS
- Yarn
- Docker (optionnel)

1. Installer les dépendances

   ```bash
   yarn install
   ```

2. Démarrer le serveur de développement

   ```bash
   yarn dev
   ```

3. (Optionnel) démarrer un server de courriel local

   ```bash
   docker run -d -p 2525:25 -p 2000:80 rnwood/smtp4dev
   ```

# Technologies utilisées

- Nuxt 3
- Nuxt content
- Vue 3
- Typescript
- Tailwind css
- Heroicons
- DaisyUi
- Color Mode
- Nodemailer
