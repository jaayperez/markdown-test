## Build a real-time markdown editor with [Vue](https://vuejs.org/)

This project contains the source code for a real-time markdown editor built with [Vue.js](https://vuejs.org/) and [Pusher](https://pusher.com/).


![ezgif com-video-to-gif 12](https://user-images.githubusercontent.com/19610753/43530532-b76fcd54-95a5-11e8-88d8-47551de6df3f.gif)

## Getting Started

## Prerequisites
1. You will need the following things properly installed on your computer.

* [Node.js](https://nodejs.org/) (with npm)
* [Vue CLI](https://cli.vuejs.org/)
* [Google Chrome](https://google.com/chrome/)

2. Create a Pusher application - Create a new application on your Pusher Dashboard to get your app credentials.

### Clone the repository
```bash
$ git clone https://github.com/jaayperez/markdown-test.git
```

### Change directory
```bash
$ cd markdown-test
```

### Install dependencies

```
npm install
```

## Create a `.env` file in the root of the new directory with the content below:

```ini
PUSHER_APP_ID=YOUR_APP_ID
PUSHER_APP_KEY=YOUR_APP_KEY
PUSHER_APP_SECRET=YOUR_APP_SECRET
PUSHER_APP_CLUSTER=YOUR_APP_CLUSTER
```

## Add Pusher Credential to HomeComponent

Open `./src/components/HomeComponent.vue` and update with the appropriate credentials as obtained from your Pusher dashboard `YOUR_APP_KEY` and `CLUSTER`:

```ini
    let pusher = new Pusher("YOUR_APP_KEY", {
      cluster: process.env.PUSHER_APP_CLUSTER,
      ...
    });
```


### Run the application
```bash
$ npm start
```

## Start the server

```bash
node server
```

* Visit your app at [http://localhost:8080](http://localhost:8080).

## Built With

* [Vue.js](https://vuejs.org/) - A progressive JavaScript framework for building applications

* [Pusher](https://pusher.com/) - A Node.js client to interact with the Pusher REST API
