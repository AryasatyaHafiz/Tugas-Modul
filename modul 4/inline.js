function showAlert() {
    alert("Tombol Ini diklik");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const judul = document.getElementById("judul");
  
    judul.addEventListener("mouseover", function () {
      this.style.color = "blue";
    });
  });
  
  function ubahTeks(elemen) {
    elemen.textContent = "Teks Ini Berubah";
  }
  