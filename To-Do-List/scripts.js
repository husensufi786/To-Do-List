const todotext = document.getElementById('todotext');
const btn = document.getElementById('btn');
const ullistclass = document.getElementById('ullistclass');

let editTodo = null;

const addTodo =()=>
{
    const inputText = todotext.value.trim();
    if(inputText.length <=0){
        alert("You Must Add Something in a to-do");
        return false;
    }

    if(btn.value === "Update"){

        editTodo.target.previousElementSibling.innerHTML = inputText;
        btn.value = "Add";
        inputText = "";
    }
    else{

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = inputText;
        li.appendChild(p);

        const editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        li.appendChild(editBtn);
    
        editBtn.style.margin = "6px";
        editBtn.style.padding = "2px";
        editBtn.classList.add("btn1", "editbtn");

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Remove";
        li.appendChild(deleteBtn);
    
        deleteBtn.style.margin = "6px";
        deleteBtn.style.padding = "2px";
         deleteBtn.classList.add("btn1" , "deletebtn");

        ullistclass.appendChild(li);
        todotext.value = "";

        saveTodo(todotext);
    }

}

const updateTodo = (e) =>{
   if(e.target.innerHTML === "Remove")
    {
        ullistclass.removeChild(e.target.parentElement);
    
   }

   if(e.target.innerHTML === "Edit")
    {
        todotext.value = e.target.previousElementSibling.innerHTML;
        todotext.focus();
        btn.value = "Update";
        editTodo=e;

   }

}

const saveTodo = (todo) =>{
    let todos = [];
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
   

}




btn.addEventListener('click',addTodo);

ullistclass.addEventListener('click',updateTodo);