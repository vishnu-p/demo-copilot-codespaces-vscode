// Create web server
// 1. Import express
// 2. Create express instance
// 3. Create a route for GET /comments
// 4. Create a route for POST /comments
// 5. Create a route for GET /comments/:id
// 6. Create a route for PUT /comments/:id
// 7. Create a route for DELETE /comments/:id
// 8. Listen on port 3000

// 1. Import express
const express = require('express');

// 2. Create express instance
const app = express();

// 3. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

// 4. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments');
});

// 5. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('GET /comments/:id');
});

// 6. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send('PUT /comments/:id');
});

// 7. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE /comments/:id');
});

// 8. Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});