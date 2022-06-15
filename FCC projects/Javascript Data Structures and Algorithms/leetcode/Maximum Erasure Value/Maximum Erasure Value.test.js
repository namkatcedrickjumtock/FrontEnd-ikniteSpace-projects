const maxSubArray = require("./Maximum Erasure Value.js")

it('should be returning true', () => {
    expect(maxSubArray([4, 2, 4, 5, 6])).toBe(17)
    expect(maxSubArray([5, 2, 1, 2, 5, 2, 1, 2, 5])).toBe(8)
});