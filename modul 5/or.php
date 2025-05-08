<?php
$usia = 17;
$memilikiSIM = false;

// Menggunakan operator OR 
if ($usia >= 18 || $memilikiSIM) {
    echo "Anda boleh mengemudi.";
} else {
    echo "Anda belum memenuhi syarat untuk mengemudi.";
}
?>