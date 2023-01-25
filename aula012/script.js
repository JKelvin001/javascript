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
        
    }else{
        window.alert('[ERROR]')
    }
}