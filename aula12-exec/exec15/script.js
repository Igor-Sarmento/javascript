function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let idade
    let genero
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert(`[erro] verifique os dados e tente novamente!`)
    } else {
        let sexo = document.getElementsByName('radsex')
        idade = ano - fano.value
        //<img id="foto"></img>
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'Homem'
             img.setAttribute('src', 'masc.png')
             if(idade >= 0 && idade <=10){
                //ciranca
            } else if(idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else {
                //idoso
            }
        } else if(sexo[1].checked){
            genero = 'Mulher'
            img.setAttribute('src', 'fem.png')
             if(idade >= 0 && idade <=10){
                //ciranca
            } else if(idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else {
                //idoso
            }
        }
        
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Identificamos um(a) ${genero} de idade ${idade}.`
    res.appendChild(img)
}