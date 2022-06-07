const noSpace = require("./Remove  from String Spaces")

it("Testing first String should return a string with no spaces",  async() => {
    expect(noSpace("  Testing first    String   should   return a string with no spaces   ")).toBe("TestingfirstStringshouldreturnastringwithnospaces")

})