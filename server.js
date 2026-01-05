const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Simple Node App on Amplify</title></head>
      <body>
        <h1>Hello from Node.js on AWS Amplify!</h1>
        <p>Deployed successfully. Check API at <a href="/api/hello">/api/hello</a></p>
      </body>
    </html>
  `);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

