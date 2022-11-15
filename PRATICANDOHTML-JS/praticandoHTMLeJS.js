function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = "imagem/fotomanha.jpg";
    document.body.style.backgroundImage = "url('imagem/ceudemanha.jpg')";
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = "imagem/fototarde.jpg";
    document.body.style.backgroundImage = "url('imagem/ceutarde.jpg')";
  } else {
    //BOA NOITE!
    img.src = "imagem/fotonoite.jpg";
    document.body.style.backgroundImage = "url('imagem/ceunoite.jpg')";
  }
}
