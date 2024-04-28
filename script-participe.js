                //Função revelar

const senha = document.getElementById('senha2');
const olho = document.getElementById('olho');
let nomePessoa = document.getElementById('nomePessoa')

function revelar(){
    if(senha.type === 'password'){
        senha.setAttribute('type', 'text');
        olho.classList.add('hide')
    } else{
        senha.setAttribute('type', 'password');
        olho.classList.remove('hide')
    }

}


            //Validação de Formulario

const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const nome = document.querySelector(".nome");
const jaInscritos = document.getElementById("jaInscritos")
const spans  = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


        //Função do Botão Enviar
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nomeValidacao();
    emailValidacao();
    validacaoSenha();
    envio()
});


            // Validação/Funções de Erro e Acerto
function erro(index){ 
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';

};

function removerErro(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';

};

function nomeValidacao(){
    if(campos[0].value.length < 3)
    {
        erro(0);
    }
    else
    {
        removerErro(0);
    }
};

function emailValidacao(){
    if(!emailRegex.test(campos[1].value))
    {
        erro(1);
    }
    else
    {
        removerErro(1);
    }
};

function validacaoSenha(){
    if(campos[2].value.length < 8)
    {
        erro(2);
    }
    else
    {
        removerErro(2);
    }
};

                // Validação/Função de Envio
function envio(){
    if(campos[0].value.length >= 3 && emailRegex.test(campos[1].value) && campos[2].value.length >= 8){
        const usuario = nome.value;

        window.alert(`Seja Bem Vindo a Climate Guardian ${usuario}!`);

        let li = document.createElement("li");
        li.innerText = usuario;
        jaInscritos.appendChild(li);
        form.reset();
        /*form.addEventListener('submit', (event) => {
            event.currentTarget.submit(); });*/
    };
};