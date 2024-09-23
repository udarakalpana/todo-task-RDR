
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

const taskForm = document.getElementById('task-add-form')
const taskInput = document.getElementById('task-input')
const taskAddBtn = document.getElementById('task-add-btn')
const taskList = document.getElementById('task-list')


taskAddBtn.addEventListener('click', () => {
    const task = taskInput.value

    if (task) {
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTasksList()
        taskInput.value = ''

    }
})

function renderTasksList()  {
    taskList.innerHTML = ''
    tasks.map((task, index) => {
       const listItem = document.createElement('li')
        listItem.className = 'list-group-item mt-2 d-flex justify-content-between'
        listItem.innerHTML = `${task}<button type='button' data-index='${index}' class="btn btn-primary">Remove</button>`
        taskList.appendChild(listItem)
    })
}

taskList.addEventListener('click', function (event) {
    const index = event.target.getAttribute('data-index')
    tasks.splice(index, 1)
    renderTasksList()
})

console.log(tasks)
renderTasksList()


