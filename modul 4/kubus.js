function hitungKubus() {
    let sisi = parseFloat(document.getElementById("sisi").value);
    let output = document.getElementById("output");

    if (isNaN(sisi) || sisi <= 0) {
        output.innerHTML = "Mohon masukkan angka yang valid dan lebih dari 0.";
        return;
    }

    let volume = sisi ** 3;
    let luasPermukaan = 6 * (sisi ** 2);

    output.innerHTML = `
        Volume Kubus: ${volume.toFixed(2)} cm³ <br>
        Luas Permukaan Kubus: ${luasPermukaan.toFixed(2)} cm²
    `;
}
