var atual = new Date()
var hora = atual.getHours
console.log(`Horário Atual: ${atual}`)
if (hora >= 1 && hora < 6){
    console.log(`Boa Madrugada!`)
}else if (hora <= 12){
    console.log(`Bom Dia!`)
}else if (hora <= 18){
    console.log(`Boa Tarde!`)
}else{
    console.log(`Boa Noite!`)
}