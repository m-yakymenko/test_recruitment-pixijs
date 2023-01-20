# Тестовое задание

### Создание небольшой  анимации

Задание выполняется только с использованием библиотек: PIXI.js (https://www.pixijs.com),  ECMA Script 6 или 7,  WebPack (https://webpack.js.org), gsab (http://greensock.com).
Сборку опубликовать в GitHub как репозиторий с описанием README как запустить.
Найти простую анимацию (сиквенцию) любого предмета, человека или чего либо другого с двумя состояниями, и создать с помощью gsab простую анимацию перемещения с точки А в точку Б, можно линейно или с любым Easing.
Пример сиквенции - https://ru.depositphotos.com/vector-images/2d.html
1. Анимация движения gsab пока отключена
2. Запускаем первое состояние объекта, анимация сиквенции не должна быть зациклена 
3. После окончания анимации сиквенции запускаем анимацию движения объекта с точки А в точку Б, время движения - 1 секунда
4. После окончания работы движения запускаем вторую анимацию сиквенции объекта уже в цикле.
В конечном варианте должна получиться простая анимация объекта, с двумя мини анимациями сиквенций и движения объекта с одной точки в другую.



# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.

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
