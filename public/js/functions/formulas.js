export function Cuotas(valorI2) {
    if (valorI2 < 80) {
        return 0;
    } else if (valorI2 < 200) {
        return 3;
    } else if (valorI2 < 500) {
        return 6;
    } else if (valorI2 < 100000) {
        return 12;
    } else {
        return 0;
    }
}
// Definir la tabla en formato JavaScript
const datosTabla = [
    { ELECTRO: 0, TASA: '0%', FACTOR: 0 },
    { ELECTRO: 3, TASA: '5.90%', FACTOR: 0.37343 },
    { ELECTRO: 6, TASA: '5.90%', FACTOR: 0.20273 },
    { ELECTRO: 12, TASA: '2.92%', FACTOR: 0.1 }
];