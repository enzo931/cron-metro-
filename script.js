let tempo = 0; // tempo em segundos
let intervalo;
let cronometroAtivo = false;

const display = document.getElementById("display");
const iniciar = document.getElementById("iniciar");
const parar = document.getElementById("parar");
const resetar = document.getElementById("resetar");

iniciar.addEventListener("click", () => {
  if (!cronometroAtivo) {
    intervalo = setInterval(function () {
      tempo++;
      atualizarDisplay();
    }, 1000);
    cronometroAtivo = true;
    iniciar.textContent = "Pausar";
  } else {
    clearInterval(intervalo);
    cronometroAtivo = false;
    iniciar.textContent = "Iniciar";
  }
});

parar.addEventListener("click", () => {
  clearInterval(intervalo);
  cronometroAtivo = false;
  iniciar.textContent = "Iniciar";
});

resetar.addEventListener("click", () => {
  clearInterval(intervalo);
  tempo = 0;
  cronometroAtivo = false;
  iniciar.textContent = "Iniciar";
  atualizarDisplay();
});

function atualizarDisplay() {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  display.textContent = `${formatarTempo(minutos)}:${formatarTempo(segundos)}`;
}

function formatarTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}
