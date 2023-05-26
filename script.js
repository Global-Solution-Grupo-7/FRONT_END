

function teste(){
    var nome = document.querySelector('.Nome').value;
    var email = document.querySelector('.Email').value;
    var mensagem = document.querySelector('.input-msg').value;
    if (nome === "" || email === "" || mensagem === ""){
        alert('Por favor preencha todos os campos.')
    } else{
        alert('Mensagem enviada!')
    }
}


document.querySelector('.contato').addEventListener('click', function() {
    var elementoDestino = document.querySelector('.contatar');
    elementoDestino.scrollIntoView({ behavior: 'smooth' });
  });


  var button = document.getElementById('#darkmode');
  var div = document.querySelector('.cabecalho');
  var contactDiv = document.getElementById('contact');
  var falaDiv = document.querySelector('.fala');
  var originalColor = window.getComputedStyle(div).backgroundColor;
  var contactOriginalColor = window.getComputedStyle(contactDiv).backgroundColor;
  var falaOriginalColor = window.getComputedStyle(falaDiv).backgroundColor;
  var isWhite = false;

function mudarCor() {

  if (isWhite) {
    div.style.backgroundColor = originalColor;
    contactDiv.style.backgroundColor = contactOriginalColor;
    falaDiv.style.backgroundColor = falaOriginalColor
    isWhite = false;
  } else {
    div.style.backgroundColor = 'white';
    contactDiv.style.backgroundColor = 'white';
    falaDiv.style.backgroundColor = 'grey';
    isWhite = true;
  }
}


button.addEventListener('click', changeColor);


