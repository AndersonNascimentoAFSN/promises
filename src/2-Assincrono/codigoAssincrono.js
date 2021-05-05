const fs = require('fs')
const path = require('path')
const basePath = './assets/'

console.log('Início')

// Este é um processo assíncrono de leitura de arquivos, ele não irá parar a execução das linhas de códigos seguintes.

const conteudo = fs.readFile(path.resolve(basePath, 'mensagens.txt'), { encoding: 'utf-8' }, (erro, conteudo) => {
  if (erro) throw erro
  console.log(conteudo)
})

console.log('Fim')