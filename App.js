const { response } = require('express');
const express = require('express');
const app = express();
const port = 3333;

app.use(express.json());

const links = [ 
                {
                    aula1: 'https://www.youtube.com/watch?v=ko_a3iJN9Oc',
                    descricao: 'Primeira video aula de Redes de computadores'
                }
            ];

const produtos = [
                {
                    nome: 'banana',
                    preco: '5,00'
                },
                {
                    nome: 'maca',
                    preco: '5,50'
                },
                {
                    nome: 'uva',
                    preco: '4,20'
                },
            ];

//Rota padrão
app.get('/', (req, res) => {
    res.send('<h1>Iae galera!</h1>');
});

//Requisicao get na rota de aulas, listando as aulas da matéria
app.get('/aulas', (req, res) => {
    res.json(links);
});

//Requisição get na rota de produtos, listando todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

//Adicionando um produto a partir do método Post
app.post('/produtos', (req, res) => {
    var recebido = req.body;
    res.json(recebido);
    produtos.push(recebido);
});

//Requisição get na rota de produtos, listando UM produto
app.get('/produtos/:index', (req, res) => {
    const { index } = req.params;
    res.json(produtos[index]);
});

//Alterando um dado a partir da rota de produtos, exibindo o resultado
app.put('/produtos/:index', (req, res) => {
    const { index } = req.params;
    const { preco } = req.body; 

    produtos[index].preco = preco;
    res.json(produtos);
});

//Deletando um dado a partir da rota de produtos, exibindo o resultado
app.delete('/produtos/:index', (req, res) => {
    const { index } = req.params;

    produtos.splice(index, 1);
    res.json(produtos);
});

//Resposta no terminal quando A execução funciona
app.listen(port, () => {
    console.log('100% - API rodando');
    console.log(`Acesse em http://localhost:${port}`); 
});


//Requisição get na rota de produtos, listando UM produto
/*app.get('/produto', (req, res) => {
    produtos.map( x =>
        x.nome == req.query.nome ? res.json(x) : null 
    );
});*/