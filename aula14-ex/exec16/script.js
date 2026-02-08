const botao = document.getElementById('btn')

botao.addEventListener('click', contar)

function contar() {
    let inicio = Number(document.getElementById('ii').value)
    let fim = Number(document.getElementById('if').value)
    let passo = Number(document.getElementById('ip').value)
    let res = document.getElementById('res')
    
    if(inicio == 0 || fim == 0 || passo == 0){
      alert('[erro] falta de dados!')
    } else {
        res.innerHTML = `resultado: <br>`
        let i = inicio
        let f = fim
        let p = passo

        res.replec
        if (p<=0){
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}