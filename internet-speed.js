function updateInternetSpeed() {
    // Ini adalah placeholder untuk kecepatan internet, kamu bisa menggantinya dengan metode pengukuran nyata
    const speed = Math.floor(Math.random() * 100); // Misalnya kecepatan internet dalam Mbps
    document.getElementById('internet-speed').textContent = `${speed} Mbps`;
}

// Update kecepatan internet setiap 5 detik
setInterval(updateInternetSpeed, 5000);

// Memanggil fungsi saat halaman dimuat
window.addEventListener('load', updateInternetSpeed);
