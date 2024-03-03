
export const table = new DataTable('#example', {
    ordering: false,
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
    columnDefs: [

        {
            className: 'select-checkbox',
            target: 0
        },
        {
            className: 'dtr-control arrow-left',
            orderable: false,
            target: 1
        }
    ],
    responsive: {
        details: {
            type: 'column',
            target: 1
        }
    },
    select: {
        items: 'row',
        style: 'multi',
        selector: 'td:first-child'
    },
    columns: [
        { data: '', title: '', class: '!w-[1rem] !min-w-[1rem] !text-sm select-checkbox'},
        { data: 'descripcion', title: 'Descripción', class: '!w-[12rem] !min-w-[12rem] !text-sm'},
        { data: 'topper', title: 'Topper', class: '' },
        { data: 'sku', title: 'Sku', class: '' },
        { data: 'formato', title: 'Formato', class: '' },
        { data: 'vigencia', title: 'Vigencia', class: '' },
        { data: 'marca', title: 'Marca', class: '' },
        { data: 'regular', title: 'Regular', class: '' },
        { data: 'scmr', title: 'Sin cmr', class: '' },
        { data: 'oferta', title: 'Oferta', class: '' },
        { data: 'ncuota', title: 'N cuota', class: '' },
        { data: 'cmens', title: 'C Mens', class: '' },
        { data: 'e', title: 'E', class: '' },
        { data: 'd', title: 'D', class: '' },
        { data: 'interes', title: 'Interes', class: '' },
    ],
});