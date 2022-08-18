function clicar(){
    var ant = window.prompt('Qual era o preço anterior do produto?')
    var atu = window.prompt('Qual é o preço atual do produto?')
    var res = document.getElementById('res')
    var n1 = atu - ant
    var n2 = (n1 * 100) / ant
    var n3 = ant - atu
    var n4 = (n3 * 100) / ant
    if (n1 > 0){ 
    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava R$${ant} e agora custa R$${atu}.</p>`
    res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
    res.innerHTML += `<p>O preço subiu R$${n1} em relação ao preço anterior.</p>`
    res.innerHTML += `<p>Uma variação de ${n2}% pra cima</p>`
}else{
   
        res.innerHTML = `<h2>Analisando os valores informados</h2>`
        res.innerHTML += `<p>O produto custava R$${ant} e agora custa R$${atu}.</p>`
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu R$${n3} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${n4}% pra baixo</p>`
    }
}

