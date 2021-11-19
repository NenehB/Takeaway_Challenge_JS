describe('check if I want to order something', function(){

  beforeEach(function(){
    menu = new Menu();
  });

  it('list of dishes with prices', function(){
    expect(menu.listOfDish().toString()).toContain("Pasta");
  })

  it('list of dishes with prices', function(){
    expect(menu.listOfDish().toString()).toContain("Kimchi");
  })

  it('should be able to select several available dishes', function(){
    menu.choiceOfDish("Pasta")
    menu.choiceOfDish("Kimchi")
    expect(menu.choiceOfDish('Chips')).toEqual(['Pasta', 'Kimchi', 'Chips'])
  })

})