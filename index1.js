const express = require('express')
const app = express()
const port = 3000/suma

app.get('/', (req, res) => {
  res.send('a = 6');

  var a = 1
  for(var i = 1; i <= 6; i++) {
   console.log(a + "x" + i + "=" + a * i)}

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
