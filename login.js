// window.onresize=()=>Resized()
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
// Resized()
ResizeToPC()
// BACKEND
EventAdder()
function EventAdder(){
    document.querySelector('.submit-up').addEventListener('click',()=>{SubmitUp()})
    document.querySelector('.submit-in').addEventListener('click',()=>{SubmitIn()})
}
let Accounts=[['A','1'],['B','2'],['C','3']]
function SubmitUp(){
    if(document.querySelector('.user-up').value){
        if(document.querySelector('.pass-up').value){
            Accounts.push([document.querySelector('.user-up').value,document.querySelector('.pass-up').value])
        }
        else{
            document.querySelector('.pass-up').style.borderColor='red'
        }
    }
    else{
        document.querySelector('.user-up').style.borderColor='red'
    }
}
function SubmitIn(){
    if(document.querySelector('.user-in').value){
        if(document.querySelector('.pass-in').value){
            if((String(document.querySelector('.user-in').value)=='sh0p')&&(String(document.querySelector('.pass-in').value)=='sh0p')){
                window.open('admin.html',name='_parent')
            }
            else{
                if(Accounts.some(a=>a.every((element,index)=>element==[String(document.querySelector('.user-in').value),String(document.querySelector('.pass-in').value)][index]))){
                    window.open('search.html',name='_parent')
                }
                else{
                    alert('Incorrect username or password !')
                }
            }
        }
        else{
            document.querySelector('.pass-in').style.borderColor='red'
        }
    }
    else{
        document.querySelector('.user-in').style.borderColor='red'
    }
}