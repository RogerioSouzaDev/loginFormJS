function verifica(){
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let validacaoPass = document.getElementById('validacaoPass')
    if(email === '' && pass === ''){
        validacaoPass.innerText = 'Preencha os campos!'
    }else if(pass.length < 8){
        validacaoPass.innerText = 'Sua senha deve conter 8 digitos!'
        
    }else if (!emailRegex.test(email)) {
        validacaoPass.innerText = 'Por favor, insira um endereço de email válido';
    }
    else{
       alert('Logado com sucesso!')
       validacaoPass.innerText = ''
    }
}

function sobre(){
    alert('Essa página foi criada por Rogério Franco e Souza, é um treino para criação de formulários, criado no dia 19/12/2023')
}

function contato(){
    alert('Entre em contato comigo pelos seguintes canais:\nEmail: rogeriosouzadev@gmail.com\nLinkedin: linkedin.com/in/rogeriosouzadev/\nE veja tambem o meu github clicando na Logo da página :D')
}