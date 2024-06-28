EventAdder()
function EventAdder(){
    document.querySelector('.bback-up').addEventListener('click',()=>{CloseSignUp()})
    document.querySelector('.sign-up').addEventListener('click',()=>{OpenSignUp()})
    document.querySelector('.bback-in').addEventListener('click',()=>{CloseSignIn()})
    document.querySelector('.sign-in').addEventListener('click',()=>{OpenSignIn()})
}
function OpenSignUp(){
    document.querySelector('.sign-up-body').style.display='block'
    document.querySelector('.options').style.display='none'
}
function CloseSignUp(){
    document.querySelector('.sign-up-body').style.display='none'
    document.querySelector('.options').style.display='block'
}
function OpenSignIn(){
    document.querySelector('.sign-in-body').style.display='block'
    document.querySelector('.options').style.display='none'
}
function CloseSignIn(){
    document.querySelector('.sign-in-body').style.display='none'
    document.querySelector('.options').style.display='block'
}