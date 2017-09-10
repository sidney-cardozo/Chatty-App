Chatty - APP
=====================

This a chat SPA. Built from a minimal and light dev environment for ReactJS.
Overview Look
!["Overview of the app"](https://github.com/sidney-cardozo/PreReq-Simple/blob/master/screenshots/HelloReact.png)

Some of the current features are :

Total Users connected to the server
!["Current users"](https://github.com/sidney-cardozo/PreReq-Simple/blob/master/screenshots/Selection_002.png)

Broadcasts messages when users change their name
!["Broadcast messages"](https://github.com/sidney-cardozo/PreReq-Simple/blob/master/screenshots/Selection_003.png)



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
