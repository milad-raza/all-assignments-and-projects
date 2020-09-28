let login = () =>{

  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    function add(){
      
      // sender
      let sender = document.querySelector(".ul")
      sender.setAttribute("sender",user.displayName)

      //remove facebook button
      let button = document.querySelector(".btn")
      button.remove()
      
      //change theme
      var change = document.querySelector(".main")
      change.className = "newmain"

      // space
      let br = document.querySelector(".spa")
      br.classList.remove("hide")

      let br1 = document.querySelector(".spa1")
      br1.classList.remove("hide")

      let br2 = document.querySelector(".spa2")
      br2.classList.remove("hide")

      //get available user
      var allusers = firebase.database().ref('users');
      var heading = document.getElementById("heading")
      heading.innerHTML = "Available Users"

       allusers.on('child_added', function(snapshot) {
       let data = snapshot.val()
    
       var list = document.getElementById("list")
       var li = document.createElement("li")
       li.className = "available"
       li.setAttribute("onclick","mainapp(this)")

       var space = document.createElement("hr")
       space.className = "space"
       list.appendChild(space)

       var main = document.createTextNode(data.username)

      //  every user must have an email
      firebase.database().ref(`users/${user.displayName}`).once("value", snapshot => {
      
      if (snapshot.exists()){
        
      }

      else{
        //Add user to database
        let adduser = {
          username: user.displayName,
          email: user.email,
          image: user.photoURL
        }
        firebase.database().ref("users").child(user.displayName).set(adduser)
      }
    })
      
       if(user.displayName === data.username){
        li.remove()
        space.remove()
      }

      else{
        li.appendChild(main)
        list.appendChild(li)
      }  
  })
    }

    add()

  })
  
  .catch(function(error) {
    console.log(error.message)
   
  });
      
}
function mainapp(sendto){

  var heading = document.getElementById("heading")
  heading.remove();

  var list = document.getElementById("list")
  list.remove()
   
  let change = document.querySelector(".newmain")
  change.className = "newmain1"
  change.classList.remove("newmain")

  let name = document.querySelector(".chat")
  name.innerHTML = sendto.innerHTML

  // let br2 = document.querySelector(".spa2")
  // br2.remove()

  let inputdiv = document.querySelector(".inputdiv")
  let input = document.createElement("input")
  input.className = "form-control inp"
  input.setAttribute("type","text")
  input.setAttribute("sendto",sendto.innerHTML)
  input.id = "validationDefault01"
  input.setAttribute("placeholder","Your Message")
  inputdiv.appendChild(input)
  
  let buttondiv = document.querySelector(".buttondiv")

  let down = document.createElement("a")
  down.setAttribute("href","#down")
 

  let button = document.createElement("img")
  button.setAttribute("src","icons/send.png")
  button.className = "send"
  button.setAttribute("onclick",("send()"))
  down.appendChild(button)

  buttondiv.appendChild(down)


  let bg = document.querySelector(".list")
  bg.classList.remove("hide")

  // sender
  let ul = document.querySelector(".ul")
  sender = ul.getAttribute("sender")

  firebase.database().ref("messages/"+sender).on("child_added", function (data) {
    var list1 = document.getElementById("list1")

    var li = document.createElement("li")
    var message = document.createTextNode(data.val().msg)

    var p = document.createElement("p")
    var time = document.createTextNode(data.val().time)
  
    // checking for msg send or recieve
    if (data.val().sender === sender && data.val().sendto === sendto.innerHTML){
     
      if(data.val().sender === sender){
        li.className = "available1"
        li.appendChild(message)
        list1.appendChild(li)

        p.className = "p1"
        p.appendChild(time)
        list1.appendChild(p) 
      }


  console.log(data.val().sendto)
  console.log(sender)
    }
    else if(data.val().sendto === sender){
      li.className = "available2"
      li.appendChild(message)
      list1.appendChild(li)

      p.className = "p2"
      p.appendChild(time)
      list1.appendChild(p)
      }

    

    
    
    
    

     
    

    
  })

}

const send = () =>{
  let text = document.querySelector(".inp")

  
  if(text.value === ""){
    alert("Please Type Message")
  }
  else{


    // sendto
    sendto = text.getAttribute("sendto")

    // sender
    let ul = document.querySelector(".ul")
    sender = ul.getAttribute("sender")

    // time
    var time = new Date()
    var hours = time.getHours()
    var minutes = time.getMinutes()
    if(hours >= 12){
      var ampm = "PM"
    }
    else{
      var ampm = "AM"
    }
    hours = hours % 12
    if(hours < 10){
      hours = `0${hours}`
    }
    if(hours === "0"+0){
      hours = `12`
    }
    if(minutes < 10){
      minutes = `0${minutes}`
    }
    // add msg to firebase database
    let msg = {
      msg: text.value,
      sender: sender,
      sendto: sendto,
      time:`${hours}:${minutes} ${ampm}`
    }
    firebase.database().ref("messages").child(sendto).push(msg)
    firebase.database().ref("messages").child(sender).push(msg)

    text.value = ""

   

  }

  
} 

// let signout = () => {
//   firebase.auth().signOut()
//   .then(()=>{
//     console.log("signout")
//   })
//   .catch(()=>{
//     console.log("error")
//   })
// }
