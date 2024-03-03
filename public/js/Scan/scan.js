import { SendData } from "../sendData.js";

Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#reader')
    },
    decoder: {
        readers: ["code_128_reader"]
    }
}, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
    // Configurar el manejador de eventos para los resultados del escaneo
    Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
      // Mostrar el código de barras en un alert
        alert("Código de barras detectado: " + code);
        SendData(code)
    });
});
