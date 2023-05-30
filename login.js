function verificar(){
    var usuario = document.querySelector('.usuario').value
    var senha = document.querySelector('.senha').value

    if (usuario === "" || senha == ""){
        alert('Preencha todos os campos.')
    } else if(usuario === "Admin" && senha == "12345"){
        alert('Login efetuado com sucesso')
    } else {
        alert('O usuário e/ou senha estão incorretos.')
    }
}