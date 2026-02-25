// Controles da Primeira Janela (Botão "Que?")
function abrirModal1() {
  document.getElementById("modal1").style.display = "block";
}
function fecharModal1() {
  document.getElementById("modal1").style.display = "none";
}

// Controles da Segunda Janela (Botão "Eu também!")
function abrirModal2() {
  document.getElementById("modal2").style.display = "block";
}
function fecharModal2() {
  document.getElementById("modal2").style.display = "none";
}

// Fecha qualquer uma das janelas se clicar no fundo escuro
window.onclick = function (event) {
  let m1 = document.getElementById("modal1");
  let m2 = document.getElementById("modal2");

  if (event.target == m1) {
    m1.style.display = "none";
  }
  if (event.target == m2) {
    m2.style.display = "none";
  }
}