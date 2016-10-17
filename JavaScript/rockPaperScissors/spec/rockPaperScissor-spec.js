describe("function rockPaperScissors", function() {


  it("should exist", function() {
     expect(game.rockPaperScissors).toBeDefined();
  });

  it("should return a string", function() {
     expect(typeof game.rockPaperScissors("rock","rock")).toBe("string");
  });

  it("if a player doesnt input a string show an ERROR", function() {
     expect(game.rockPaperScissors(1,3)).toBe("ERROR!!!");
  });

  it("it should take two parameters", function() {
     expect(game.rockPaperScissors.length).toBe(2);
  });
   it("return error if either player enters anything other than a string", function() {
     expect(game.rockPaperScissors("rock",123)).toBe("ERROR!!!");
  });
  it("it should generate a random choice if there is a parameter missing and the game should continue", function() {
     expect(game.rockPaperScissors("rock")).not.toBe("ERROR!!!");
  });
   it("it should keep a counter of who is winning in the game object", function() {
    expect(typeof game.winner()).toBe("string");
  });

});
