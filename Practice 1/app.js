function cal(){
    var amount = document.querySelector(".center1").value
    var tip = document.querySelector(".center2").value
    var tip1 = (amount)*(tip/100)
    var total = parseInt(amount) +  parseInt(tip1) 
    var write = document.querySelector("#total")
    write.innerHTML = total
    var persons = document.querySelector(".center3").value
    var per = total/ persons
    var write1 = document.querySelector("#person")
    write1.innerHTML = per
}