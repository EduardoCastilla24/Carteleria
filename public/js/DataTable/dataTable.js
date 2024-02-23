
export const table = new DataTable('#example', {
    ordering: false,
    scrollX: true,
    pageLength: 10,
    // QUITAR EL AUTO WIDTH
    autoWidth: false,
    // TRADUCCION DE LOS MENSAJES
    language: {
        search: "",
        searchPlaceholder: "Buscar...",
        lengthMenu: '_MENU_',
        zeroRecords: 'No se han encontrado registros que coincidan',
        info:'Mostrando _END_ de _MAX_ registros',
        infoEmpty: 'Mostrando _END_ coincidencias',
        infoFiltered:   "(Filtrado de _MAX_ registros en total)",
        emptyTable: 'No existen registros en esta tabla',
        paginate: {
            next:       '<i class="bx bx-chevron-right !relative !top-1 !text-lg"></i>',
            previous:   '<i class="bx bx-chevron-left !relative !top-1 !text-lg"></i>'
        },
    },
    dom: 't',
    columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0
    } ],
    select: {
        items: 'row',
        style:    'multi',
        selector: 'td:first-child'
    },

});