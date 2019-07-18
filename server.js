const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/dist/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path');

// require('./server/routes/movies.routes')(app);

// app.get('/:id', function(req, res) {

// })

app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./public/dist/public/index.html'));
});

app.listen(8000, function() {
  console.log('Listening on port 8000...');
});

// /api/v2/pokemon/{id or name}/
