const assert = require("assert");
const ramonesOrdered = require("../lib/ramones");

const johnny = "Johnny Ramone"
const deedee = "DeeDee Ramone"
const joey = "Joey Ramone"
const tommy = "Tommy Ramone"

const ramonesArray = [johnny, deedee, joey, tommy]

describe("ramonesOrdered", () => {
  it("debe retornar el Array ordenado alfabéticamente", () => {
    assert.strictEqual(ramonesOrdered(ramonesArray), ramonesArray.sort());
  });
});
