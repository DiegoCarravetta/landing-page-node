// aqui estou importando o módulo express para o arquivo
const express = require (`express`);
// para utilizar arquivos estáticos, preciso importar a lib "path"
const path = require (`path`);

// aqui estou instanciando uma referencia do express no projeto
const app = express ();
// crio uma variável para armazenar a porta do servidor
const port = 3000;

// serve para dizer o código qual o "motor de visualização" (view engine)
app.set (`view engine`, `ejs`);
// diz qual pasta irá guardar os arquivos estáticos
// estou dizendo para o app usar o método express.static
// uso o método "path.join" para juntar a pasta raiz "__dirname" e a pasta que guarda os arquivos "public"
app.use (express.static (path.join (__dirname, `public`)));

// rota principal que recebe uma função com dois parâmetros
// parâmetro req de requisição e parâmtro res de resposta
// em vez de escrever "function", coloco os parâmetros e depois o "arrow function" =>
// app é uma instância do express
// get é o método de requisição
// `/` é o caminho no servidor
// req, res é a função executada quando a rota é correspondida
// app.METHOD(PATH, HANDLER)
app.get (`/`, (req, res) => {
    // responde a requisição da rota com um texto
    res.send (`Hellow World`);
});

app.get (`/index`, (req, res) => {
    // abre o arquivo "index.ejs" que está sendo renderizado
    res.render (`index`);
});

app.post (`/`, (req, res) => {
    // não vou receber nada na tela porque não pedi retorno do sistema
    res.send (`POST recebe da homepage`)
});

// adiciona a port e uma => para mostrar no console o caminho do servidor
// depois de renderisar a página ejs, coloco um "/index" depois da variável, para abrir de cara no caminho correto
app.listen (port, () => console.log (`O servidor está rodando em http://localhost:${port}/index`));

// exemplos de roteamentos: https://expressjs.com/pt-br/starter/basic-routing.html