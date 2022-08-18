function clicar(){
    var nome = window.prompt('Qual é o nome do aluno?')
    var pri = Number.parseFloat(window.prompt(`Primeira nota de ${nome}:`)) 
    var seg = Number.parseFloat(window.prompt(`Segunda nota de ${nome}:`)) 
    var n1 = (pri + seg) / 2
    var res = document.getElementById('res')
    if(n1 >= 6){
        res.innerHTML = (`<h2>Analisando a situação de ${nome}</h2>`)
        res.innerHTML += (`<p>Com as notas ${pri} e ${seg}, a <strong>média do aluno é ${n1}</strong></p>`)
        res.innerHTML += (`<p>Com média acima de 6,0, o aluno está <strong style="background-color: green; color : rgb(10, 247, 10)">APROVADO</strong></p>`)
    } else if (n1 >= 3){
        res.innerHTML = (`<h2>Analisando a situação de ${nome}<h2>`)
        res.innerHTML = (`<p>Com as notas ${pri} e ${seg}, a <strong>média do aluno é ${n1}</strong></p>`)
        res.innerHTML += (`<p>Com média entre 3,0 e 6,0, o aluno está em <strong style="background-color: yellow; color: rgb(121, 121, 0);">RECUPERAÇÃO</strong></p>`)
    } else {
        res.innerHTML = (`<h2>Analisando a situação de ${nome}</h2>`)
        res.innerHTML += (`<p>Com as notas ${pri} e ${seg}, a <strong>média do aluno é ${n1}</strong></p>`)
        res.innerHTML += (`<p>Com média abaixo de  3,0, o aluno está <strong style="background-color: red; color: rgb(126, 0, 0);">REPROVADO</strong></p>`)
    }
}