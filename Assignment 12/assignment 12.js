var list = document.getElementById("list");

firebase.database().ref("todos").on("child_added", function (data) {
    
    var li = document.createElement("li")
    var liText = document.createTextNode(data.val().value)
    li.appendChild(liText)
    li.className = "z"

    var ebtn = document.createElement("button")
    var etext = document.createTextNode("Edit")
    ebtn.setAttribute("onClick","edit(this)")
    ebtn.setAttribute("id",data.val().key)
    ebtn.className = "btn btn-dark width2 a"
    ebtn.appendChild(etext)
    li.appendChild(ebtn) 


    var dbtn = document.createElement("button")
    var dtext = document.createTextNode("Delete")
    dbtn.setAttribute("onClick","del(this)")
    dbtn.setAttribute("id",data.val().key)
    dbtn.className = "btn btn-danger width2 aa"
    dbtn.appendChild(dtext)
    li.appendChild(dbtn)
    
  
    list.appendChild(li)

    var space = document.createElement("hr")
    list.appendChild(space)
    
})

function add(){
    var todo = document.getElementById("todo")
    var key = firebase.database().ref("todos").push().key
    var addtodo = {
        value: todo.value,
        key: key
    }
    firebase.database().ref("todos").child(key).set(addtodo)
    todo.value="";
}

function delall(){
    firebase.database().ref("todos").remove()
    list.innerHTML="";
}
function del(a){
    firebase.database().ref("todos").child(a.id).remove()
    a.parentNode.nextSibling.remove() 
    a.parentNode.remove() 
}
function edit(a){

    var editval = prompt("Enter edit value",a.parentNode.firstChild.nodeValue)
    var edittodo = {
        value: editval,
        key: a.id
    }

    firebase.database().ref("todos").child(a.id).set(edittodo)
    a.parentNode.firstChild.nodeValue = editval   
}


