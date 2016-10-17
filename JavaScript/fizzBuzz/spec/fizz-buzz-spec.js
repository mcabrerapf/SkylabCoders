describe("function fizzBuzz", function() {


  it("should exist", function() {
     expect(fizzBuzz).toBeDefined();
  });

  it("should return an array", function() {
     expect(typeof fizzBuzz()).toBe("object");
  });

  it("array length = 100", function() {
     expect(fizzBuzz().length).toBe(100);
  });

  it("array position is divisible by 3 print Fizz", function() {
    var result = fizzBuzz();
     expect(result[5]).toBe("Fizz");
  });

  it("array position is divisible by 5 print Buzz", function() {
    var result = fizzBuzz();
     expect(result[9]).toBe("Buzz");
  });

it("array position is divisible by 5 and 3 print FizzBuzz", function() {
    var result = fizzBuzz();
     expect(result[14]).toBe("FizzBuzz");
  });

  
});
