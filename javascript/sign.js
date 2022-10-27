const firstName=document.querySelector("#first")
const lastName=document.querySelector("#last")
const emailName=document.querySelector("#emaill")
const psw=document.querySelector("#psw")
const cpsw=document.querySelector("#cpsw")
const pNum=document.querySelector("#phname")
const form2=document.querySelector("#form2")
const seeP=document.querySelector(".seen")
    seeP.addEventListener("click",()=>{
        if(psw.getAttribute("type")==="password"){
            psw.setAttribute("type", "text")
            seeP.src="/images/see-p.png"
        }
        else{
            psw.setAttribute("type", "password")
            seeP.src="/images/hide.png"
        }
    })
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    checkInputValidation()
})

function validatePhoneNumber(input_str) {
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_str);
  }
  const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
   const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
  function checkInputValidation(){
    const nameval=firstName.value.trim()
    const lastval=lastName.value.trim()
    const emailval=emailName.value.trim()
    const pswval=psw.value.trim()
    const cpswval=cpsw.value.trim()
    const pNumval=pNum.value.trim()
    if(nameval===""){
        setError(firstName,"please enter your first name")
    }
    else{
        setSuccess(firstName, "")
    }
    if(lastval===""){
        setError(lastName,"please enter your last name")
    }
    else{
        setSuccess(lastName, "")
    }
    if(pswval===""){
        setError(psw,"you must create a password")
    }
    else if(!isPasswordSecure(pswval)){
        setError(psw,"password is not secure")
    }
    else{
        setSuccess(psw, "")
    }
    if(cpswval===""){
        setError(cpsw,"please confirm password")
    }
    else if(cpswval !==pswval){
        setError(cpsw,"password does not match")
    }
    else{
        setSuccess(cpsw, "")
    }
    if(emailval===""){
        setError(emailName,"email should not be empty")
    }
    else if(!isEmailValid(emailval)){
        setError(emailName,"not a valid email")
    }
    else{
        setSuccess(emailName,"")
    }
    if(pNumval===""){
        setError(pNum,"enter your phone number")
    }
    else if(!validatePhoneNumber(pNumval)){
        setError(pNum,"not a valid phone number")
    }
    else{
        setSuccess(pNum,"")
    }
}
function setError(input,message){
 const formControl=input.parentElement
 const errorMe=formControl.querySelector(".error")
 errorMe.innerText=message
 formControl.classList.remove("success")
 formControl.classList.add("error")

}
function setSuccess(input,message){
    const formControl=input.parentElement
    const errorMe=formControl.querySelector(".error")
    errorMe.innerText=message
    formControl.classList.add("success")
    formControl.classList.remove("error")
   
   }