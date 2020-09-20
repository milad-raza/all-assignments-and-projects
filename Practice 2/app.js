let change = () => {
    const image = document.querySelector("#image")
    if (image.getAttribute("src") == "images/icon-hamburger.svg"){
        image.setAttribute("src","images/icon-close.svg")  
    }
    else{
        image.setAttribute("src","images/icon-hamburger.svg")
    }
}