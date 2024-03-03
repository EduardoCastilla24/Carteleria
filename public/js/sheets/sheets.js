export async function getProducto(ean) {
    try {
        // Fetch data from the spreadsheet
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1SQm2Ccg1cFJGWSbcX1dIpI01UsytOGn1UxzSkEJwmKs',
            range: 'Profundidad_Total' + '!A2:AY', // Use the sheet name in the query
        });

        // Accede a 'response.result' en lugar de solo 'range'
        const range = response.result;

        // Filter the products based on the provided EAN
        const productoEncontrado = range.values.find(fila => fila[8] === ean); // Assuming the EAN is in the 9th column (index 8)

        if (!productoEncontrado) {
            console.error('Producto no encontrado con el código EAN proporcionado.');
            return null; // Devuelve null o un valor predeterminado en caso de que no se encuentre el producto
        }

        const nuevoProducto = {
            descripcion: productoEncontrado[11],
            oferta: productoEncontrado[25],
            regular: productoEncontrado[22],
            sku: productoEncontrado[9],
            marca: productoEncontrado[12],
        };

        // Devuelve el objeto nuevoProducto
        return nuevoProducto;

    } catch (err) {
        console.error(err.message);
        return null; // Devuelve null o un valor predeterminado en caso de error
    }
}
