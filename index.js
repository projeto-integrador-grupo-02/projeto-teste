// Importar o express
const express = require('express')
const path = require('path')

// Criar o servidor
const servidor = express()

//Definir a public como pasta de arquivos estáticos
servidor.use(express.static("public"))

//Definir as rotas
servidor.get(
    '/produtos',   // endereço ou caminho a receber requisição
    (req,res) =>{          // função a ser executada
      return res.sendFile(__dirname + '/views/produtos.html')
    }  
)

// Fazer o servidor rodar

servidor.listen(3002)