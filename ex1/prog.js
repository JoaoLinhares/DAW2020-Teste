var json = require('../ex1/batismos.json')

var data = []

json.forEach(element => {
    element._id = element.ref.replaceAll('/', '_')
    aux = element.title.split(": ")
    element.pai = aux[2].split(";")[0]
    element.mae = aux[3]
    element.filho = aux[1].split(".")[0]
    element.ano = element.date.split("-")[0]
    data.push(element)
});

const fs = require('fs');

var Obgjson = JSON.stringify(data, null, 4);
fs.writeFileSync('batismos-fixed.json', Obgjson);