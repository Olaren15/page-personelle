<template>
  <h1>Projets</h1>
  <h2>Bras robotisé virtuel</h2>
  <p>
    Ce projet est mon projet final de programme réalisé à ma dernière session de CÉGEP avec un coéquipier.
    Il s'agit d'une simulation en <b>Réalité Virtuelle</b> (VR) d'un bras robotisé utilisé dans les usines.
  </p>
  <p>
    Le but de ce projet était en deux parties:
  </p>
  <ul>
    <li>
      Explorer les possibilités de la VR avec l'optique de l'intégrer au cours de jeux vidéo dans les prochaines
      années.
    </li>
    <li>
      Faire une simulation qui permet aux nouveaux étiduants en Génie Industriel de se familiariser avec les mouvements
      du robot dans un environment sans danger
    </li>
  </ul>

  <h3>Démonstration vidéo:</h3>
  <iframe width="100%" height="563px" src="https://www.youtube.com/embed/l2ihUETyzEw" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>

  <p> La simulation comprends plusieurs fonctionnalités: </p>
  <ul>
    <li> Mouvement en mode téléportation, continue ou hibride</li>
    <li> Interactions entre les objets et les mains du joueur</li>
    <li> Déplacement du bras robotisé avec des "Inverse kinematics"</li>
    <li> Enregistrer / Jouer des séquence de déplacements</li>
    <li> Outil de succion pour aggripper les objets</li>
    <li> Outil de flame avec un système de particules</li>
    <li> Un panneau de contrôle pour gérer le bras robotisé</li>
  </ul>

  <h2>"Bot" Discord personnalisable</h2>
  <p>
    Ce projet est un bot servant à afficher des gifs aléatoires dépendament de la commande. l'utilisateur peut choisir
    si la commandes est destiné à un utilisateur en le mentionnant. Ce bot utilise une base de données pour garder en
    mémoire les commandes et les images qui y sont reliés. Il est donc possible de dynamiquement modifier les
    commandes.</p>
  <img src="@/assets/images/yuri-hug.png" alt="Une capture d'écran du bot"/>
  <p>
    Le projet était initialement écrit en Rust, mais j'ai décidé de tout refaire l'architecture du bot, le réécrire en
    Javascript et de lui faire une interface web pour la modification des commandes (Pas terminé)
  </p>

  <h2>Clone Minecraft en C++ et Vulkan</h2>
  <p>
    Ce projet est une tentative de recréer un jeu ressemblant à Minecraft, mais en commençant de rien (ou presque). J'ai
    donc fait un mini moteur de jeu avec une pipeline de rendu programmée avec l'APi graphique Vulkan.
  </p>
  <img src="@/assets/images/cobblestone.png" alt="Une capture d'écran du clone Minecraft">
  <p>
    J'ai abandonné le
    projet depuis, mais c'est quelque chose de fonctionnel et qui a demandé beaucoup de temps et d'apprentissages.
  </p>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
li {
  padding-bottom: 1em;
}

img {
  height: auto;
  max-width: 100%;
}

</style>