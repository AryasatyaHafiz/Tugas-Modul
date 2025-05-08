<?php
// Penugasan yang benar (nilai 7 ditugaskan ke variabel)
$int_tujuh = 7;

// Menampilkan nilai dan tipe datanya
echo "Nilai dari \$int_tujuh: " . $int_tujuh . "<br>";
echo "Tipe data dari \$int_tujuh: " . gettype($int_tujuh) . "<br>";

// Penugasan yang salah 
7 = $int_tujuh; // Uncomment baris ini maka program akan error
?>
