// CODES FOR DESINE OF PHONES !

setInterval(()=>RefreshTime(),500)
function RefreshTime(){
    document.querySelectorAll('.time').forEach(v=>v.innerText=Date().split(' ',5)[4])
    document.querySelectorAll('.time-off').forEach(v=>v.innerText=Date().split(' ',5)[4])
}
if(navigator.getBattery()){
    setInterval(()=>RefreshBatteryPersentage(),15000)
    RefreshBatteryPersentage()
}
function RefreshBatteryPersentage(){
    navigator.getBattery()
    .then(function(battery) {
        document.querySelectorAll('.battery-percentage').forEach(v=>v.innerText=String(battery.level*100).split('.',1)+'%')
    })
}
RefreshDate()
function RefreshDate(){
    document.querySelectorAll('.date').forEach(v=>v.innerText=Date().slice(0,15))
}
if(Date().split(' ',5)[4].split(':',1)[0]==23){
    setInterval(()=>RefreshDate(),120000)
}
else{
    setInterval(()=>RefreshDate(),3600000)
}

// CODES FOR RESPONSIVE PAGE !

window.onresize=()=>RefreshPageGrid()
RefreshPageGrid()
function RefreshPageGrid(){
    switch (true){
        case(document.querySelector('.right-section').clientWidth<document.querySelector('.right-section').clientHeight/1.05):
            document.querySelector('.phones').style.gridTemplateColumns=document.querySelector('.right-section').clientHeight*0.45+'px'
            UpperMenuOnlyIconON()
            break
        case(document.querySelector('.right-section').clientWidth<document.querySelector('.right-section').clientHeight*1.46):
            document.querySelector('.phones').style.gridTemplateColumns=document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px'
            UpperMenuOnlyIconOff()
            break
        case(document.querySelector('.right-section').clientWidth<document.querySelector('.right-section').clientHeight*2):
            document.querySelector('.phones').style.gridTemplateColumns=document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px'
            break
        case(document.querySelector('.right-section').clientWidth<document.querySelector('.right-section').clientHeight*2.5):
            document.querySelector('.phones').style.gridTemplateColumns=document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px'
            break
        case(document.querySelector('.right-section').clientWidth<document.querySelector('.right-section').clientHeight*3):
            document.querySelector('.phones').style.gridTemplateColumns=document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px '+document.querySelector('.right-section').clientHeight*0.45+'px'
            break
    }
}
function UpperMenuOnlyIconON(){
    document.querySelectorAll('.pmenu-item').forEach(v=>v.classList.add('pmenu-item-onlyicon'))
    document.querySelectorAll('.menu-item').forEach(v=>v.classList.add('menu-item-onlyicon'))
}
function UpperMenuOnlyIconOff(){
    document.querySelectorAll('.pmenu-item').forEach(v=>v.classList.remove('pmenu-item-onlyicon'))
    document.querySelectorAll('.menu-item').forEach(v=>v.classList.remove('menu-item-onlyicon'))
}

// BACKEND !

let IsLeftSectionOpen=false
function OpenLeftSection(){
    document.querySelector('.left-section').style.display='block'
    document.querySelector('.right-section').classList.add('right-section-leftSectionOpened')
    RefreshPageGrid()
    IsLeftSectionOpen=true
}
function CloseLeftSection(){
    document.querySelector('.left-section').style.display='none'
    document.querySelector('.right-section').classList.remove('right-section-leftSectionOpened')
    RefreshPageGrid()
    IsLeftSectionOpen=false
}
function TurnOnPhoneScreen(){
    document.querySelectorAll('.tf'+v).forEach(v=>v.classList.add('tf-off'))
    document.querySelectorAll('.i'+v).forEach(v=>v.classList.add('i-off'))
}
function TurnOffPhoneScreen(){
    document.querySelectorAll('.tf'+v).forEach(v=>v.classList.remove('tf-off'))
    document.querySelectorAll('.i'+v).forEach(v=>v.classList.remove('i-off'))
}
// let IsScreenOn=[true,true,true,true,true,true]
// a=[0,1,2,3,4,5]
// a.forEach(v=>document.querySelector('.p'+v).addEventListener('click',()=>{
//     if(IsScreenOn[v]){
//         TurnOnPhoneScreen()
//         IsScreenOn[v]=false
//         OpenLeftSection()
//     }
//     else {
//         TurnOffPhoneScreen()
//         IsScreenOn[v]=true
//         CloseLeftSection()
//     }
// }))
const OrderHard=[
    ['a.png','MakeUp Brush'],
    ['b11.png','MakeUp Brush type 2'],
    ['brush-3.png','MakeUp Brush type 3']
]
i=0
do{
    document.querySelector('.phones').innerHTML+=`<div class="phone p${i}">
    <div class="notification-bar-full">
    <p class="time i${i}"></p>
    <div class="enotification-bar"></div>
    <div class="notification-bar">
    <p class="time-off tf${i}"></p>
    <img class="wifi i${i}" src="icons/wifi/wifi-white.svg">
    <p class="battery-percentage i${i}"></p>
    <img class="ibattery i${i}" src="icons/battery/battery-white.svg">
    </div>
    </div>
    <img class="iphone i${i}" src="icons/${OrderHard[i][0]}">
    <p class="order-name i${i}">${OrderHard[i][1]}</p>
    <p class="order-name date tf0"></p>
    <hr class="right-hr">
    </div>`
    // document.querySelector('.p'+i).addEventListener('click',()=>{ItemClicked(i)})
    i++
}while(i<OrderHard.length)
i=0
do{
    document.querySelector('.phones').innerHTML+='<div class="ephones"></div>'
    i++
}while(i<3)
document.querySelectorAll('.phone').forEach((v,k)=>v.addEventListener('click',()=>ItemClicked(k)))
function ItemClicked(who){
    if(!IsLeftSectionOpen){
        OpenLeftSection()
    }
    document.querySelector('.iorder').src='icons/'+OrderHard[who][0]
    document.querySelector('.fp').innerText=OrderHard[who][1]
}