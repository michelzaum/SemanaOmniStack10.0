const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://username:password@cluster0-e6zxv.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

//EXPRESS JSON DEVE VIR ANTES DA CHAMADA DAS ROTAS.
app.use(express.json());
app.use(routes);

app.listen(3333);