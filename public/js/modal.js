
const overlay = document.getElementById('overlay')
const sectionModal = document.getElementById('section__modal')
const modal = document.getElementById('modal')

export function Modal(){
    sectionModal.classList.add('show')
    overlay.classList.add('show')
    modal.classList.add('active')
}

export function closeModal(){
    sectionModal.classList.remove('show')
    modal.classList.remove('active')
    overlay.classList.remove('show')
    ClearModal()
}

export function ClearModal(){
    $('#descripcion').val('')
    $('#sku').val('')
    $('#marca').val('')
    $('#oferta').val('')
    $('#regular').val('')
    $('#vigencia').val('')
    $('#topper').val('')
    $('#formato').val('')
}