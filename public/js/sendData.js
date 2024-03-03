import { getProducto } from "./sheets/sheets";

export function SendData(ean) {
    getProducto(ean)
}