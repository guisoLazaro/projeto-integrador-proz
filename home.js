const usuarios = {
    nome: '',
    email: '',
    idade: '',
    senha: undefined
}

let listaUsuarios = [
    {
        nome: 'Diego Silva',
        email: 'diegosilva@climateguardian.com',
        idade: 37,
        senha: '123456'
    },

    {
        nome: 'Vinicius Cavalcanti',
        email: 'viniciuscavalcanti@climateguardian.com',
        idade: 24,
        senha: '123456'
    },

    {
        nome: 'Matheus Lima',
        email: 'matheuslima@climateguardian.com',
        idade: 18,
        senha: '123456'
    },

    {
        nome: 'Carlos Gabriel',
        email: 'carlosgabriel@climateguardian.com',
        idade: 18,
        senha: '123456'
    },

    {
        nome: 'Guilherme Lazaro',
        email: 'guilhermelazaro@climateguardian.com',
        idade: 32,
        senha: '123456'
    }
]

function visualizar() {
    let area_login = document.getElementById("login")
    let area_cadastro = document.getElementById("cadastrar-usuario")

    area_login.classList.toggle("esconder")
    area_cadastro.classList.toggle("esconder")
}

let linkCriarConta = document.getElementById('abrir-criar-conta');
let botaoCadastrar = document.getElementById('cadastrar');
let linkVoltarLogin = document.getElementById('retornar-para-login');

linkCriarConta.addEventListener('click', (e) => {
    e.preventDefault();
    visualizar();
});

botaoCadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    visualizar();
});

linkVoltarLogin.addEventListener('click', (e) => {
    e.preventDefault();
    visualizar();
});

function estilisarInputCorreto(input) {
    input.classList.remove('error');
    input.classList.add('correct');
};

function estlizarInputIncorreto(input) {
    input.classList.add('error');
    input.classList.remove('correct');
};

function resetarInputs() {
    document.getElementById('nome-cadastro').value = '';
    document.getElementById('email-cadastro').value = '';
    document.getElementById('idade-cadastro').value = '';
    document.getElementById('senha-cadastro').value = '';
    document.getElementById('confirmar-senha').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}

function limparInputs(input) {
    if (input.classList.contains('error')) {
        input.classList.remove('error');
    }
    if (input.classList.contains('correct')) {
        input.classList.remove('correct');
    }
    input.classList.add('default');
};

// ---------- VALIDAÇÃO USERNAME ---------- //

let usernameInput = document.getElementById("nome-cadastro");

// Validar valor do input
usernameInput.addEventListener('input', (e) => {
    let valor = e.target.value;

    if (valor.length <= 3) {
        //Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres.
        estlizarInputIncorreto(usernameInput);
        inputsCorretos.username = false;
    } else {
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilisarInputCorreto(usernameInput);
        inputsCorretos.username = true;
        usuarios.nome = usernameInput.value;
    }
});


// ---------- VALIDAÇÃO E-MAIL ---------- //

let emailInput = document.getElementById('email-cadastro');

//Validar valor do input

emailInput.addEventListener('input', (e) => {
    let valor = e.target.value;

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].email === emailInput.value) {
            estlizarInputIncorreto(emailInput);
            inputsCorretos.emailRepetido = false;
            break;
        } else {
            inputsCorretos.emailRepetido = true;
        }
    };

    if (valor.includes('@') && valor.includes('.com')) {
        estilisarInputCorreto(emailInput);
        inputsCorretos.email = true;
        usuarios.email = emailInput.value;
    } else {
        estlizarInputIncorreto(emailInput);
        inputsCorretos.email = false;
    }
});


// ---------- VALIDAÇÃO IDADE ---------- //

let idadeInput = document.getElementById('idade-cadastro');

//validar valor da idade

idadeInput.addEventListener('change', (e) => {
    let valor = e.target.value;

    if (valor < 18) {
        estlizarInputIncorreto(idadeInput);
        inputsCorretos.idade = false;
    } else {
        estilisarInputCorreto(idadeInput);
        inputsCorretos.idade = true;
        usuarios.idade = idadeInput.value;
    }
});


// ---------- VALIDAÇÃO SENHA ---------- //

let senhaInput = document.getElementById('senha-cadastro');

//validar senha 

senhaInput.addEventListener('input', (e) => {
    let valor = e.target.value;

    if (valor.length >= 6) {
        estilisarInputCorreto(senhaInput);
        inputsCorretos.senha = true;
    } else if (valor == '') {

        estlizarInputIncorreto(senhaInput);
        inputsCorretos.senha = false;
    } else {
        estlizarInputIncorreto(senhaInput);
        inputsCorretos.senha = false;
    }
});


// ---------- VALIDAÇÃO CONFIRMAR SENHA ---------- //

let confirmarSenhaInput = document.getElementById('confirmar-senha');

//validar senha 

confirmarSenhaInput.addEventListener('input', (e) => {
    let confirmaSenhaValor = e.target.value;

    if (confirmaSenhaValor == senhaInput.value) {
        estilisarInputCorreto(confirmarSenhaInput);
        inputsCorretos.confirmarSenha = true;
        usuarios.senha = senhaInput.value
    } else {
        estlizarInputIncorreto(confirmarSenhaInput);
        inputsCorretos.confirmarSenha = false;
    }
});


// ---------- CADSTRAR NOVO USUÁRIO ---------- //

let btnCadastrar = document.getElementById('cadastrar')
const inputs = formulario.querySelectorAll('input');

let inputsCorretos = {
    username: false,
    email: false,
    emailRepetido: false,
    idade: false,
    senha: false,
    confirmarSenha: false
};


btnCadastrar.addEventListener('click', (e) => {
    if (inputsCorretos.username == false || inputsCorretos.email == false || inputsCorretos.idade == false || inputsCorretos.senha == false || inputsCorretos.confirmarSenha == false) {
        alert('Existem campos obrigatórios que precisam ser preenchidos.');
        e.preventDefault();
    } else if (inputsCorretos.emailRepetido == false) {
        alert('Email já cadastrado!');
        estlizarInputIncorreto(emailInput);
    } else {
        const novoUsuario = { ...usuarios };
        listaUsuarios.push(novoUsuario)
        resetarInputs();
        limparInputs(usernameInput);
        limparInputs(emailInput);
        limparInputs(idadeInput);
        limparInputs(senhaInput);
        limparInputs(confirmarSenhaInput);
        alert('Usuario cadastrado com sucesso!');
        console.log(listaUsuarios);
    }
});


// ---------- LOGAR NO SISTEMA ---------- //

let botaoLogin = document.getElementById('btn-login');


botaoLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let emailUsuario = document.getElementById('email').value;
    let senhaUsuario = document.getElementById('senha').value;
    let usuarioLogado = document.getElementById('usuario-logado');
    let span = document.createElement('span');
    let teste = false;

    if (emailUsuario == '' || senhaUsuario == '') {
        alert('E-mail e senha devem ser preenchidos!');
    } else {
        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].email === emailUsuario && listaUsuarios[i].senha === senhaUsuario) {
                alert('Login feito com sucesso!');
                span.innerText = listaUsuarios[i].nome
                span.style.fontFamily = 'sans-serif';
                usuarioLogado.innerText = 'Bem-vindo, ';
                usuarioLogado.appendChild(span);
                teste = true;
                break
            }
        }
        if (teste == false) {
            alert('Usuário não cadastrado.');
        }
    }
    resetarInputs()
});