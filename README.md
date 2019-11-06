# cura

This is a project generator that allows to create your own web application based on Express.js and React. Every new project is created starting from a template using Webpack to create the client bundle that is served by Express.js on the backend.
The goal of this package is to have a quick start when configuring a new project using this stack. Many other tools are doing that but usually they provide a very huge amount of configuration that in most of the cases are not needed. This project instead provide a basic and mainly used set of configurations.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

To install globally cura:

```
npm install -g cura
```

Now to create a new `my-project` app just run: 

```
cura my-project
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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [https://github.com/crsandeep/simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)
* [https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309](https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309)
