// Procurar o botão
document.querySelector('#add-time')
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar ação
function cloneField() {
    // Duplicar os campos
    const newFieldCointainer = document.querySelector('.schedule-item').cloneNode(true)

    // Selecionar os campos
    const fields = newFieldCointainer.querySelectorAll('input')
    
    // Para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ""
    })

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldCointainer)
}