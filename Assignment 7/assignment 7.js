function getnum(number){
    var onclick = document.getElementById("onclick");
    onclick.value += number; 
}
function clearall(){
    var onclick = document.getElementById("onclick");
    onclick.value=""
    }
function fullresult(){
    var onclick = document.getElementById("onclick");
    onclick.value = eval(onclick.value)
}
function value4(){
    var onclick = document.getElementById("onclick");
    onclick.value = onclick.value.slice(0,-1)
}
function value5(){
    var onclick = document.getElementById("onclick");
    onclick.value = Math.pow(onclick.value,2)
}