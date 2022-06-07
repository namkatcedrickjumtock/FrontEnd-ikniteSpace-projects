const ghostBusters = require("./Ghostbusters (whitespace removal)")


it('All white Spaces should me removed from the inputed String', () => {
    expect(ghostBusters("Factor y")).toBe("Factory")
});
it('All white Spaces should me removed from the inputed String', () => {
    expect(ghostBusters("BusStation")).toBe("You just wanted my autograph didn't you?")
});
it('All white Spaces should me removed from the inputed String', () => {
    expect(ghostBusters("O  f fi ce")).toBe("Office")
});
  