// Create web server with express.js
// Create a router to handle the comments route
// Get comments from the comments.json file
// Send the comments back as a response
// Start the server on port 3000

const express = require('express');
const app = express();
const commentsRouter = express.Router();
const fs = require('fs');

commentsRouter.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading comments.json');
    } else {
      res.send(data);
    }
  });
});

app.use(commentsRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
