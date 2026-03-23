// Método Trim() nos permite fazer uma nova cópia de uma string, removendo os espações iniciais e finais
// O modo de usar o trim() é semelhante ao toUpperCase() e ao toLowerCase()
// por exemplos em campo de e-mail '"exemplo@gmail.com "

// Conclua o retorno da função pegueEmail() de forma que o e-mail retornado não tenha mais espaços extras, nem à esquerda nem à direita. Ou seja, retire os espaços indesejados.

// Implemente o retorno da função pegueEmail().

function pegueEmail(email) {
    // complete a linha abaixo
    return email.trim()
}

// Exemplo de uso - não modifique
console.log(pegueEmail(" alex@gmail.com "))
console.log(pegueEmail(" alex@gmail.com"))
console.log(pegueEmail("bron@gmail.com"))