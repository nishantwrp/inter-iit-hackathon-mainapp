const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/inter-iit-hackathon-mainapp'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/inter-iit-hackathon-mainapp'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000); 