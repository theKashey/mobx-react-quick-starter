# mobx-react-quick-starter

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[![webpack](https://img.shields.io/npm/v/webpack.svg?label=webpack&style=flat-square&maxAge=3600)](https://github.com/webpack/webpack)

build in webpack v4(processing)
mobx+react+react-routerv4+styled-components+flow 
 
Features:
 * hmr support
 * eslint code style-check
 * use flow to static type check 
 * styled-components and antd-mobile for css
 * devtools
 
## project structure

```
├── build //build dir
├── config 
│   ├── default.json
│   ├── webpack.base.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── flow-typed
│   ├── mobx-react.js
│   └── npm
├── main.js //entry file
├── server
│   └── index.js //hmr 
├── src
│   ├── api  //api
│   ├── app.js 
│   ├── assets 
│   ├── component
│   ├── router.js
│   ├── screen
│   ├── store
│   └── util
├── template.html
```

## run

`npm run dev` or `yarn dev` and enjoy it~

## build 

`npm run build` or `yarn build`

