npm# SASS

HTML, CSS et JavaScript ont eu une influence décisive sur l’évolution du Web. Nous construisons des sites web toujours plus imposants et plus complexes. Mais nous sommes arrivés à un stade où nous devons trouver un moyen de rendre nos créations plus simples à gérer.

L’objectif ultime de SASS est de combler les lacunes de CSS. Même s’il est très simple d’apprentissage, le CSS peut rapidement devenir confus et difficile à maintenir dans les projets à grande échelle. Sass intervient ici comme un métalangage, pour améliorer la syntaxe CSS afin d’offrir des fonctionnalités supplémentaires et des outils pratiques. Dans le même temps, SASS entend rester proche du langage CSS.

Sass est un préprocesseur CSS (il en existe d'autres Less et Stylus...). 

<div style="page-break-after: always; visibility: hidden"> 
\pagebreak 
</div>

## A _Sass: Mise en place

SASS s’occupe de transformer (compiler) en CSS valide.
Il existe deux syntaxes .sass et .scss, nous utiliserons .scss car plus proche du CSS.

https://www.sassmeister.com (playground)

### 1. Installer
Il existe différentes méthodes pour installer sass cf. https://sass-lang.com/install

#### 1.1 npm

Npm est un gestionnaire de paquets (une interface de ligne de commande qui est intégrée dans le framework du serveur node.js). Il installe des packages et vous permet d’exécuter des scripts et de gérer les dépendances (librairies). 

1. Installez NodeJS sur votre ordinateur

cf. [NodeJS](https://nodejs.org/en/)


Une fois l’installation terminée, lancer l’invite de commandes Windows ou terminal Mac
```shell
    node -v
    npm -v
```

2. Initialisez un fichier npm package.json

package.json est un fichier qui stocke les informations sur votre projet : nom, numéro de version, auteur, info de licence, dépendances externes et vos scripts. 
```shell
    npm init -y
```
```json
{
    "name": "testnpm",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
    "sass": "^1.32.8"
    }
}

```

3. Installez Sass

```shell 
    npm install sass -D
    ou
    npm install sass --save-dev
```

```json
{
    "name": "testnpm",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
    "sass": "^1.32.8"
    }
}

```
<div style="page-break-after: always; visibility: hidden"> 
\pagebreak 
</div>

4. Modification du script

```json
{
    "name": "testnpm",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "sass:w": "sass --watch scss/main.scss:css/style.css"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
    "sass": "^1.32.8"
    }
}
```

5. Lancer le script

```shell
    npm run sass:w
```

<div style="page-break-after: always;"></div>

#### 1.2 Extension **'Live Sass Compiler'** sur VisualCode
Nous allons utiliser l'extension **'Live Sass Compiler'** sur VisualCode [lien](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass).

Aller dans VSCode User Settings (roue dentée en pas à gauche)
--> Paramètres --> Extensions --> Selectionner "Live Sass Compiler Config --> Live Sass Compileajouter

![doc](https://i.stack.imgur.com/Gho7y.png)

Ajouter les lignes suivantes :
```json
    "liveSassCompile.settings.formats": [{
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "~/../css"
        }]
```


### 2. Structurer votre dossier ‘Sass’ ainsi :
- dossier ‘Sass’
    - dossier’CSS’
        - fichier ‘Style.css’
    - dossier ‘SCSS’
        - fichier ‘Style.scss’

### 3. Mise en pratique
Dans le fichier ’Style.scss’ (dossier SCSS) écrire un bloc de déclaration :
```css
	body {
		background: black;
		color: white;
	}
```

Activer l'extension en cliquant en sur le bouton '__Watch my Sass__' dans barre de statuts en bas à doite

![monimage](https://github.com/ritwickdey/vscode-live-sass-compiler/raw/master/images/Screenshot/statusbar.jpg)

Enregistrer votre fichier .sass, VSCode crée automatiquement un dossier CSS contenant le fichier Style.css compilé.

<div style="page-break-after: always; visibility: hidden"> 
\pagebreak 
</div>

## B _Sass: utilisation

### 1. _Règle d'Imbrication / nesting  

#### 1.1 _Hiérarchie visuelle dans votre code

 Sass vous permet d’imbriquer les éléments pour définir une **hiérarchie**. 
 Le **nesting** est le fait d’imbriquer les sélecteurs l’un dans l’autre en créant une hiérarchie, exactement comme en HTML !

 Mais attention à l'utilisation abusive de l'imbrication... n'oubliez pas que les bonnes pratiques (cf. BEM...). Les sélecteurs CSS ne doivent essentiellement ne cibler que des classes et les sélecteurs CSS composés sont à éviter, car ce sont des sélecteurs trop spécifiques.


```scss
    header[role="banner"] {
        margin: 2em 0 3em 0;
        border-bottom: 4px solid #333;

        .logo {
            float: left;
            margin: 0 2em 0 0;

            img {
            display: block;
            opacity: .95; 
            }
        }

        h1 {
            padding: 1.5em 0;
            font-size: 5rem;
            line-height: 1;
            font-family: Jubilat, Georgia, serif;
            font-weight: bold;
        }
    }
    ---
.scss
```    

```css
    header[role="banner"] {
        margin: 2em 0 3em 0;
        border-bottom: 4px solid #333;
    }

    header[role="banner"] .logo {
        float: left;
        margin: 0 2em 0 0;
    }

    header[role="banner"] .logo img {
        display: block;
        opacity: .95;
    }

    header[role="banner"] h1 {
        padding: 1.5em 0;
        font-size: 5rem;  
        line-height: 1;  
        font-family: Jubilat, Georgia, serif;  
        font-weight: bold;
    }
    ---
.css
```


#### 1.2 _Propriétés composites

Sass permet aussi l'Imbrication des propriétés composites.
```scss
    .menu {
        font: {
            familly: arial, sans-serif;
            size: 3rem;
            weight: bold
        }
    }
---
.scss
```


```css
    .menu {
        font-familly: arial, sans-serif;
        font-size: 3rem;
        font-weight: bold
    }
---
.css
```

#### 1.3 _Référencer les Sélecteurs Parents avec ``&``
Au sein des imbrications, nous pouvons également référencer le sélecteur parent en utilisant l'esperluette __``&``__ comme caractère de remplacement.
```scss
    .main-nav {
        color: green;
        &:hover {
            color: blue;
        }
        &--alert {
            color: red;
        }
        &.isOpen {
        color: blue;
        }
    }
---
.scss
```    
```css
    .main-nav {
        color: green;
    }
    .main-nav:hover {
        color: blue;
    }
    .main-nav--alert {
        color: red;
    }
    .main-nav.isOpen {
        color: blue;
    }
---
.css
```

##### Remarque : BEM et SASS
```scss

    .block{
        background-color: #15DEA5;
        &__element {
            color: #fff;
                &--modifier {
                    background-color: #001534;
            }
        }
    }
---
.scss
```
```css
    .block {
        background-color: #15DEA5;
    }

    .block__element {
        color: #fff;
    }

    .block__element--modifier {
        background-color: #001534;
    }
---
.css
```
Exemple

```css
    .btn {
        display: inline-flex;
        background: #15DEA5;
        padding: 1em;
        &--disabled {
            background: grey;
        }

        &--outline {
            background: transparent;
            border: 2px solid #15DEA5;
            &.btn--disabled{
                border: 2px solid grey;
            }
        }
    }
---
.scss    
```
```css
    .btn {
        display: inline-block;
        margin: 0 auto;
        background: #15DEA5;
        padding: 1rem;
    }

    .btn--disabled {
        background: grey;
    }

    .btn--outline {
        background: transparent;
        border: 2px solid #15DEA5;
    }

    .btn--outline.btn--disabled {
        border: 2px solid grey;
    }
---
.css
```

### 2 _Sass: Commentaires

Sass prend en charge les commentaires sur une ou plusieurs lignes de la manière suivante :

Commentaire sur une seule ligne __//__

        // Ceci est un commentaire sur une seule ligne.
        // Ces commentaires seront supprimés du fichier .CSS !

Commentaire important sur plusieurs lignes  __/* */__

        /* Ceci est un commentaire sur plusieurs lignes 
        qui apparaitra dans le fichier .CSS final.*/


### 3 _Sass: Variables

Les **variables** stockent des valeurs que vous pouvez réutiliser dans tout votre code.
Les variables se définissent comme des règles CSS classiques en utilisant le symbole __$__.
```scss
    $color-main: #333;
    $color-light: #999;
    $color-accent: #ea4c89;

    $font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;
    $font-serif: Georgia, serif;

    body {  
        padding: 0 8%;  
        font-family: $font-sans;  
        font-size: 100%;  
        color: $color-main;  
        background: #fff url(../img/bg.jpg) repeat-x -80% 0;
    }
---
.scss
```
(+) Valeur par défaut des variables : `!default`
(+) Portée des variables dans un fichier Sass :
* Globale: Les variables déclarées en dehors des accolades ou portant le drapeau `!global`. 
Les variables globales sont disponibles n’importe où après leur déclaration, même dans une autre feuille de style.

    `$green:#0F0 !global; // Variable globale `

* Les variables déclarées dans des blocs sont généralement locales et ne sont accessibles que dans le bloc où elles ont été déclarées.


(+) Les variables dans sass peuvent être des nombres, des chaines de caractères, des booléens, des couleurs, des listes de valeurs séparées par des virgules ou des espaces, des `maps  (key1: value1, key2: value2)`. 
Ces variables peuvent être concaténées.

(+) utiliser la fonction ``darken`` ou ``lighten`` de Sass, pour générer différentes nuances de couleurs.

    .secondary {  background: darken($color-accent, 30%);}


##### Cas des Variables CSS et interpolation ``#{}``
 
L'interpolation (interpolation de variable ou substitution de variable): insérer des valeurs à l'intérieur d'autres valeurs.

```scss
    $accent-color: #fbbc04;

    :root {
        --accent-color-right: #{$accent-color};
    }
---
.scss
```
```css
    :root {
        --accent-color-right: #fbbc04;
    }
---
.css    
```

### 4 _Sass: Mixins

#### 4.1 _Mixins simples
Les **mixins** vous permettent de définir , de stocker et de réutiliser des blocs de style entiers (DRY - Ne vous répétez pas).
Les **mixins** sont très similaires aux variables, mais au lieu de ne stocker que des valeurs, ils stockent des blocs de code entiers.
On utilise le mot clé `@mixin` pour déclarer une mixin.
On utilise le mot clé `@include` pour placer une instance du mixin dans son code.
Lorsque Sass compile les instances d’une mixin, il remplace celle-ci par les règles qu’il contient.
```scss
    @mixin mixin-name {
        css-property: value;
    }

    ... {
      @include mixin-name
    }
```    

Définir avec `@mixin` et utiliser avec `@include`

```scss   
    $color-primary: #15DEA5;

    @mixin border {
        border: 2px solid $color-primary;
    }

    .btn {
        padding: 1.5rem;
        background: $color-primary;
        cursor: pointer;
        border-radius: 100rem;
        font-size: 1.5rem;
        color: #fff;
        &--outline {
            background: transparent;
            @include border;
            color: $color-primary;
        }
    }
---
.scss
```
```css
    .btn {
        padding: 1.5rem;
        background: #15DEA5;
        cursor: pointer;
        border-radius: 100rem;
        font-size: 1.5rem;
        color: #fff;
    }

    .btn--outline {
        background: transparent;
        border: 2px solid #15DEA5;
        color: #15DEA5;
    }
---
.css
```

#### 4.2 _Mixins et Passage d'arguments

Pour rendre les mixins plus adaptables et réutilisables, vous pouvez inclure des arguments lorsque vous les déclarez.
Les arguments peuvent changer l’effet du code compilé, par exemple définir des couleurs ou tailles customisées. 
```scss
    @mixin ombre($x, $y, $flou, $couleur) {
        -webkit-box-shadow: $x, $y, $flou, $couleur
        -moz-box-shadow: $x, $y, $flou, $couleur;
        -ms-box-shadow: $x, $y, $flou, $couleur;
        -o-box-shadow: $x, $y, $flou, $couleur;
        box-shadow: $x, $y, $flou, $couleur;
    }

    .module {
        padding: 2em;
        @include ombre(0, 2px, 5px, rgba(0,0,0,0.5)); 
    }
---
.scss
```
Il est possible de donner une valeur par défaut.
```scss
    @mixin heading-shadow($colour: $colour-primary){
         text-shadow: .55rem .55rem $colour;
    }

    .heading{
        &__header {
            @include heading-shadow;
        }
    }
```

```scss
    $heading-shadow-size: 0.55rem;
    @mixin heading-shadow($colour: $colour-primary,
                          $shadow-size: $heading-shadow-size){
        text-shadow: $shadow-size solid $colour;
    }
```
(+) Créer un Bibliothèque de Mixins avec `@use et @forward` 

(!) une mixin produit de grandes quantités de codes répétitifs - voir héritage

### 5 _Sass: Héritage  

#### 5.1 _Les extensions Sass : @extend
Parfois une classe CSS possède les mêmes styles qu'une autre classe mais avec quelques règles en plus.
Nous allons pouvoir ainsi définir un ensemble de propriétés CSS liée à un sélecteur puis utiliser `@extend` pour partager cet ensemble de propriétés avec d’autres sélecteurs.
```scss

    .typography {
        font-size: 2rem;
        font-weight: 100;
    }

    h1 {
        @extend .typography;
    }
    textarea {
        @extend .typography
    }
---
.scss
```
```css
    .typography, h1, textarea {
        font-size: 2rem;
        font-weight: 100;
    }
---
.css
```
```scss
    .button {
        padding: 2em;
        font-size: 1.2em;
        font:weight: normal;
        text-align: center;
        color: white;

        &--succes {
            @extend .button;
            background: $color-positive;
        }
        &--alert {
            @extend .button;
            background: $color-alert;
        }
    }
---
.scss    
```
```css
    .button, .button--alert, .button--succes {
        padding: 2em;
        font-size: 1.2em;
        font-weight: normal;
        text-align: center;
        color: white;
    }
    .button--succes {
        background: #4afb04;
    }
    .button--alert {
        background: #fb2904;
    }
---
.css
```

(!) `@mixin` duplique un ensemble de règles alors que `@extend` duplique le sélecteur.


#### 5.2 _Placeholders 
C'est un selecteur qui débute par `%seclecteur` et qui ne sera pas compilé s'il n'est pas utilisé par la directive `@extend`.
On va pouvoir utiliser ce faux sélecteur plutôt qu’une sélecteur de classe, afin de faire en sorte qu’il ne soit pas inclue dans la feuille de style finale.


```scss
    %typography {
        color: $colour-primary;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }
    h1 {
        @extend %typography;
    }
    textarea {
        @extend %typography;
    }
    button {
        @extend %typography;
    }
    input {
        @extend %typography;
    }
---
.scss
```
```css
    input, button, textarea, h1 {
        color: #4afb04;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.7;
    }
---
.css
```

#### Mixins vs extensions

Sur le principe, les mixins et les extensions sont très proches dans leur fonctionnement. 
Mis à part les paramétres/arguments, la différence principale entre les mixins et les extensions :
* avec les mixins vous obtenez des **règles dupliquées**, 
* alors qu’avec les extensions, vous obtenez des **sélecteurs dupliqués**, ce qui modifie la structure de votre code.

**(!) Pourtant, pour conserver l'architecture de votre css, n'utilisez pas d'extensions.**



### 6 _Sass: Fonctions Prédéfinies ou non

Il existe différentes fonctions dans sass 
[Lien doc Sass]( https://sass-lang.com/documentation/modules/color#darken)

```scss

    lighten($color, $amount) : éclaircie la couleur.

    darken($color, $amount) : assombrie la couleur.
---
.scss
```

Mais vous pouvez aussi créer vos propres fonctions

```scss
    @function toRem($value) {
        $remValue: calc($value / 16) + rem; 
        @return $remValue;
    }

    div {
        width: toRem(400); //400px
        height: toRem(400); //400px
    }
---
scss
```
```css
    div {
        width: 25rem;
        height: 25rem;
    }
---
css
```

#### Améliorer notre mixin
```scss
@mixin heading-shadow($colour:$colour-primary, $size: $heading-shadow-size){
    text-shadow: $size $size darken($colour, 10%);
}
---
.scss
```

### 7 _Sass : Boucles, Conditions ...


#### 7.1 _Les listes

Une liste est une liste de valeurs que vous pouvez regrouper dans une seule variable.
Pour créer une liste, il vous suffit de définir une variable et de la remplir avec des valeurs. La syntaxe pour les écrire est extrêmement flexible. Vous pouvez les séparer par des espaces ou utiliser des virgules, avec ou sans parenthèse :

```scss
    $syntax-01: 1em 2em 3em 4em;
    $syntax-02: 1em, 2em, 3em, 4em;
    $syntax-03: (1em 2em 3em 4em);
    $syntax-04: (1em, 2em, 3em, 4em);
---
.scss    
```
Ce n’est pas parce que vous avez décidé de stocker un groupe de valeurs dans une liste que vous devez forcément toutes les utiliser dans la même instance. 

Pour accéder aux valeurs individuelles d’une liste, utilisez la fonction  ```nth()```  suivie du nom de la liste et l’index de l’élément au sein de la liste.

```scss
    $font-size: 7rem 5rem 4rem 2rem;
    .header{
        font-size: nth($font-size, 4);
    }
---
.scss
```
```css
    .header{
        font-size: 2rem;
    }
---
.css 
```
#### 7.2 _Les maps

Les ```maps``` sont très semblables aux listes, sauf qu’elles assignent à chaque valeur un nom sous forme d’une paire clé/valeur

```scss
    $font-size: (logo:7rem, heading:5rem, project-heading:4rem, label:2rem);

    .header{
        font-size: map-get($font-size, label);  
    }   
---
.scss
```
```css
    .header{
        font-size: 2rem;
    }
---
.css 
```

#### 7.3 _Les boucles

Les boucles automatisent les tâches répétitives :
On définit une boucle à l’aide du mot clé  ```@each```  , suivi de la  ```$key```  , la   ``$value``  , et la  ``$map``  associées.


```scss
    $colours: (
        mint: #15DEA5,
        navy: #001534,
        seafoam: #D6FFF5,
        white: #fff,
        rust: #DB464B
    );

    @each $colour, $hex in $colours {
        .btn--#{$colour} {
            background-color: $hex;
        }
    }
---
.scss
```
```css
    .btn--mint {
        background-color: #15DEA5;
    }

    .btn--navy {
        background-color: #001534;
    }

    .btn--seafoam {
        background-color: #D6FFF5;
    }

    .btn--white {
        background-color: #fff;
    }

    .btn--rust {
        background-color: #DB464B;
    }
---
.css
```


#### 7.4 _Les structures conditionnelles 
Instructions  ```@if```  /  ```@else```

```scss
    $background: #fff;
    $theme:'light';

    @if ($theme == 'dark') {
        $background: #333;
    } @else {
        $background: #ebebeb;
        }
    .my-div {
        background: $background;
    }
---
.scss
```


#### 7.5_ Les MediaQueries
##### _Définir les points de rupture 
Vous pouvez **imbriquer** des media queries à l'intérieur de la déclaration d'origine et celles-ci éclateront dans des déclarations séparées lorsque votre feuille de styles sera compilée.


```scss
    .proj-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        @media (min-width: 60em) {
            grid-template-columns: 1fr;
        }
    }
---
.scss
```
```css
    .proj-grid {
        display: grid;
        grid-template-columns: 1fr;
    }
    @media (min-width: 60em) {
        .proj-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

---
.css
```

##### _Définir les points de rupture avec des variables SASS (map) et directive ``@content``

Lorsque vous utilisez la directive ``@content``, vous pouvez ajouter une paire d’accolades aux instances de la mixin pour y mettre votre contenu. Quand Sass compile les instances de la mixin, il remplace ``@content`` par le code que vous aurez placé à l’intérieur de l’instance de la ``mixin``.


```scss
    $breakpoints: (
        S: 45rem,
        M: 60rem
    );

    @mixin mediaQ($taille) {
        @media screen and (min-width: map-get($breakpoints, $taille)){
            @content;
        }
    }

    .proj-grid {
        display: grid;
        grid-template-columns: 1fr;
        @include mediaQ('S'){
            grid-template-columns: repeat(4, 1fr);
        }
        @include mediaQ('M'){
            grid-template-columns: repeat(6, 1fr);
        }
    }
---
.scss
```
```css
    .proj-grid {
        display: grid;
        grid-template-columns: 1fr;
    }
    @media screen and (min-width: 45rem) {
        .proj-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media screen and (min-width: 60rem) {
        .proj-grid {
            grid-template-columns: repeat(6, 1fr);
        }
    }
---
.css
```

### 8 _Sass : Pattern 7-1 / Système 7-1

#### 8.1 Partial

Lorsque vous séparez votre code, les fichiers individuels - partiels- font tous partie d’une codebase globale. Pour indiquer à Sass qu’un fichier est un partiel, vous devez lui ajouter le préfixe underscore (_).

#### 8.2 @use et @forward

La règle @forward charge une feuille de style Sass et rend ses mixins, fonctions et variables disponibles lorsque votre feuille de style est chargée avec la règle @use . Il permet d'organiser les bibliothèques Sass sur de nombreux fichiers, tout en permettant à leurs utilisateurs de charger un seul fichier de point d'entrée.

#### 8.3 Système 7-1

Pour ordonner tous vos nouveaux fichiers, vous allez utiliser ce qui s’appelle le système de fichiers 7-1. 
Les sept dossiers thématiques, qui sont regroupés dans le “1” : un fichier .scss unique se compilant sous forme de feuilles de style CSS pour votre site.

##### Base/
Les fondations de votre site, reset...

##### Utils/
Les variables, fonctions, mixins...

##### Layout/
Les blocs BEM : header, footer...

##### Components/ 
Les blocs BEM qui sont plus indépendants, comme les boutons.

Alors que les layouts peuvent utiliser d’autres composants pour générer leurs contenus, les composants, eux, sont plus élémentaires. Par exemple, un formulaire doit être considéré comme un layout : la mise en page est une fonction vitale du bloc et il utilise d’autres blocs pour fonctionner,  comme des boutons. En revanche, le bouton lui-même est un composant car il n’a besoin d’aucun autre composant pour remplir sa fonction.

##### Pages/ 
contient les blocs de code qui ne s’appliquent qu’à une seule page et ne seront pas réutilisées ailleurs.

##### Themes/ 
Template. 

##### Vendors/ 
Les feuilles de style externes comme des frameworks (Bootstrap, jQuery UI).
