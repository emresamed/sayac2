let counterInterval; // Bu değişken interval ID'yi saklayacak

function updateCounter() {
    const startDate = new Date(2022, 4, 19); // 19 Mayıs 2022
    const now = new Date().getTime();
    const elapsedTime = now - startDate.getTime();

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('counter-value').textContent = 
        `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
}

// Sayfa yüklendiğinde sayaç otomatik olarak çalışmaya başlasın
window.onload = function() {
    counterInterval = setInterval(updateCounter, 1000); // Her saniyede bir güncelleme
};
