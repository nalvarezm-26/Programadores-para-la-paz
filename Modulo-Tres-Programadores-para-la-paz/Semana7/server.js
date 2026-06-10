const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
    res.json(reportes);
});

app.post('/reportes', (req, res) => {
    const consts = {
        id: reportes.length + 1,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion
    };
    
    reportes.push(consts);
    
    res.json({
        mensaje: "Reporte registrado",
        reporte: consts
    });
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});