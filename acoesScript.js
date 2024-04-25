function adicionarComentario() {
    var areaComentarios = document.getElementById('listaComentarios');
    var textoComentario = document.getElementById('textoComentario').value;
    var textoNome = document.getElementById('nomeUsuario').value
    var divComentario = document.createElement('div');
    var divNome = document.createElement('div')
    divNome.classList.add('nomeComentario')
    divNome.textContent = textoNome + ':'
    divComentario.classList.add('comentario')
    divComentario.textContent = textoComentario
    if(divComentario.textContent !== ''){
        areaComentarios.appendChild(divNome)
        areaComentarios.appendChild(divComentario)
    }else{
        alert("Por favor, insira um comentário antes de fazer o envio!")
    }
    document.getElementById('nomeUsuario').value = ''
    document.getElementById('textoComentario').value = ''; // Limpa o campo de texto
  }
  