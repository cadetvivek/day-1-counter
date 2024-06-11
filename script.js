const counterValue = document.getElementById('counter-value');
const IncButton = document.getElementById('increment');
const decButton = document.getElementById('decrement')

let count =0
IncButton.addEventListener('click',()=>{
    count++
    counterValue.textContent=count;
})

decButton.addEventListener('click',()=>{
    
        count--
        counterValue.textContent=count;
    
})