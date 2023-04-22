const express = require('express')
const app = express()
const PORT = 2000 //anything but 3000

function homepage(req, res) {
  res.send('Hello Express!')
}
function form(req, res) {
  res.send('loaded Form!')
}

function footer(req, res) {
  res.send('loaded Footer!')
}

function books(req, res) {
  res.send('loaded books!')
}

app.get('/', homepage)
app.get('/books', books) //http://localhost:2000/books
app.get('/form', form) //http://localhost:2000/from
app.get('/footer', footer) //http://localhost:2000/footer

app.listen(PORT, (req, res) => {
  console.log(`Example app listening on port ${PORT}`)
})
