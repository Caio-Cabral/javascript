function buscar(){ 
var pais = window.document.getElementById('txtvel')
var res = document.getElementById('res')
var cal = (pais.value)

res.innerHTML = `<p>Você mora no <strong>${cal}</strong></p>`
if(pais == ('Brasil')) {
    res.innerHTML += `Você mora no ${cal} então você é brasileiro`
}
}