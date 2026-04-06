
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);                 // event aik action hota hai jesee click, mouse move karna etc
        console.log(event.target);         // or target humy yeh batata hai k exact kis element par event hua hai
      if(event.target.id ==='grey'){
        body.style.background = 'grey'
      } 
      if(event.target.id ==='white'){
        body.style.background = 'white'
      } 
      if(event.target.id ==='blue'){
        body.style.background = 'blue'
      } 
      if(event.target.id ==='yellow'){
        body.style.background = 'yellow'
      } 
       if(event.target.id ==='pink'){
        body.style.background = 'pink'
      } 
      
        
    })
})
