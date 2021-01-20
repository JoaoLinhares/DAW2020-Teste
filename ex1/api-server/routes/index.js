var express = require('express');
var router = express.Router();
const Batismo = require('../controllers/Batismo')

// Listar todas as Batismos
router.get('/api/batismos', function(req, res) {
  if(req.query.ano){
    Batismo.listarPorAno(req.query.ano)
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
  }
  else{
  Batismo.listar()
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
  }
});

// Consultar stats
router.get('/api/batismos/stats', function(req, res) {
  Batismo.stats()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

// Consultar progenitores
router.get('/api/batismos/progenitores', function(req, res) {
  Batismo.listarProgenitores()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

// Consultar batisados
router.get('/api/batismos/batisado', function(req, res) {
  Batismo.listarNomes()
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

// Consultar uma Batismo
router.get('/api/batismos/:id', function(req, res) {
  Batismo.consultar(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(e => res.status(500).jsonp({error: e}))
});

module.exports = router;
