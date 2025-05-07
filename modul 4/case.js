// Deklarasi beberapa variabel dengan perbedaan huruf kapital
var nama = "Aryasatya";
var Nama = "Hafiz";
var NAma = "Purnama";
// Menampilkan nilai dari masing-masing variabel
console.log(nama); 
console.log(Nama); 
console.log(NAma); 

// Mencoba mengakses variabel dengan penulisan yang berbeda
// console.log(nAm); // Akan menghasilkan error: Uncaught ReferenceError: nAm is not defined

// Contoh penggunaan keyword yang benar dan salah
var angka = 5;
while (angka > 0) { // Penulisan keyword 'while' yang benar
  console.log("Angka saat ini: " + angka);
  angka--;
}

// Contoh fungsi dengan perbedaan huruf kapital
function sapaPengguna(pengguna) {
  console.log("Halo, " + pengguna + "!");
}

function SapaPengguna(pengguna) {
  console.warn("Fungsi ini memiliki nama yang mirip tapi berbeda karena case.");
}

sapaPengguna("Aryasatya"); 
SapaPengguna("Hafiz"); 

