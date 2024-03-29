const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es requerido'
        });
    } else {
        res.json({
            usuario: body
        });
    }

});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id,
        texto: 'put Usuario'
    });
});

app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({
        id,
        texto: 'delete Usuario'
    });
});





app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});