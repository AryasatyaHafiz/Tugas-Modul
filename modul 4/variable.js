function contohVar() {
  var x = 2;
  if (true) {
    var y = 8;
    console.log("Di dalam blok if (var y):", y); // Output: Di dalam blok if (var y): 8
  }
  console.log("Di luar blok if (var x):", x); // Output: Di luar blok if (var x): 2
  console.log("Di luar blok if (var y):", y); // Output: Di luar blok if (var y): 8
}

contohVar();
console.log("Di luar fungsi (var x):", typeof x); // Output: Di luar fungsi (var x): undefined
// console.log("Di luar fungsi (var y):", typeof y); // Akan menghasilkan error jika tidak dikomentari
