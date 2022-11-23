# 5W5 - Projet web en équipe

## À propos de ce projet
5W5 est le sigle du cours dans lequel nous réalisons un projet de site web en équipe. Ce site web a pour but de réinventer le [site du département de technique d'intégration multimédia du collège de Maisonneuve](https://tim.cmaisonneuve.qc.ca "Site du TIM de Maisonneuve"). Le projet sera hébergé sur [SiteGround](https://timm175.sg-host.com).

Ce futur site intégrera une série de fonctionnalités que vous pouvez trouver [ici](https://docs.google.com/document/d/1D4bE8vse2LIgAGoIxamZ4GdOM0OoINQqfrwDZHfakTQ/edit "Liste des fonctionnalités à intégrer dans le site") et intégrera le design de notre [maquette](https://www.figma.com/file/HoeP24F8g6Mmb4m9WiWepB/web?node-id=0%3A1).

## Avancement
### Sprint 0
Lors de ce sprint, nous avons simplement conceptualisé notre projet et recherché des inspirations.

### Sprint 1
C'est durant ce sprint que nous avons concrétisé nos idées ainsi que débuté la programmation (principalement back-end) de celui-ci

### Sprint 2
La majorité des styles ont été réalisés lors de ce sprint. Bien qu'ils ne soient pas encore terminés, les pages sont toutes fonctionnelles et le site pourrait être utilisé. Il manque cependant beaucoup de peauffinement et d'animations pour qu'on sente qu'il s'agisse d'un vrai site web.

### Sprint 3 
Les styles ont été peaufinés lors de ce sprint, et la grande majorité des animations ont été intégrées. La barre de recherche et la randomisation des styles de couleurs et polices de la page d'accueil. 

## Technologies utilisées et dépendances
Notre site utilisera le concept de "Headless CMS", qui utilise un CMS, comme Wordpress dans notre cas, en tant que back end et utilise un autre framework en tant que front end. Nous utiliserons aussi node-sass afin de styliser nos pages.

### Wordpress
- [Advanced Custom Fields](https://www.advancedcustomfields.com) pour une meilleure saisie de contenu
- [Custom Post Types UI](https://en-ca.wordpress.org/plugins/custom-post-type-ui/) création de types d'articles personnalisés
- [Better REST Endpoints](https://wordpress.org/plugins/better-rest-endpoints/) meilleure gestion du WP REST API
- [Headlesss CMS](https://wordpress.org/plugins/headless-cms/) création de menus Wordpress récupérables facilement dans le REST API
- [ThreePress](https://wordpress.org/plugins/threepress/) intégration de Three.js dans Wordpress

### React
- [react-router-dom](https://v5.reactrouter.com) pour créer un système de pages
- [react-html-parser](https://www.npmjs.com/package/react-html-parser) pour convertir le HTML des pages de Wordpress à React
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber) pour rendre les modèles 3D dans react avec Three.js
- [Material UI](https://mui.com) afin d'implémenter rapidement des icones
- [node-sass](https://www.npmjs.com/package/node-sass) gestion des styles CSS

## Organisation du projet
Ce projet est organisé en suivant la méthodologie Agile Scrum
- [Carnet de produit](https://docs.google.com/spreadsheets/d/1k-Dq3zliGq4WWjGQ6MDp1Oyge2RrvncT0G1-n2u-RbQ/edit#gid=874600639)
- [Revue du sprint 1](https://docs.google.com/document/d/1U1Y33lPVrLmU_EBuATr6gfPWhQV_rYNera7v0aCgtmw/edit)
- [Revue du sprint 2](https://docs.google.com/spreadsheets/d/1k-Dq3zliGq4WWjGQ6MDp1Oyge2RrvncT0G1-n2u-RbQ/edit#gid=599930621)

## Membres de l'équipe TIM Hortons
- [Pierre-Olivier Clerson](https://github.com/poclerson) (programmation front end, programmation back end)
- [Sara Hébert](https://github.com/baaguette) (intégration et création de médias, programmation front end)
- [Ngoc Quynh Pham](https://github.com/nquynhp) (scrum master, création de médias, programmation front end)
- [Yeeun Kim](https://github.com/yexxun) (design, création de médias)
