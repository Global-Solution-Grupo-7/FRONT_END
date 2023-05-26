

function validar(){
    var email = document.querySelector('.e-mail').value;
    var senha = document.querySelector('.senha').value;
    if(email === "" || senha === ""){
        alert("Por favor, preencha todos os campos.")
    } else{
        alert("Cadastro efetuado com sucesso!")
    }
}

