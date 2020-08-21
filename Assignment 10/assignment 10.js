var list = document.getElementById("list");

function add(){
    var todo = document.getElementById("todo")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)
    li.className = "z"

    var ebtn = document.createElement("button")
    var etext = document.createTextNode("Edit")
    ebtn.setAttribute("onClick","edit(this)")
    ebtn.className = "btn btn-dark width2 a"
    ebtn.appendChild(etext)
    li.appendChild(ebtn)


    var dbtn = document.createElement("button")
    var dtext = document.createTextNode("Delete")
    dbtn.setAttribute("onClick","del(this)")
    dbtn.className = "btn btn-danger width2 aa"
    dbtn.appendChild(dtext)
    li.appendChild(dbtn)
    
  
    list.appendChild(li)

    var space = document.createElement("hr")
    list.appendChild(space)
    
    todo.value="";


}

function delall(){
    list.innerHTML="";
}
function del(a){
    a.parentNode.nextSibling.remove() 
    a.parentNode.remove() 
}
function edit(a){
    var editval = prompt("Enter edit value",a.parentNode.firstChild.nodeValue)
    a.parentNode.firstChild.nodeValue = editval   
}


