# LANDKIT #

Landkit Theme by Good Themes.

### Documentation ###

Development documentation is available at `src/docs/index.html` (or `dist/docs/index.html` once you've compiled), or visit http://landkit.goodthemes.co/docs/index.html.

### Getting Started ###

The steps to compile and get started with development are covered in detail in documentation mentioned above, but the summary is:

- npm install -g gulp-cli
- yarn install (Do not use npm install or you won't be able to deploy)
- gulp

### Design Files ###

We provide an "unofficial" Landkit Figma file for you to play with. Learn more about it at http://landkit.goodthemes.co/docs/figma.html and view/download it here: https://www.figma.com/file/dRHDLzwl3ENBYaLlz88cjb/LandKit-1.2.0-Distributed.

### Support ###

Good Themes is happy to provide support for issues. Shoot us an email at support@goodthemes.co and we'll get you squared away.

Le site est hébergé sur Github.com

### Known issues ###

L'un des problèmes connu important est la librairie gulp-gh-pages qui importe comme dépendence une version de gift qui n'est pas bonne et qui entraine une erreur lors de la commande `gulp deploy`. Pour résoudre le problème il faut spécifier une version de gift dans le package.json en tant que resolution et utiliser `yarn install` à la place de `npm install`.