describe("cryptosquare", function() {
  // it("joins the words into a string", function() {
  //   expect(cryptosquare("a dog eats")).to.equal("adogeats");
  // });

  // it("returns the length of a given string (without counting spaces)", function() {
  //   expect(cryptosquare("a dog eats")).to.equal(8);
  // });

  it("returns the number of columns of the cryptosquare", function() {
    expect(cryptosquare("a dog eats")).to.equal(3);
  });

});
