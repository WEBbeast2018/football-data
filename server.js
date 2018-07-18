const path = require('path');
const express = require('express');
const app = express();

// json log middleware
app.use(function (req, res, next) {
  console.log(`request url: ${req.url}`);
  next()
});
// json parser middleware
app.use(express.json());
// static files middleware
app.use(express.static(path.join(__dirname, 'public')));

const clubsRouter = require('./api/clubs/clubs.route');
const roundsRouter = require('./api/rounds/rounds.route');

app.use('/api', clubsRouter);
app.use('/api', roundsRouter);


// index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// error handling
app.use((err, req, res, next) => {
  if(err) {
    res.sendFile(path.join(__dirname, 'public/error.html'));
  }
  next();
});

app.listen(3006,
  () => console.log('football data server listening on port 3006')
);
