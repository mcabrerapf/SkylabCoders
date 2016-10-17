describe("function drinkAbout", function() {
 
  it("should exist", function() {
    expect(drinkAbout).toBeDefined();
  });

  it("should be defined w/ one argument", function() {
    expect(drinkAbout.length).toBe(1);
  });

it("should return a string", function() {
    expect(typeof drinkAbout()).toBe("string");
  });

it("should return 'drink Toddy' if (13)", function() {
    expect(drinkAbout(13)).toBe("drink Toddy");
  });

it("should return 'drink coke' if (17)", function() {
    expect(drinkAbout(17)).toBe("drink coke");
  });

it("should return 'drink beer' if (18)", function() {
    expect(drinkAbout(18)).toBe("drink beer");
  });

it("should return 'drink whiskey' if (30)", function() {
    expect(drinkAbout(30)).toBe("drink whiskey");
  });


});


 