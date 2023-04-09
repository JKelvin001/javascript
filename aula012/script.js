    let num = document.getElementById('inmb')
    let bd = document.getElementById('ibanco')
    let res = document.getElementById('res')
    let valor = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n <= 100)){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}    
function analize(){    
    if (isNumero(num.value) && !inLista(num.value, valor)){
         valor.push(Number(num.value))
         let item = document.createElement('option')
         item.text = `Valor ${num.value} adciionado.`
         bd.appendChild(item) 
         res.innerHTML = ''
    }else{
        window.alert('[Valor invalido pois já consta da lista.]')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valor.length == 0){
        window.alert('Valores nulos para finalização')
    } else{
        let tot = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for(let pos in valor) {
            soma += valor[pos]
            if (valor[pos] > maior)
                maior = valor[pos]
            if (valor[pos] < menor)
                menor = valor[pos]    
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos: ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores informados é: ${media}</p>`
    }

}