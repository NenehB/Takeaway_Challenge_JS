class Menu {
  constructor(dishes) {
  this.dishes = { Pasta: '£5', MacAndCheese: '£4', Kimchi: '£3', Pizza: '£5', Burger: '£3.5' };
  }
  list(){
    let items =  this.dishes
    let dish = []
    // iterate through key-value gracefully
    for (const [key, value] of Object.entries(items)) {
      dish.push(`${key} ${value}`); 
    }
    return dish.toString();
  }

}