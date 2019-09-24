## How to Use the App

In your terminal run:

> **git clone git@github.com:andylushman/talkin-class.git**

navigate into the _talkin-class_ folder and run:

> **yarn install**

then run:

> **yarn start**

To interact with the app, open multiple browsers and navigate to localhost: 3000 in each one. From here you can type and send messages. If you check corresponding app channels in the other browsers, you will see the messages. Each channel is hardcoded with a few messages to start.

## Reflection

In this app I used the following technologies:

- React
- Node.js - Express
- Sockets.io
- Material - UI

At a high level, the frontend of the app sets up a connection with _sockets.io_ through the _server_. From there, the _server_ listens for _emit events_ from the _client_ and broadcast them when they are received. _Sockets.io_ receives the message and sends back the data/message to the _client_ where it is displayed in the browser.

This project was a lot of fun and it gave me an opportunity to learn a lot. One example is Material - UI. Until this project, I've never used Material - UI and I've come to like it in a short period of time. It seems to be very intuitive and makes for quick styling when developing. That being said, I still believe the app could be improved greatly if given more time.

Areas for improvement:

- UI - Classes and styling should be more consistent. At the moment there are inline styles and makeStyles from Material - UI I took this opportunity to learn about Material - UI but if given more time I probably would of included scss and assigned variables to style values. Also, I would taken more advantage of css files.
- User Accounts - This project could go much deeper with creating user accounts and authentication. Maybe use Google oauth for a quick JWT generation and sign-in.

I am sure there are plenty of other areas where this app can be improved but there are a couple that come to mind.
