const express = require('express');
const app = express();
const PORT = 3000;

app.get('/request', (req, res) => {
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = { id: 3, name: 'New User' };
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
