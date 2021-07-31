// server.js

      const express = require('express');
      const bodyParser = require('body-parser');
      const cors = require('cors');
      const Pusher = require('pusher');
      require('dotenv').config();

      const app = express();

      app.use(cors());
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());

      const pusher = new Pusher({
          appId: process.env.PUSHER_APP_ID,
          key: process.env.PUSHER_APP_KEY,
          secret: process.env.PUSHER_APP_SECRET,
          cluster: process.env.PUSHER_APP_CLUSTER,
          encrypted: true
      });

       app.post('/pusher/auth', function(req, res) {
        var socketId = req.body.socket_id;
        var channel = req.body.channel_name;
        var auth = pusher.authenticate(socketId, channel);
        res.send(auth);
      });

      var port = process.env.PORT || 3000;
      app.listen(port);
      console.log("Listening on 3000")
