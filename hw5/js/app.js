const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const deleteButton = document.getElementById('create_button')
const editButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const buttonsDiv = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        deleteButton.setAttribute('class', 'deleteButton')
        editButton.setAttribute('class', 'editButton')
        buttonsDiv.setAttribute('class', 'buttonsDiv')
        div.setAttribute('class', 'block_text')

        deleteButton.innerHTML = "DELETE"
        editButton.innerHTML = "EDIT"
        text.innerHTML = input.value

        deleteButton.onclick = () => div.remove()
        editButton.onclick = () => {
            let editedText = prompt("EDIT: ${text.innerText}" ).trim()
            editedText === "" ? text.innerText : text.innerText = editedText
        }

        buttonsDiv.append( editButton, deleteButton)
        div.append(text, buttonsDiv)
        todoList.prepend( div)
    }
    input.value = ''
}

createButton.onclick = () => createTodo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? createTodo() : false)
