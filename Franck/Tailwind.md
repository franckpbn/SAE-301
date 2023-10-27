
<!-- Installez tailwindcssvia npm et créez votre tailwind.config.js fichier. -->
npm init -y
npm install -D tailwindcss
npx tailwindcss init

<!-- Configurez vos chemins de modèles
Ajoutez les chemins d'accès à tous vos fichiers modèles dans votre tailwind.config.jsfichier. -->
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

<!-- Ajoutez les directives Tailwind à votre CSS
Ajoutez les @tailwinddirectives pour chacune des couches de Tailwind à votre fichier CSS principal. -->
@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- Démarrez le processus de création de Tailwind CLI
Exécutez l'outil CLI pour analyser vos fichiers de modèle à la recherche de classes et créer votre CSS. -->
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

<!-- Commencez à utiliser Tailwind dans votre code HTML
Ajoutez votre fichier CSS compilé au <head>et commencez à utiliser les classes utilitaires de Tailwind pour styliser votre contenu. -->
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>