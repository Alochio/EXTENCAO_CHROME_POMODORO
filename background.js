let cronometro;
let tempoInicial = 25 * 60;
let tempoRestante = tempoInicial;
let emExecucao = false;
let contadorCiclo = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start_pomodoro") {
    if (!emExecucao) {
      emExecucao = true;
      cronometro = setInterval(() => {
        tempoRestante--;
        if (tempoRestante === 0) {
          clearInterval(cronometro);
          emExecucao = false;

          if (contadorCiclo % 2 === 0) {
            window.open("https://seulink1.com", "_blank");
            tempoRestante = 5 * 60; // 5 minutos em segundos
          } else {
            window.open("https://seulink2.com", "_blank");
            tempoRestante = tempoInicial;
          }
          contadorCiclo++;
        }
      }, 1000);
    }
  } else if (message.action === "stop_pomodoro") {
    clearInterval(cronometro);
    emExecucao = false;
  }
});
