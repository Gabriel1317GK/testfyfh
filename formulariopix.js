

// Função para verificar se o formulário está preenchido
function verificarFormulario() {
  var destintario = document.getElementById("destintario").value;
  var pix = document.getElementById("pix").value;
  var banco = document.getElementById("banco").value;
  var valor = document.getElementById("valor").value;
  var tipomanutenção = document.getElementById("tipomanutenção").value;
  var placa = document.getElementById("placa").value;
  var observação = document.getElementById("observação").value;

  // Verifica se todos os campos estão preenchidos
  if (destintario !== '' && pix !== '' && banco !== '' && valor !== '' && tipomanutenção !== '' && placa !== '' && observação !== '') {
      // Redireciona o usuário para o link desejado
      window.location.href = "enviado.html";
  } else {
      // Se não estiver preenchido, exibe uma mensagem de erro
      alert("Por favor, preencha todos os campos antes de enviar.");
  }
}

// Adiciona um evento de clique ao botão de envio
document.getElementById("enviar").addEventListener("click", verificarFormulario);
