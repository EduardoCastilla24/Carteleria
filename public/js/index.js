import { table } from "./DataTable/dataTable.js";
import { delete_SelectRow, add_NewRow } from "./DataTable/functions.js";
import { Modal, closeModal, ClearModal } from "./modal.js";

//Eliminar Filas seleccionadas
$("#delete").on("click", ()=>{
    delete_SelectRow(table)
});

//Abrir y cerrar el Modal
$('#open_modal').on('click', function() {
    Modal()
});
$('#modal__close').on('click', function() {
    closeModal()
});


document.getElementById('signout_button').onclick = function() {
    Swal.fire({
        title: '¿Desea Cerrar Sesión?',
        text: "Al confirmar cerrará la sesión",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            handleSignoutClick()

            Notiflix.Loading.pulse();
            setTimeout(function(){
                // REMOVE LOADER
                window.location.href = '../../index.html';
                Notiflix.Loading.remove();
            }, 700);
        }
    })
};



//Agregar nuvea fila
$('#add_button').on('click', function() {
    // Obtener el formulario por su ID
    var formData = $('#form-Data');
    // Obtener un array de objetos con los datos del formulario
    var dataArray = formData.serializeArray();
    // Convertir el array en un objeto JSON
    var jsonData = {};
    $.each(dataArray, function() {
        jsonData[this.name] = this.value;
    });

    add_NewRow(table,
        {
            topper: jsonData.topper,
            formato: jsonData.formato,
            vigencia: jsonData.vigencia,
            sku: jsonData.sku,
            marca: jsonData.marca,
            descripcion: jsonData.descripcion,
            regular: jsonData.regular,
            scmr: '',
            oferta: jsonData.oferta,
            ncuota: 29.90,
            cmens: 29.90,
            e: 29,
            d: 90,
            interes: 29.90,
        }
    );

    ClearModal()

});