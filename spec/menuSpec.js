describe('check if I want to order something', function(){


  it('list of dishes with prices', function(){
    menu = new Menu();
    console.log(menu.list());
    expect(menu.list()).toContain("Pasta £5");
    expect(menu.list()).toContain("Kimchi £3");
  })
  it('list of dishes with prices', function(){
    menu = new Menu();
    console.log(menu.list());
    expect(menu.list()).toContain("Kimchi £3");
  })

})