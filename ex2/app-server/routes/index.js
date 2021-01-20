var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET Classes Page. */
router.get('/classes', function(req, res) {
  axios.post('http://clav-api.di.uminho.pt/v2/users/login', {"username": "daw2020@teste.uminho.pt", "password": "232"})
    .then(dados => {
        var token = dados.data.token
        console.log('Token: ' + token + '\n\n')

        axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
            .then(dados2 =>{
              res.render('classes', {lista: dados2.data});
            })
            .catch(e => {
                console.log('Erro: não consegui obter dados! ' + e)
            })
    })
    .catch(e => {
        console.log('Erro: não consegui obter dados! ' + e)
    })
});

/* GET Classe Page. */
router.get('/classes/:id', function(req, res) {
  axios.post('http://clav-api.di.uminho.pt/v2/users/login', {"username": "daw2020@teste.uminho.pt", "password": "232"})
    .then(dados => {
        var token = dados.data.token
        console.log('Token: ' + token + '\n\n')
        axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + req.params.id + '?token=' + token)
            .then(dados2 =>{
              res.render('classesSingle', {lista: dados2.data});
            })
            .catch(e => {
                console.log('Erro: não consegui obter dados! ' + e)
            })
    })
    .catch(e => {
        console.log('Erro: não consegui obter dados! ' + e)
    })
});

router.get('/termosdeindice', function(req, res) {
  axios.post('http://clav-api.di.uminho.pt/v2/users/login', {"username": "daw2020@teste.uminho.pt", "password": "232"})
    .then(dados => {
        var token = dados.data.token
        console.log('Token: ' + token + '\n\n')

        axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + token)
            .then(dados2 =>{
              res.render('termos', {lista: dados2.data});
            })
            .catch(e => {
                console.log('Erro: não consegui obter dados! ' + e)
            })
    })
    .catch(e => {
        console.log('Erro: não consegui obter dados! ' + e)
    })
});

module.exports = router;
