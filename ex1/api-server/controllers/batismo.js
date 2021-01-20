// Controlador para o modelo Batismo

var Batismo = require('../models/batismo')

// Devolve a lista de Batismos
module.exports.listar = () => {
    return Batismo
        .find({})
        .select('title date ref _id')
        .sort('-date')
        .exec()
}

module.exports.listarPorAno = year => {
    return Batismo
        .find({ano: year})
        .sort('-date')
        .exec()
}

module.exports.consultar = id => {
    return Batismo
        .findOne({_id: id})
        .exec()
}

module.exports.listarNomes = () => {
    return Batismo
        .find({}, {_id : 0, filho: 1})
        .sort('filho')
        .exec()
}

module.exports.listarProgenitores = () => {
    return Batismo
    .find({}, {_id : 0, filho: 1, pai: 1, mae: 1})
        .sort('filho')
        .exec()
}

module.exports.stats = () => {
    const aggregatorOpts = [{
        $group: {
            _id: "$ano",
            count: { $sum: 1 }
        }}]
    return Batismo.aggregate(aggregatorOpts).exec()
}