const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // Renderiza a página index quando acessa a rota principal
    res.render('index');
});

app.get('/preferencias', (req, res) => { 
    res.render('preferencias');
});

app.get('/feed', (req, res) => { 
    res.render('feed');
});

app.get('/test', (req, res) => {
    console.log('Servidor iniciado.');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});



