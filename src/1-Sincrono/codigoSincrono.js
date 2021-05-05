// Módulo file system, utilizado para acessar os arquivos no disco rígido do computador.
const fs = require('fs')
// O módulo path fornece utilitários para trabalhar com caminhos de arquivo e diretório.
const path = require('path')
const basePath = './assets/'

console.log('Início')

// Este é um exemplo de um arquivo lido de forma síncrona, ele pausa o programa para lê o arquivo.

const conteudo = fs.readFileSync(path.resolve(basePath, 'mensagens.txt'))

console.log(conteudo.toString())

console.log('Fim')