function calcular(){
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong>Km/h</p>`
    if(vel > 60) {
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}