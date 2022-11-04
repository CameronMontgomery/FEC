require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const path = require("path");
const axios = require('axios')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/*', async (req, res) => {
  let apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc`;
  let endpointUrl = req.url.slice(4)
  let response = await axios.get(`${apiUrl}${endpointUrl}`, {
    headers: {
      "Authorization": process.env.AUTH_KEY
    }
  }).then((apiRes) => res.send(apiRes.data))
  .catch(err => console.log(err))
})

app.post('/api/*', async (req, res) => {
  let apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc`;
  let endpointUrl = req.url.slice(4)
  let response = await axios.post(`${apiUrl}${endpointUrl}`, req.body, {
    headers: {
      "Authorization": process.env.AUTH_KEY,
      "Content-Type": "application/json"
    }
  })
    .then((apiRes) => res.send(apiRes.data))
    .catch(err => console.log(err))
})

app.put('/api/*', async (req, res) => {
  let apiUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc`;
  let endpointUrl = req.url.slice(4)
  let response = await axios.put(`${apiUrl}${endpointUrl}`, undefined, {
    headers: {
      "Authorization": process.env.AUTH_KEY
    }
  })
    .then((apiRes) => res.sendStatus(apiRes.status))
    .catch(err => console.log(err))
})

app.listen(PORT);
console.log(`Server listening at ${PORT}`);
