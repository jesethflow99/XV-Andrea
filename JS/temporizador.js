const fechaObjetivo = new Date('2024-06-29T16:16:00').getTime();

function actualizarTemporizador() {
    const ahora = new Date().getTime();

    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const temporizadorElemento = document.querySelector(".temporizador");

    temporizadorElemento.innerHTML = `
        Faltan <br> ${dias} días ${horas} horas ${minutos} minutos y ${segundos} segundos
    `;
    if (diferencia < 0) {
        clearInterval(intervalo);
        temporizadorElemento.innerHTML = '¡Tiempo cumplido!';
    }
}
const intervalo = setInterval(actualizarTemporizador, 1000);
