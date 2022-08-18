function clicar(){
    var res = document.getElementById('res')
    var x = window.prompt('Qual é o ano que você quer verificar?')
    if (x % 4 == 0){
        res.innerHTML = `<h2>Analisando o ano de ${x}</h2>`
        res.innerHTML += `<p>O ano de ${x} <strong style="color: green;">É BISSEXTO &#x2714</strong></p>`
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${x}</h2>`
        res.innerHTML += `<p>O ano de ${x} <strong style="color: red;">NÃO É BISSEXTO &#x274C</strong></p>`
    }
}