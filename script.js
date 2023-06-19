function convertir() {
    var riotPoints = document.getElementById('riotPoints').value;
    var tasa = 10; // La tasa de conversión, supongamos que es 10 pesos por Riot Point
    var pesos = riotPoints * tasa;
    document.getElementById('output').value = pesos + ' pesos argentinos';
}

function copiar() {
    /* Obtén el elemento de entrada de texto */
    var copiaTexto = document.getElementById("output");

    /* Selecciona el texto del elemento de entrada de texto */
    copiaTexto.select();
    copiaTexto.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    /* Copia el texto al portapapeles */
    document.execCommand("copy");
}
