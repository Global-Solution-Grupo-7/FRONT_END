function Clock(){
    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('min').innerHTML = min;
}
setInterval(Clock, 500)




var i = 0;
var images = [];
var time = 3000;

images[0] = './imagens/imagem1.jpg';
images[1] = './imagens/imagem2.jpg';
images[2] = './imagens/imagem3.jpg';

function changeImg(){
    document.slide.src = images[i]

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg