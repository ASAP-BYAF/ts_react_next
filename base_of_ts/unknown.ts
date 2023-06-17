const x: unknown = 123;
const y: unknown = "abc";

if (typeof x === "number") {
  console.log(x.toFixed(1));
}

if (typeof y === "string") {
  console.log(y.toLowerCase());
}
