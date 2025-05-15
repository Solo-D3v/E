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

            // Rastgele başlangıç konumu ve animasyon süresi/gecikmesi
            const startX = Math.random() * window.innerWidth;
            const startY = -50; // Ekranın üstünden başlasın
            ribbon.style.left = `${startX}px`;
            ribbon.style.top = `${startY}px`; // Başlangıç top değeri

            // Rastgele boyut (isteğe bağlı)
            const randomSize = 1.5 + Math.random() * 1.5; // 1.5rem ile 3rem arası
             ribbon.style.fontSize = `${randomSize}rem`;

            // Rastgele animasyon süresi ve gecikme (burada infinite olarak kalabilir, sürekli düşmeleri isteniyor)
            const randomDuration = 15 + Math.random() * 10; // 15s ile 25s arası
            const randomDelay = Math.random() * 15; // 0s ile 15s arası gecikme
            ribbon.style.animationName = 'floatAndRotate'; // Hangi animasyonu kullanacağı
            ribbon.style.animationDuration = `${randomDuration}s`;
            ribbon.style.animationDelay = `${randomDelay}s`;
            ribbon.style.animationIterationCount = 'infinite'; // Sürekli tekrar etsin
            ribbon.style.animationTimingFunction = 'linear'; // Sabit hız

            ribbonContainer.appendChild(ribbon);

            // Animasyon bitince elementi temizle (sürekli tekrarladığı için gerekli değil)
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
        const numberOfHearts = 80; // Yağacak kalp sayısı (Bir seferde bu kadar düşecek)
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

            // Rastgele animasyon süresi ve gecikme (tek seferlik animasyon için süre kısa olabilir)
            const randomDuration = 4 + Math.random() * 3; // 4s ile 7s arası düşme süresi
            const randomDelay = Math.random() * 1; // 0s ile 1s arası gecikme (aynı anda düşmesinler)
            heart.style.animationName = 'heartFall'; // Hangi animasyonu kullanacağı
            heart.style.animationDuration = `${randomDuration}s`;
            heart.style.animationDelay = `${randomDelay}s`;
            heart.style.animationTimingFunction = 'linear'; // Sabit düşme hızı
            heart.style.animationFillMode = 'forwards'; // Animasyon bitince son halinde kalsın (opacity: 0)
            heart.style.animationIterationCount = '1'; // Yalnızca bir kez çalışsın


            heartContainer.appendChild(heart);

            // Animasyon bitince elementi temizle (önemli, biriken kalpleri siler)
             heart.addEventListener('animationend', () => {
                 heart.remove();
             });
        }
    }


    // --- Sürpriz Butonuna Tıklama Olayı ---
    const surpriseButton = document.querySelector('.btn-surprise');
    let isAnimatingHeartRain = false; // Animasyonun devam edip etmediğini kontrol etmek için

    surpriseButton.addEventListener('click', () => {
        // Eğer animasyon devam etmiyorsa başlat
        if (!isAnimatingHeartRain) {
             isAnimatingHeartRain = true; // Animasyon başladı olarak işaretle
             kalpYagmuruBaslat();

             // Belirli bir süre sonra animasyonun bittiğini işaretle (Son kalbin süresinden biraz fazla)
             // En uzun kalp animasyon süresine göre ayarlanmalı
             const longestHeartDuration = 7 + 1; // Max duration + Max delay
             setTimeout(() => {
                 isAnimatingHeartRain = false;
             }, longestHeartDuration * 1000); // Milisaniyeye çevir


            // Butonun renk değiştirme efekti (isteğe bağlı, silebilirsiniz)
            surpriseButton.style.backgroundColor = '#e6366e';
            setTimeout(() => {
                surpriseButton.style.backgroundColor = '#ff4081';
            }, 500);
        }
    });

});
