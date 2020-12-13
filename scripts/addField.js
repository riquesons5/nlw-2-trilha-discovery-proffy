// Procurar o botão e adicionar o evento de click
document.querySelector("#add-time").addEventListener("click", cloneField)
// Quando clicar, executa essa ação
function cloneField() {
    // Busca os campos que deseja duplicar
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    // Identifica os inputs da div e logo em seguida limpa os valores
    const fields = newFieldContainer.querySelectorAll("input")

    fields.forEach(field => {
        field.value = ""
    })
    // Onde vai ser adicionado a copia
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}