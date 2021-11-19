class Menu {
  constructor(dishes) {
  this.dishes = { Pasta: '5', MacAndCheese: '4', Kimchi: '3', Pizza: '5', Burger: '3.5', Chips: '1.50' };
  this.list_of_dish = []
}
  listOfDish(){
    let items =  this.dishes
    let dish = []
    for (const [key, value] of Object.entries(items)) {
      dish.push([`${key}`, `${value}`]); 
    }
    return dish;
  }
  choiceOfDish(food_choice){
    this.list_of_dish.push(food_choice)
     return this.list_of_dish;
  }

  total_order(){
    let dishAndPrices = this.dishes
    let customer_choice = this.list_of_dish
    let price = 0
    for (let x in customer_choice){
      for (const [key, value] of Object.entries(dishAndPrices)) {
        if (customer_choice[x] == `${key}`){
            price += parseInt(`${value}`)
        }
      }
    }
    return price
  }
    

}

menu = new Menu();
console.log(menu.total_order());