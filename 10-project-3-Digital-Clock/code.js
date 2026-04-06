const clock = document.querySelector('#clock')
//  const clock =document. getElementById('clock') yeh b likh sakty hein


// setInterval har 1 second baad repeat hota hai
setInterval(function(){
  let date = new Date();
//console.log(date.tolocaleTimeString());
clock.innerHTML = date.toLocaleTimeString()
},1000);