const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = 8080;

const allowedDomains = ['http://localhost:3000'];
// allow certain domains to make requests
app.use(
  cors({
    origin: allowedDomains,
    credentials: true
  })
);
// handler js bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World! This is the direct-back-end');
})

app.post('/cast', (req, res) => {
  res.send('Success');
});

app.listen(port, () => {
  console.log(`We are taking requests on port ${port}`);
})
