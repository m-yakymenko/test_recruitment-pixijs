# Test task

### Creating a small animation

The job is done using libraries only: PIXI.js (https://www.pixijs.com),  ECMA Script 6 или 7,  WebPack (https://webpack.js.org).
Publish the assembly to GitHub as a repository with a README description of how to run it.
Find a simple animation (sequence) of any object, person or something with two states, and create a simple animation of moving from point A to point B.
The final version should be a simple animation of the object, with two mini animations of sequences and the movement of the object from one point to another.



### Installation

```sh
npm install
```

### Start Dev Server

```sh
npm start
```

### Build Prod Version

```sh
npm run build
```

### Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
