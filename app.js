const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/feed', (req, res) => {
    res.render('feed_temp');
});
  
// Roteamento para cada página
app.get('/tecnologia', (req, res) => {
  res.render('tecnologia');
});

app.get('/economia', (req, res) => {
  res.render('economia');
});

app.get('/educacao', (req, res) => { 
    res.render('educacao');
  });

app.get('/politica', (req, res) => {
    res.render('politica');
  });

app.get('/startup', (req, res) => {
    res.render('startup');
  });

app.get('/musica', (req, res) => {
    res.render('musica');
  });

app.get('/marketing', (req, res) => {
    res.render('marketing');
  });

app.get('/esporte', (req, res) => {
    res.render('esporte');
  });

app.get('/business', (req, res) => {
    res.render('business');
  });

  app.get('/cultura', (req, res) => {
    res.render('cultura');
  });

  app.get('/test', (req, res) => {
    console.log('Servidor iniciado.');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});

