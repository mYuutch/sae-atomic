# SAE WEB / MULTIMÉDIA
## Sujet : La bombe nucléaire
#### Groupe composée de Bouchez Enzo et Florian Thoraval
 Le site est disponible via le lien suivant [sae-atomic.vercel.app](https://www.sae-atomic.vercel.app)

 ## Technologies utilisées 

 Site codé avec NextJS, les animations ont été réalisées à l'aide de 3 librairies :
 - GSAP
 - Framer Motion
 - Locomotive Scroll

Locomotive Scroll a été utilisée pour achever un effet de smooth scrolling et de parrallax sur les élements.
Framer motion nous a été utile pour faire des animations d'apparition rapidement. Pour toutes les animations un peu plus élaborées ( Vidéo Séquencée, Avion ) nous avons utilisé GSAP

## Animations mises en avant sur le site
 - Smooth - scrolling
 - Parrallax (images, texte)
 - Séquence d'image synchronisée avec le scroll
 - Apparition des images ( changement de scale et d'opacité )
 - Pinning
 - Apparition de texte lettre par lettre
 - Animations lancées au scroll (avion, bombe)
 - Augmentation de scale au hover
 - Barre de progression qui se rempli au fur et à mesure de la visite du site

## Difficultés rencontrées
- Prise en main de locomotive :
  La prise en main de Locomotive a été relativement facile au début, mais nous avons rencontré de nompreux problèmes quand nous essayé d'utiliser des fonctions plus éloborées comme le pinning. De plus, Locomotive a quelques problèmes de compatibilités avec le rendering fait par Next.js ce qui est la source de warnings sur l'Hydration du site dans la console du navigateur, mais qui ne change rien à la fonctionnalité du site.
 - Séquence d'image liée au scroll :
   La séquence d'image liée au scroll  a tendance  à "clignoter" au premier passage, ce malgrès un effort pour preload les images et les stocker dans le cache du navigateur. 
  

