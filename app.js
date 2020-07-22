
//  Delete Button

var delBtn = document.querySelector(".todo-list");
delBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
        li = e.target.parentElement;
        li.parentElement.removeChild(li)
    }
})


//  Edit Button

var etdBtn = document.querySelector('.todo-list');
etdBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-item")) {

        // Hide title
        var title = e.target.parentElement.firstElementChild;
        title.style.display = "none";

        // create input field
        var inp = document.createElement('input');
        inp.value = title.textContent;
        inp.classList.add('edit')
        e.target.parentElement.prepend(inp);

        // creating edit ok button
        var icon = document.createElement('i');
        icon.classList.add("fa", "fa-check-circle", "list-item", "ok")
        icon.setAttribute("aria-hidden", true)
        e.target.parentElement.appendChild(icon)

        // delete edit button
        var editIcon = e.target;
        editIcon.parentElement.removeChild(editIcon);

    }
})


// edit Done

var etdOk = document.querySelector('.todo-list');
etdOk.addEventListener("click", (e) => {
    if (e.target.classList.contains("ok")) {

        // delete input field
        var inp = e.target.parentElement.firstElementChild
        var value = inp.value;
        inp.parentElement.removeChild(inp)

        // update title value
        var title = e.target.parentElement.firstElementChild
        title.textContent = value
        title.style.display = "inline"
        e.target.parentElement.prepend(title)

        // edit icon
        var icon = document.createElement('i');
        icon.classList.add("fa", "fa-pencil", "list-item", "edit-item")
        icon.setAttribute("aria-hidden", true)
        e.target.parentElement.appendChild(icon)

        // Delete edit ok button
        var editIcon = e.target;
        editIcon.parentElement.removeChild(editIcon);
    }
})



var addTask = document.querySelector("#Add-task");
addTask.addEventListener('submit', (e) => {
    e.preventDefault()
    var ul = document.querySelector(".todo-list")
    var addBox = document.querySelector(".add-box");

    // creating li
    var li = document.createElement("li")
    if (addBox.value !== "") {
        // creating title
        var span = document.createElement("span");
        var val = addBox.value;

        span.textContent = val;
        span.classList.add("name");
        li.appendChild(span)

        // creating delete icon
        var iconDel = document.createElement('i');
        iconDel.classList.add("fa", "fa-trash-o", "list-item", "del-btn")
        iconDel.setAttribute("aria-hidden", true)
        li.append(iconDel)

        // creating edit icon 
        var iconEdt = document.createElement('i');
        iconEdt.classList.add("fa", "fa-pencil", "list-item", "edit-item")
        iconEdt.setAttribute("aria-hidden", true)
        li.append(iconEdt)

        // appending li in ul
        ul.appendChild(li)

        addBox.value = ""

    }
})


var delAll = document.querySelector(".delete-all button");
delAll.addEventListener('click', (e) => {
    var ul = document.querySelector(".todo-list");
    ul.innerHTML = ""
})

var search = document.querySelector(".search-box");
search.addEventListener("keyup", (e) => {
    var val = e.target.value;
    var liList = document.querySelectorAll(".todo-list li")
    Array.from(liList).forEach((li) => {
        
        var title = li.firstElementChild.textContent

        if ((title.toLowerCase()).indexOf(val.toLowerCase()) !== -1){
            li.style.display = "block"
        }else{
            li.style.display = "none"
        }
    });
})