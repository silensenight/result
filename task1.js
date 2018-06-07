const i = parseFloat(process.argv[2]);
const a = parseFloat(process.argv[3]);
const b = parseFloat(process.argv[4]);

let i10 = parseInt(i, a);
let ib = i10.toString(b);

process.stdout.write(ib);