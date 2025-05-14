document.addEventListener("DOMContentLoaded", () => {

    // --- Fotoğrafların Yavaşça Kayarak Görünme Animasyonu ---
    // Intersection Observer kullanarak elementlerin viewport'a girince animasyonunu tetikle
    const images = document.querySelectorAll(".gallery .image"); // Sadece galeri içindeki .image'leri seç
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // .slide-up sınıfının opacity ve transform transition'ını kullan
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Animasyon bir kere çalışsın
            }
        });
    }, { threshold: 0.3 }); // Elementin %30'u göründüğünde tetiklen

    images.forEach(image => {
        // JS ile başlangıç stillerini ayarla (CSS'te de tanımlı ama JS kontrol edeceği için burada da olabilir)
        image.style.opacity = 0;
        image.style.transform = "translateY(30px)";
        // Observer'ı her fotoğrafa ekle
        observer.observe(image);
    });


    // --- Kurdele (🎀) Emojilerini Oluştur ve Hareketlendir ---
    const ribbonContainer = document.querySelector('.ribbon-container');
    const numberOfRibbons = 15; // Sayfada olacak kurdele sayısı

    function kurdeleleriOlustur() {
        for (let i = 0; i < numberOfRibbons; i++) {
            const ribbon = document.createElement('span');
            ribbon.classList.add('ribbon');
            ribbon.textContent = '🎀'; // Kurdele emojisi

            // Rastgele başlangıç konumu
            const startX = Math.random() * window.innerWidth;
            const startY = -50; // Ekranın üstünden başlasın
            ribbon.style.left = `${startX}px`;
            ribbon.style.top = `${startY}px`;

            // Rastgele boyut (isteğe bağlı)
            const randomSize = 1.5 + Math.random() * 1.5; // 1.5rem ile 3rem arası
             ribbon.style.fontSize = `${randomSize}rem`;


            // Rastgele animasyon süresi ve gecikme
            const randomDuration = 10 + Math.random() * 10; // 10s ile 20s arası
            const randomDelay = Math.random() * 10; // 0s ile 10s arası gecikme
            ribbon.style.animationDuration = `${randomDuration}s`;
            ribbon.style.animationDelay = `${randomDelay}s`;

             // Farklı hareketler için animasyon ismini değiştirme (isteğe bağlı, CSS'te farklı keyframeler tanımlayarak)
             // Şimdilik tek keyframe kullanıldı

            ribbonContainer.appendChild(ribbon);

             // Animasyon bitince elementi temizle (sürekli tekrarladığı için gerekli olmayabilir ama tek seferlik animasyonlar için iyidir)
             // ribbon.addEventListener('animationend', () => {
             //     ribbon.remove();
             // });
        }
    }

    // Sayfa yüklendiğinde kurdeleleri oluştur
    kurdeleleriOlustur();


    // --- Kalp (💕) Yağmuru Animasyonu ---
    const heartContainer = document.querySelector('.heart-container');

    function kalpYagmuruBaslat() {
        const numberOfHearts = 80; // Yağacak kalp sayısı
        for (let i = 0; i < numberOfHearts; i++) {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.textContent = '💕'; // Kalp emojisi

            // Rastgele başlangıç konumu (ekranın üst genişliği boyunca)
            const startX = Math.random() * window.innerWidth;
            heart.style.left = `${startX}px`;
            // style.top CSS keyframes içinde ayarlanıyor (-10vh)

            // Rastgele boyut (isteğe bağlı)
            const randomSize = 1 + Math.random() * 1; // 1rem ile 2rem arası
            heart.style.fontSize = `${randomSize}rem`;


            // Rastgele animasyon süresi ve gecikme
            const randomDuration = 3 + Math.random() * 4; // 3s ile 7s arası
            const randomDelay = Math.random() * 3; // 0s ile 3s arası gecikme
            heart.style.animationDuration = `${randomDuration}s`;
            heart.style.animationDelay = `${randomDelay}s`;

            heartContainer.appendChild(heart);

            // Animasyon bitince elementi temizle
             heart.addEventListener('animationend', () => {
                 heart.remove();
             });
        }
    }


    // --- Sürpriz Butonuna Tıklama Olayı ---
    const surpriseButton = document.querySelector('.btn-surprise');

    surpriseButton.addEventListener('click', () => {
        // Alert yerine kalp yağmurunu başlat
        kalpYagmuruBaslat();

        // Butonun renk değiştirme efekti (isteğe bağlı, silebilirsiniz)
        surpriseButton.style.backgroundColor = '#e6366e';
        setTimeout(() => {
            surpriseButton.style.backgroundColor = '#ff4081';
        }, 500);
    });

     // --- Sayfa Açılışında Header ve Footer Animasyonu (CSS tarafından kontrol ediliyor, JS sadece tetikleyici olarak kullanılabilir ama bu haliyle de çalışır) ---
     // Eğer JS ile kontrol etmek isterseniz şu şekilde yapabilirsiniz:
     // document.querySelector('header').style.animationDelay = '0.5s'; // CSS'teki gecikmeyi ezebilir veya ekleyebilir
     // document.querySelector('header').style.animationPlayState = 'running'; // Duraklatılmışsa başlat

     // Şu anki CSS'te direkt animasyon tanımlı olduğu için JS'e gerek yok bu kısımlar için.
});
