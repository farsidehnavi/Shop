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
let IsScreenOn=[true,true,true,true,true,true]
a=[1,2,3,4,5,6]
a.forEach(v=>document.querySelector('.p'+v).addEventListener('click',()=>{
    if(IsScreenOn[v-1]){
        document.querySelectorAll('.tf'+v).forEach(v=>v.classList.add('tf-off'))
        document.querySelectorAll('.i'+v).forEach(v=>v.classList.add('i-off'))
        IsScreenOn[v-1]=false
    }
    else {
        document.querySelectorAll('.tf'+v).forEach(v=>v.classList.remove('tf-off'))
        document.querySelectorAll('.i'+v).forEach(v=>v.classList.remove('i-off'))
        IsScreenOn[v-1]=true
    }
}))
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
        case(window.innerWidth<window.innerHeight/1.05):
            // document.querySelector('.phones').style.gridTemplateColumns='80vw'
            document.querySelector('.phones').style.gridTemplateColumns=window.innerHeight*0.45+'px'
            UpperMenuOnlyIconON()
            // alert(1)
            break
        case(window.innerWidth<window.innerHeight*1.46):
            // document.querySelector('.phones').style.gridTemplateColumns='35vw 35vw'
            document.querySelector('.phones').style.gridTemplateColumns=window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px'
            UpperMenuOnlyIconOff()
            // alert(2)
            break
        case(window.innerWidth<window.innerHeight*2):
            // document.querySelector('.phones').style.gridTemplateColumns='25vw 25vw 25vw'
            document.querySelector('.phones').style.gridTemplateColumns=window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px'
            // alert(3)
            break
        case(window.innerWidth<window.innerHeight*2.5):
            // document.querySelector('.phones').style.gridTemplateColumns='23vw 23vw 23vw 23vw'
            document.querySelector('.phones').style.gridTemplateColumns=window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px'
            // alert(4)
            break
        case(window.innerWidth<window.innerHeight*3):
            // document.querySelector('.phones').style.gridTemplateColumns='18vw 18vw 18vw 18vw 18vw'
            document.querySelector('.phones').style.gridTemplateColumns=window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px '+window.innerHeight*0.45+'px'
            // alert(5)
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