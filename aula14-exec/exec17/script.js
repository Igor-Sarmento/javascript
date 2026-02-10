document.getElementById('ibtn').addEventListener('click',calcular)

function calcular() {
   let tabu = document.getElementById('itabu').value
   let resmul
   let res = document.getElementById('res')
    res.innerHTML = '<br>resultado<br>'
   if (tabu == 0) {
        alert('digite um valor')
        return
   }

   let select = document.createElement('select')
   
   for(let c = 1; c <= 10; c++) {
        const option = document.createElement('option')
        resmul = c * tabu
        option.textContent = `${c} * ${tabu} = ${resmul}`
        select.appendChild(option) 
   }

   res.appendChild(select)
}
    
