let products=document.querySelector(".products")
let menu=document.querySelector(".menu-icon")
let menuIcon=document.querySelector("#close")
menu.addEventListener("click",function(){
    if(products.classList.contains("add-products")){
        products.classList.remove("add-products")
        menuIcon.src="/images/menu.png"
    }
    else{
        products.classList.add("add-products")
        menuIcon.src="/images/close.png"
    }
})

let accountBtn=document.querySelector("#act")
let account=document.querySelector(".account-text")
let tog=document.querySelector("#tog")
accountBtn.addEventListener("click", function(){
    if(account.classList.contains("add-account")){
        account.classList.remove("add-account")
        tog.style.transform="rotate(0)"
    }
    else{
        account.classList.add("add-account")
        tog.style.transform="rotate(180deg)"
    }
 
})
let product=document.querySelector(".pro")
let pro=product.querySelectorAll("li")
let productMaterials=document.querySelectorAll(".health")
pro.forEach((product)=>{
    product.addEventListener("mouseover", function(e){
        let id=e.currentTarget.dataset.id
        const element=document.getElementById(id)
        if(id){
            productMaterials.forEach((product)=>{
                product.classList.remove("active")
            })
           element.classList.add("active")
        }
    })
})
pro.forEach((product)=>{
    product.addEventListener("mousedown", function(e){
        let id=e.currentTarget.dataset.id
        const element=document.getElementById(id)
        if(id){
           element.classList.remove("active")
        }
    })
})
// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let setCountDownInterval = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let flashSale= document.getElementById("flash-time")
 flashSale.innerHTML= `time-left: ${days}d: ${hours}h: ${minutes}m: ${seconds}s`
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    flashSale.innerHTML = "EXPIRED";
  }
}, 1000);

//setting for advertisement interval
let advert=document.querySelector(".advert")
let adverts=["/images/iphone ad.gif","/images/advertphone.gif","/images/advert.gif","/images/cosmetics advert.gif","/images/cosmetics.gif"]
window.addEventListener("load", function(){
    Display() 
})
 function Display(){
   let randomArray=Math.floor(Math.random()*adverts.length)
   advert.style.backgroundImage=`url(${adverts[randomArray]})`
}
setInterval(Display, 4000)
const slider= document.querySelectorAll(".shoe-container")
const btnleft= document.querySelectorAll(".btnleft")
const btnright= document.querySelectorAll(".btnright")

btnleft.forEach(function(btn){
    btn.addEventListener("click", function(e){
      let tag=e.currentTarget.parentElement
      console.log(tag);
      tag.scrollBy(350,0)
    })
})
const helpBtn=document.querySelector("#help-btn")
const helpSection=document.querySelector(".help")
helpBtn.addEventListener("click",(e)=>{
    e.preventDefault()
   helpSection.classList.toggle("add-help")
})

const livesec=document.querySelector(".livechat-section")
const liveBtn=document.querySelector("#livechat")
const closeBtn=document.querySelector(".close-live")
liveBtn.addEventListener("click", function(e){
    e.preventDefault()
    livesec.classList.add("add-right")
    helpSection.classList.remove("add-help")
})

closeBtn.addEventListener("click", function(){
    helpSection.classList.add("add-right")
    livesec.classList.remove("add-right")
})
let count=1
const it=document.querySelector(".it")
const contSale=document.querySelectorAll(".cart")
contSale.forEach((cont)=>{
   let btn=cont.querySelector("button")
   btn.addEventListener("click", ()=>{
       it.innerHTML=count
       it.style.display="block"
       count++
   })
})
