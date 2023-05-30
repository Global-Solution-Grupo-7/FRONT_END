

function validar(){
    var email = document.querySelector('.e-mail').value;
    var senha = document.querySelector('.senha').value;
    var telefone = document.querySelector('.telefone').value
    if(email === "" || senha === "" || telefone === ""){
        alert('Por favor, preencha todos os campos.')
    } else if(senha.length < 6){
        alert('A senha deve conter mais de 6 caracteres.')
    } else{
        alert('Cadastro efetuado com sucesso!')
    }
}
