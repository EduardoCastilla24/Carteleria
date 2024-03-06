import { getProducto } from "../sheets/sheets.js";

Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#reader')
    },
    decoder: {
        readers: ["code_128_reader", "code_39_reader"]
    }
}, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();

    Quagga.onDetected(async function(result) {
        var code = result.codeResult.code;

        try {
            const producto = await getProducto(code);

            if (producto) {
                // Realiza acciones adicionales con el producto, por ejemplo, mostrarlo en una tabla
                $('#descripcion').val(producto.descripcion)
                $('#sku').val(producto.sku)
                $('#marca').val(producto.marca)
                $('#oferta').val(producto.oferta)
                $('#regular').val(producto.regular)
            } else {
                // Maneja el caso en el que el producto no se encuentra
                console.log('Producto no encontrado.');
            }
        } catch (error) {
            console.error('Error al obtener producto:', error);
            // Maneja el error de manera apropiada
        }
    });
});
