// Mengubah isi elemen dengan id="demo"
document.getElementById("demo").innerHTML = "Teks ini diubah oleh JavaScript dari file eksternal!";

// Menampilkan pesan di konsol browser
console.log("Halo dari file script.js!");

// Membuat sebuah fungsi sederhana
function sapa(nama) {
  alert("Halo, " + nama + "!");
}

// Memanggil fungsi sapa dengan argumen "Aryasatya" setelah 3 detik
setTimeout(function() {
  sapa("Aryasatya");
}, 3000);
