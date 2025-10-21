function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if  (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança 
                img.setAttribute('src','imagens/crianca.masc.png')   
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagens/jovem.masc.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','imagens/adulto.masc.png')
            } else {
                //Idoso
                img.setAttribute('src','imagens/idoso.masc.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','imagens/crianca.fem.png')    
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagens/jovem.fem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','imagens/adulta.fem.png')
            } else {
                //Idoso
                img.setAttribute('src','imagens/idosa.fem.png')
            }
        }
        res.style.display = 'block'
        img.style.margin = '0 auto'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}