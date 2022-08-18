var idade = 25
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você ainda não pode votar.')
} else if (idade < 18 || idade > 65) {
    console.log('Seu voto é Voto opcional')
} else if (idade >= 18){  
    console. log('Seu voto é obrigatório')
}