# Create Express React App

This is a project generator that allows to create your own web application based on Express.js and React. Every new project is created starting from a template using Webpack to create the client bundle that is served by Express.js on the backend.
The goal of this package is to have a quick start when configuring a new project using this stack. The output project has a basic and mainly used set of configurations.

## Getting Started

### Installing

To globally install the package:

```
npm install -g create-express-react-app
```

Now to create a new `my-project` app just run: 

```
create-express-react-app my-project
```

This will create a `my-project` folder in the current path that contains all the files of the basic structure of the app.  Inside the new created folder install the dependencies:

```
cd my-project
npm install
```

### Usage
The project template provides the following scripts to create production build and dev environment:

```
# Production build served by Express
npm run start

# Production build (no server running)
npm run build

# Dev build with webpack-dev-server serving the front-end
npm run dev

# Dev build with webpack-dev-server serving the front-end and live reloading on backend
npm run watch

# Dev build (no live reload and no server running)
npm run debug

# Run the server
npm run server
```

### What’s Included?
- **Babel**: configured with [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react) and [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) to transpile ES2015 code using [core-js@3](https://babeljs.io/docs/en/babel-preset-env#corejs) to handle polyfills.
- **Webpack**: project build is available for development mode in `webpack.dev.js` and for production mode in `webpack.prod.js`; options shared between them are defined in `webpack.common.js` config file. Such configurations allow to import:
    - js file: `import App from './src/App';`
    - css module: `import css from './App.css';`
    - base64 images: `import myImage from '../public/icon.png';`
- **Webpack-dev-server**: a development server to test the frontend is available with live reloading feature enabled. It implements a proxy for the API requests that are sent to the backend URL to the Express server.
- **Nodemon**: the backend code is live reloaded upon any changes with nodemon tool.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [https://github.com/crsandeep/simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)
* [https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309](https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309)
