const input = document.querySelector('.input')
const container = document.querySelector('.container')
const addButton = document.querySelector('.add')


function addTarefa(){
    const itemBox = document.createElement('div')
    itemBox.classList.add('item')

    const inputTask = document.createElement('input')
    inputTask.type = 'text'
    inputTask.disabled = true
    inputTask.value = input.value
    inputTask.classList.add('item-input')

    const editbtn = document.createElement('button')
    editbtn.classList.add('edit')
    editbtn.innerText = 'EDITAR'
    editbtn.addEventListener('click', () => editTarefa (inputTask, input.value))

    const removebtn = document.createElement('button')
    removebtn.classList.add('remove')
    removebtn.innerText = 'REMOVER'
    removebtn.addEventListener('click', () => removerTarefa (itemBox, input.value))

    container.append(itemBox)
    itemBox.append(inputTask)
    itemBox.append(editbtn)
    itemBox.append(removebtn)

    input.value = ''
    input.focus()
}

function editTarefa(input,tafera){
    input.disabled = !input.disabled

    // if(!input.disabled){
    //     input.value = 
    // }

}

function removerTarefa(itemBox, tafera){
    container.removeChild(itemBox)
}




addButton.addEventListener('click', addTarefa)
input.addEventListener('keydown',(e) =>{
    if(e.key === 'Enter'){
        addTarefa()
    }
})