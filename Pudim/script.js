// Controles da Primeira Janela (Botão "Que?")
function abrirModal() {
  document.getElementById("mostrarModal").style.display = "block";
}
function fecharModal() {
  document.getElementById("mostrarModal").style.display = "none";
}

// Fecha qualquer uma das janelas se clicar no fundo escuro
window.onclick = function (event) {
  let m = document.getElementById("mostrarModal");

  if (event.target == m) {
    m1.style.display = "none";
  }
}