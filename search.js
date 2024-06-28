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
let IsScreenOn=[true,true,true]
a=[1,2,3]
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