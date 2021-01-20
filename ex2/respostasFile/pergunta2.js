var axios = require('axios')

var data = []

axios.post('http://clav-api.di.uminho.pt/v2/users/login', {"username": "daw2020@teste.uminho.pt", "password": "232"})
    .then(dados => {
        var token = dados.data.token
        console.log('Token: ' + token + '\n\n')
        axios.get('http://clav-api.di.uminho.pt/v2/entidades?token=' + token)
            .then(dados2 =>{
                dados2.data.forEach(element2 => {
                data.push(element2)
                });
            const fs = require('fs');

            var Obgjson = JSON.stringify(data, null, 4);
            fs.writeFileSync('resposta2.json', Obgjson);

            console.log('Números de entidades:' + data.length)
            })
            .catch(e => {
                console.log('Erro: não consegui obter dados! ' + e)
            })
    })
    .catch(e => {
        console.log('Erro: não consegui obter dados! ' + e)
    })