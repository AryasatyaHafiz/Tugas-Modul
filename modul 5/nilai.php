<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["nama"]) && isset($_POST["nilai"])) {
    $nama = $_POST["nama"];
    $nilai = $_POST["nilai"];
    $hasil = "";

    if ($nilai > 80) {
        $hasil = "A";
    } elseif ($nilai > 70 && $nilai <= 80) {
        $hasil = "B";
    } elseif ($nilai > 60 && $nilai <= 70) {
        $hasil = "C";
    } elseif ($nilai > 50 && $nilai <= 60) {
        $hasil = "D";
    } elseif ($nilai <= 50) {
        $hasil = "Tidak Lulus";
    } else {
        $hasil = "Nilai tidak valid.";
    }

    echo "<h3>Hasil Klasifikasi Nilai</h3>";
    echo "Nama: $nama<br>";
    echo "Nilai: $nilai<br>";
    echo "Keterangan: $hasil";
} else {
    echo "Silakan isi data melalui form terlebih dahulu.";
}
?>
