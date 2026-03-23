// Aqui utilizaremos os métodos toLowerCase() para o conteúdo ficar em letras minusculas 
// e o método trim() para limpara os espaços iniciais e finais 

// Os métodos trim(), toLowerCase() e toUpperCase() criam novas cópias da variável. Eles não alteram a variável Original.
// Para alterar a variável. você deve reatribuir essa variável a ela mesma com uma chamada de função.
// Por exemplo, 'limpo = limpo.trim()' vai alterar o valor da variável, removendo os espaçoes iniciais e finais que houver dentro dela.

// Complete a função pegueNome() de forma que ela converta todo o nome em letras maiúsculas e também remova os espaços à esquerda e à direita. Tente fazê-lo passo a passo, em várias linhas, seguindo a mesma abordagem que vimos anteriormente. Sinta-se à vontade para adicionar logs do console ao longo do caminho para ver as transformações passo a passo.

// Implemente o retorno da função pegueNome().

function pegueNome(nome) {
    nome = nome.toUpperCase()
    nome = nome.trim()

    return nome
}

// Exemplo de uso - não modifique
console.log(pegueNome(" bruno"))
console.log(pegueNome(" alex  "))