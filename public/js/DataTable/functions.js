import { closeModal } from "../modal.js";

export function delete_SelectRow(table){
        // Obtener las filas seleccionadas
        var filasSeleccionadas = table.rows({ selected: true }).indexes();

        // Eliminar las filas seleccionadas
        table.rows(filasSeleccionadas).remove().draw();
};

export function add_NewRow(table, valores) {
var nuevaFila = $('<tr>' +
        '<td></td>' +
        '<td><input type="text" id="row-descripcion" name="row-descripcion" value="' + (valores.descripcion || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-topper" name="row-topper" value="' + (valores.topper || '') + '" class="form__element--input"></td>' +
        '<td><select size="1" id="row-1-formato" name="row-1-formato" class="form__element--input">' +
        '<option value="preciaso" ' + (valores.formato === 'preciaso' ? 'selected="selected"' : '') + '>Preciazo</option>' +
        '<option value="ou" ' + (valores.formato === 'ou' ? 'selected="selected"' : '') + '>Oportunidad Unica</option>' +
        '<option value="liquidacion" ' + (valores.formato === 'liquidacion' ? 'selected="selected"' : '') + '>Liquidacion</option>' +
        '</select></td>' +
        '<td><input type="text" id="row-vigencia" name="row-vigencia" value="' + (valores.vigencia || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-sku" name="row-sku" value="' + (valores.sku || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-marca" name="row-marca" value="' + (valores.marca || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-regular" name="row-regular" value="' + (valores.regular || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-scmr" name="row-scmr" value="' + (valores.scmr || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-oferta" name="row-oferta" value="' + (valores.oferta || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-ncuota" name="row-ncuota" value="' + (valores.ncuota || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-cmens" name="row-cmens" value="' + (valores.cmens || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-e" name="row-e" value="' + (valores.e || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-d" name="row-d" value="' + (valores.d || '') + '" class="form__element--input"></td>' +
        '<td><input type="text" id="row-interes" name="row-interes" value="' + (valores.interes || '') + '" class="form__element--input"></td>' +
        '</tr>');

        closeModal()
        // Agregar la nueva fila a la tabla
        table.row.add(nuevaFila).draw();
}

