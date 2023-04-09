let num = [5, 4, 3, 2, 1]
num [5] = 0
num.push(9)
num.sort()
console.log(num)
console.log(`O vetor tem um total de ${num.length} casas`)
/*push depois de sort a ultima casa não fica na ordem certa*/

let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`Valor não encontrado tente novamente`)
}else{
    console.log(`Posição: ${pos}`) 
}
