const express = require('express')
const app = express()
const port = 3000/hola

app.get('/'(req, res) => {
  res.send('hola mundo,');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
