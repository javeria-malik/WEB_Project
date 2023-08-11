burger=document.querySelector(".burger")
navbar=document.querySelector(".navbar")
rightNav=document.querySelector(".rightNAv")
navList=document.querySelector("navList")



burger.addEventListener("click",()=>{
    rightNavnav.classList.toggle("v-class-rep");
    navList.classList.toggle("v-class-rep");
    navbar.classList.toggle("h-class-rep");

})
