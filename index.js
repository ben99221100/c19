let code = prompt("הכנס קוד:")

while (code != "abc123") {
    code = prompt("קוד שגוי, נסה שוב:")
}


let taskElement = document.getElementById("taskId")
let container = document.getElementById("container")
let tasks = []

function add() {
    tasks.push(taskElement.value)

    container.innerHTML = ""

    for(let i=0; i < tasks.length; i++) {
        container.innerHTML += `<p> ${tasks[i]} </p>`  
    }

    taskElement.value = ""

}

function updateBackground() {
    let colorElement = document.getElementById("colorId")
    document.body.style.backgroundColor = colorElement.value
}