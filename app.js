const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, './views/home.html'));
});

app.use(express.static(path.join(__dirname, './public')));


app.listen(process.env.PORT || 3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});

