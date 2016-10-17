describe("function gradeBook", function() {


  it("should exist", function() {
     expect(gradeBook).toBeDefined();
  });

    it("should have three parameters ", function() {
     expect(gradeBook.length).toBe(3);
  });

  it("should return string ", function() {
     expect( typeof gradeBook() ).toBe("string");
  });

  it("should return string one character ", function() {
     expect( gradeBook(1,2,3).length ).toBe(1);
  });

    it("should return average of par as a letter ", function() {
     expect( gradeBook(95,95,95)).toBe("A");
  });

     it("should return B  if average is below 90 ", function() {
     expect( gradeBook(82,82,82)).toBe("B");
  });

      it("should return C  if average is below 80 ", function() {
     expect( gradeBook(72,72,72)).toBe("C");
  });
  
   it("should return D if average is below 70 ", function() {
     expect( gradeBook(62,62,62)).toBe("D");
  });

it("should return F if average is below 60 ", function() {
     expect( gradeBook(52,52,52)).toBe("F");
  });

it("if parameter is bigger than 100 return X ", function() {
     expect( gradeBook(102,52,52)).toBe("X");
  });

});
