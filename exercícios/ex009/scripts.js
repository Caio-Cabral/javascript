var contador = 0
var res = document.getElementById('resultado')

function contar(){
    contador ++
    res.innerHTML = `<p>O contador está com <strong>${contador}</strong> cliques</p>`
}

function zerar(){
    contador = 0
    res.innerHTML = null
}