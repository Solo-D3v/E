document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    images.forEach(image => {
        image.style.opacity = 0;
        image.style.transform = "translateY(30px)";
        observer.observe(image);
    });
});

document.querySelector('.btn-surprise').addEventListener('click', () => {
    alert('Seni çok seviyorum elif naz 💕');
});