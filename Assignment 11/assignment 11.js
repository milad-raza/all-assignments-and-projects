var allQuestions = [{
   question: "Q1. RAM stands for?",
   answer: "A. random access memory",
   options:[
      "A. random access memory",
      "B. random actual memory",
      "C. random access money",
      "D. read actual memory"
   ]
},
{
   question: "Q2. DOM stands for?",
   answer: "A. document object model",
   options:[
      "A. document object model",
      "B. document object memory",
      "C. document object money",
      "D. document obtain memory"
   ]
},
{
   question: "Q3. ROM stands for?",
   answer: "A. read only memory",
   options:[
      "A. read only memory",
      "B. random only memory",
      "C. random object memory",
      "D. read obtain memory"
   ]
}
]

var count = 0;
var score = 0;

function display(){
   var getName = document.getElementById("getName").value
   if(getName.length == "0"){
   alert("Name Is Required")
   }
   else{
   var getName = document.getElementById("getName").value
   var box = document.getElementById("box")
   box.className = "hide"
   var bg = document.getElementById("bg")
   bg.className = "black"
   var hide = document.getElementById("hide")
   hide.classList.remove("hide")
   var name = document.getElementById("name")
   name.innerHTML = "Hello, "+ getName

   remove()
   //Question
      var ques = document.getElementById("ques")
      var option = document.getElementsByClassName("option")
      var hideit = document.getElementById("hideit")
      var retry = document.getElementById("retry")
      if(count >=allQuestions.length){
      ques.innerHTML = "Your Score is "+score
      
     hideit.remove()
     retry.removeAttribute("class")

     
     btn = document.getElementById("next")
     btn.remove()
   }

   if(count <= allQuestions.length){
   ques.innerHTML = allQuestions[count].question

   for(var i = 0; i<option.length; i++){ 
   option[i].innerHTML =  allQuestions[count].options[i] 
   }
   }
   count++;
   
   
}
}


function active(a){
   remove()
   a.classList.add("active")
   check()
   function check(){
      if((a.innerHTML === allQuestions[0].answer) && (score == 0)){
         score += 10
      }
      else if((a.innerHTML === allQuestions[1].answer) && (score == 10 || score == 0)){
         score += 10
      }
      else if((a.innerHTML === allQuestions[2].answer) && (score == 20 || score == 10 || score == 0)){
         score += 10
      }
   
}

}



function remove(){
   var active = document.getElementsByClassName("active")
   for(i=0; i<active.length; i++){
      active[i].classList.remove("active")
   }
}




