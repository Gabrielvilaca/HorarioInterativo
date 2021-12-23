function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var atual = new Date()
var hora = atual.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    // bom dia
    img.src = 'fotomanha.png'
    document.body.style.background = '#d09f65'
} else if (hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#aab1c1'
}else{
    //boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#473558'
}
}
