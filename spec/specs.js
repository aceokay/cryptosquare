describe("cryptosquare", function() {
  // it("joins the words into a string", function() {
  //   expect(cryptosquare("a dog eats")).to.equal("adogeats");
  // });

  // it("returns the length of a given string (without counting spaces)", function() {
  //   expect(cryptosquare("a dog eats")).to.equal(8);
  // });

  it("returns a given sentence as a cryptosquare", function() {
    expect(cryptosquare("don't compare yourself to others, compare yourself to the person you were yesterday")).to.eql("drfcu hotoe toreu enyom spwrt oopee edcut alrra orhrf seyms eetoy peryo neals otys");
  });

});
