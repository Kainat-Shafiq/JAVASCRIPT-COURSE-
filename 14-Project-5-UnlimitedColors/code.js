// 1- generate a random color
const randomColor = function(){
    const hexa = '0123456789ABCDEF';
    let color ='#';
    for (let i = 0; i < 6; i++) {
       color += hexa[Math.floor(Math.random()*16)]   
    }
    return color;
}
 let intervalId
const startChangingColor= function(){
   if(!intervalId){
      intervalId = setInterval(changeColor,1000)
   }
  
    function changeColor(){
         document.body.style.backgroundColor = randomColor();
    }
}
const stopChangingColor= function(){
    clearInterval(intervalId);
  
}
document.querySelector('#Stop').addEventListener('click',stopChangingColor)
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#Stop').addEventListener('click',stopChangingColor)
