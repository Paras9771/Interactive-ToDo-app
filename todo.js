const inputvalue = document.getElementById("inputvalue");
const mybutton = document.querySelector('.todo-list-elem');

let localtodolsit = [];

const gettodolist = () => {
     return JSON.parse(localStorage.getItem("ToDolist"))
}

const addtodolist = () => {

    const todolistvalue = inputvalue.value.trim();

    localtodolsit = gettodolist() || [];

    localtodolsit.push(todolistvalue);
    localtodolsit = [...new Set(localtodolsit)] 
    console.log(localtodolsit)
    localStorage.setItem("ToDolist", JSON.stringify(localtodolsit))

   const divElement = document.createElement("div")
   divElement.classList.add("main-todo-list")
   divElement.innerHTML = `<li>${inputvalue.value}</li> <button class="deletebtn">Delete</button>`
   tasklist.append(divElement)
}

document.querySelector('.btn1').addEventListener('click', () => {
    addtodolist();
})