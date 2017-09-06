Chatty - APP
=====================

Built from a minimal and light dev environment for ReactJS. This a SPA chat app. 

### Usage

Clone the app and create your own git repo.

Install the dependencies and start the app server.

You will also need to clone this repository https://github.com/sidney-cardozo/Chatty-Server which contains the server with whom the app is going to communicate with. start both servers and open it on the browser using the link below.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.


### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
