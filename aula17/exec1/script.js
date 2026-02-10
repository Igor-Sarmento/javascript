document.getElementById('cap').addEventListener('click', adicionar)
document.getElementById('finalizar').addEventListener('click', finalizar)

let num = document.querySelector('input#inum')
let lista = document.querySelector('select#ilist')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){
    if (Number(n) >= 0 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
  if(isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('valo inválido ou já encontrado na lista')
    }
    num.value = ' '
    num.focus()
}

function finalizar(){
    if (valores.length == 0 ){
        alert('adicione valores antes de finalizar.')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            if( valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor < valores[pos]
            }
            soma += valores[pos]
        }
        
        media = soma / tot        

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior} </p>`
        res.innerHTML += `<p>O menor valor é ${menor} </p>`
        res.innerHTML += `<p>a soma de todos os valores é ${soma} </p>`
        res.innerHTML += `<p>A média entre os valores é ${media.toFixed(2)} </p>`
    }
}
