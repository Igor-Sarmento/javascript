function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >= 6 && hora <= 12) {
        //bom dia
        img.src =  'amanhecer.png'
        document.body.style.background= '#fed6b3'
    } else if(hora > 12 && hora <=18){
        //boa tarde
        img.src =  'entardecer.png'
        document.body.style.background = '#b95c30'
    } else {
        //boa noite
        img.src = 'anoite.png'
        document.body.style.background = '#2e1103'
    }
}