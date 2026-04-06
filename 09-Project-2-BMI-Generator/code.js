
// phela kaam : input say value kese nikalty hein?
    // <input type="text" id="height" >
    // ab yahn hum submit ka event karen gy kun k aik form ko submit krna hai
const form = document.querySelector('form');  
        //yeh usecase mujhe empty value dega  is liye isy foem k ander use karen gy
//  const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(event){
    event.preventDefault()      // matlb default event ko rokna (form submit na ho jye)
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
     
    if(height === '' || height<= 0|| isNaN(height) ){
        results.innerHTML =`please give valid height ${height}`
    }
     else if(weight === '' || weight< 0|| isNaN(weight) ){
        results.innerHTML =`please give valid weight ${weight}`
    } else{
 const bmi = (weight / ((height/100) * (height/100))).toFixed(2)
       //bmi ko result mein show karwana hai
       results.innerHTML = `<span>${bmi}</span>`
    }
})