document.addEventListener("DOMContentLoaded", function () {
  let cronometro;
  let tempoInicial = 25 * 60;
  let tempoRestante = tempoInicial;
  let emExecucao = false;
  let contadorCiclo = 0;

  function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosFormatados = segundos % 60;
    return `${minutos
      .toString()
      .padStart(2, "0")}:${segundosFormatados.toString().padStart(2, "0")}`;
  }

  function iniciarCronometro() {
    if (!emExecucao) {
      emExecucao = true;
      cronometro = setInterval(() => {
        tempoRestante--;
        document.getElementById("tempo").textContent =
          formatarTempo(tempoRestante);

        if (tempoRestante === 0) {
          clearInterval(cronometro);

          if (contadorCiclo % 2 === 0) {
            // Abrir página após 25 minutos (início de um ciclo)
            window.open("https://seulink1.com", "_blank");
            tempoRestante = 5 * 60; // 5 minutos em segundos
          } else {
            // Abrir página após 5 minutos (fim de um ciclo)
            window.open("https://seulink2.com", "_blank");
            tempoRestante = tempoInicial;
          }

          contadorCiclo++;
          emExecucao = false;
          document.getElementById("tempo").textContent =
            formatarTempo(tempoRestante);
        }
      }, 1000);
    }
  }

  function pararCronometro() {
    clearInterval(cronometro);
    emExecucao = false;
  }

  function reiniciarCronometro() {
    pararCronometro();
    tempoRestante = tempoInicial;
    document.getElementById("tempo").textContent = formatarTempo(tempoRestante);
    contadorCiclo = 0;
  }

  document
    .getElementById("iniciar")
    .addEventListener("click", iniciarCronometro);
  document.getElementById("pausar").addEventListener("click", pararCronometro);
  document
    .getElementById("parar")
    .addEventListener("click", reiniciarCronometro);
});
