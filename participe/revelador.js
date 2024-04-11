        //Revelador de Senha

const senha2 = document.getElementById('senha2');
const olho = document.getElementById('olho');

function revelar(){
    if(senha2.type === 'password'){
        senha2.setAttribute('type','text');
    }
    else{
        senha2.setAttribute('type','password');   
    }
}

//Validação de Formulario

/*
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
*/