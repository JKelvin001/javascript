function check() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.style.padding = '20px'
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'bebemasculino.png')
        }else if (idade < 21){
            img.setAttribute('src', 'homemjovem.png')
        }else if (idade < 50){
            img.setAttribute('src', 'homemadulto.png')
        }else{
            img.setAttribute('src', 'homemidoso.png')
        }
    }else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'bebefeminino.png')
        }else if (idade < 21){
            img.setAttribute('src', 'mulherjovem.png')
        }else if (idade < 50){
            img.setAttribute('src', 'mulheradulta.png')
        }else{
            img.setAttribute('src', 'mulheridosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.style.fontSize = '1.2em'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
}