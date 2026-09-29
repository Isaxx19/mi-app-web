const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hola desde el Pipeline CI/CD de Jenkins');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
