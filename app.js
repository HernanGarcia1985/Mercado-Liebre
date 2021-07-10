const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/login.html'));
});

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));


app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});

