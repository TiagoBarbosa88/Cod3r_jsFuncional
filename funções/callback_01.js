function exec(fn, a, b) {
  return fn(a, b);
}

const somarNoTerminal = (a, b) => console.log(a + b);
const subtrairNoTerminal = (a, b) => console.log(a - b);
const subtrair = (x, y) => x - y;

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);
const r = exec(subtrair, 50, 25);

console.log(r);

const callback = () => console.log('Exec...');
setInterval(callback, 1000)

