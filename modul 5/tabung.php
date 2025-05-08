
<?php
// Variabel jari-jari dan tinggi
$r = 7; // Jari-jari tabung dalam satuan cm
$t = 10; // Tinggi tabung dalam satuan cm

// Rumus volume tabung: V = π * r^2 * t
$volume = pi() * pow($r, 2) * $t;

// Menampilkan hasil
echo "<h1>Volume Tabung</h1>";
echo "<p>Jari-jari (r): " . $r . " cm</p>";
echo "<p>Tinggi (t): " . $t . " cm</p>";
echo "<p>Volume tabung: " . $volume . " cm³</p>";
?>

