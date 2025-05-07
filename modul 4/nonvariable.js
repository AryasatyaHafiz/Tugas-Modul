function contohTanpaVar() {
    z = 13;
    if (true) {
      w = 24;
      console.log("Di dalam blok if (tanpa var w):", w); // Output: Di dalam blok if (tanpa var w): 24
    }
    console.log("Di luar blok if (tanpa var z):", z); // Output: Di luar blok if (tanpa var z): 13
    console.log("Di luar blok if (tanpa var w):", w); // Output: Di luar blok if (tanpa var w): 24
  }
  