// selecting side navbar, mennuicon

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("close-nav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
var productContainer=document.getElementById("Product-container")
var search=document.getElementById("search")
var productList=productContainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()

    for(count=0;count<productList.length;count++){
        var productName=productList[count].querySelector("p").textContent
        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }   
    }
})