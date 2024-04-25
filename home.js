let listaUsuarios = [
    {
        nome: 'Diego Silva',
        email: 'diegosilva@climateguardian.com',
        senha: '123456'
    },


    {
        nome: 'Vinicius Cavalcanti',
        email: 'viniciuscavalcanti@climateguardian.com',
        senha: '123456'
    },


    {
        nome: 'Matheus Lima',
        email: 'matheuslima@climateguardian.com',
        senha: '123456'
    },
   
    {
        nome: 'Carlos Gabriel',
        email: 'carlosgabriel@climateguardian.com',
        senha: '123456'
    },


    {
        nome: 'Guilherme Lazaro',
        email: 'guilhermelazaro@climateguardian.com',
        senha: '123456'
    }
]


let botaoLogin = document.getElementById('btn-login');


botaoLogin.addEventListener('click', () => {
    let emailUsuario = document.getElementById('email').value;
    let senhaUsuario = document.getElementById('senha').value;
    let usuarioLogado = document.getElementById('usuario-logado');
    let span = document.createElement('span');


    if (emailUsuario != '' && senhaUsuario != ''){


        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].email === emailUsuario && listaUsuarios[i].senha === senhaUsuario) {
                alert ('Login feito com sucesso!');
                span.innerText = listaUsuarios[i].nome
                span.style.fontFamily = 'sans-serif';  
                usuarioLogado.innerText = 'Bem-vindo, ' ;
                usuarioLogado.appendChild(span);
            }
        }
    }else {
        alert('E-mail e senha devem ser preenchidos!');
    }
});
