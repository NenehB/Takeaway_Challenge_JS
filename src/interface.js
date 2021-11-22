document.addEventListener("DOMContentLoaded", () => {
  
  
  const menu = new Menu()
 

  document.querySelector('#Pasta').addEventListener('click', () => { 
    menu.choiceOfDish('Pasta');
    document.querySelector('#price').innerText = menu.total_order(); 
  })


})