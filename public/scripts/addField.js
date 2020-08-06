// Procurar o botão
document.querySelector("#add-time").addEventListener
// event click 
('click', cloneField)


// executar uma ação
function cloneField() {
    // duplicar os campos
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos 
        const fields = newFieldContainer.querySelectorAll('input')

        fields.forEach(function(field) {
            field.value = ""
        })

    // colocar na página
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    