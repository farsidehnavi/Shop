window.onresize=()=>Resized()
let Situation=true
// PC=true
// Mobile=false
function Resized(){
    if((window.innerHeight>window.innerWidth)&&(Situation)){
        ResizeToMobile()
    }
    if((window.innerHeight<window.innerWidth)&&(!Situation)){
        ResizeToPC()
    }
}
function ResizeToMobile(){
    document.querySelector('.dlogin').classList.add('dlogin-mobile')
    document.querySelector('.bcorner').classList.add('bcorner-mobile')
    document.querySelector('.wcorner').classList.add('wcorner-mobile')
    Situation=false
}
function ResizeToPC(){
    document.querySelector('.dlogin').classList.remove('dlogin-mobile')
    document.querySelector('.bcorner').classList.remove('bcorner-mobile')
    document.querySelector('.wcorner').classList.remove('wcorner-mobile')
    Situation=true
}