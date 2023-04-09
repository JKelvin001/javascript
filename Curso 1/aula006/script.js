function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Horas.`
    msg.style.fontSize = ('1.5em')
    msg.style.fontFamily = ('Arial')

    if (hora >= 0 && hora <12) {
    img.src = 'manhajs.png'
    document.body.style.background = '#E6C853'
    } else if (hora >= 12 && hora <= 17){
    img.src = 'tardejs.png'
    document.body.style.background = '#E0531F'
    } else{
    img.src = 'noitejs.png'
    document.body.style.background = '#222C61'
    }
}