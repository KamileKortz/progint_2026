function mostrarMensagem() {
    alert("Eu te odeio");
}

function abrirModal() {
  document.getElementById("meuModal").style.display = "block";
}

function fecharModal() {
  document.getElementById("meuModal").style.display = "none";
}

// Fecha se o usuário clicar fora da imagem (no fundo escuro)
window.onclick = function(event) {
  let modal = document.getElementById("meuModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}