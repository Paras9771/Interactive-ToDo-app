const inputvalue = document.getElementById("inputvalue");
const tasklist = document.getElementById("tasklist");
let localtodolsit = [];

const gettodolist = () => {
    return JSON.parse(localStorage.getItem("ToDolist"));
};

const savetodolist = () => {
    localStorage.setItem("ToDolist", JSON.stringify(localtodolsit));
};

const renderList = () => {
    tasklist.innerHTML = "";
    localtodolsit.forEach((task) => {
        const divElement = document.createElement("div");
        divElement.classList.add("main-todo-list");
        divElement.innerHTML = `<li>${task}</li> <button class="deletebtn">Delete</button>`;

         
        divElement.querySelector(".deletebtn").addEventListener("click", () => {
            localtodolsit = localtodolsit.filter(item => item !== task);
            savetodolist();
            renderList();
        });

        tasklist.append(divElement);
    });
};

const addtodolist = () => {
    const todolistvalue = inputvalue.value.trim();
    if (!todolistvalue) return;

    localtodolsit = gettodolist() || [];
    localtodolsit.push(todolistvalue);
    localtodolsit = [...new Set(localtodolsit)];
    savetodolist();
    renderList();
    inputvalue.value = "";
};

document.querySelector('.btn1').addEventListener('click', addtodolist);

// Load todos on page load
localtodolsit = gettodolist() || [];
renderList();
