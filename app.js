let smallimages=document.querySelectorAll(".smallphotos img")
let bigphoto=document.querySelector(".bigphoto img")
let currentsize=document.querySelector(".current-size span")
let numbers=document.querySelectorAll(".numbers div")

smallimages.forEach(item => {

    item.addEventListenner("click",()=>
    {
        bigphoto.src=item.src;
    })
})
 

numbers.forEach(item=>{
    item.addEventListener("click",()=>{
        currentsize.textContent=item.textContent;
    })
})
