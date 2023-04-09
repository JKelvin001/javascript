let amigo = {nome: 'Kelvin',
sexo: 'M', 
peso: 89.5,
engordar(p){
    console.log('Engordou')
    this.peso += p    
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesava ${amigo.peso}Kg e engordou..`)