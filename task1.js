var result = 0;
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);
for (var i = 1; i <= a; i++) {
    result += Math.pow(i, b);   
}

process.stdout.write(String(result));
