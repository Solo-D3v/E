document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photo");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.1 });

    photos.forEach(photo => {
        photo.style.opacity = 0;
        observer.observe(photo);
    });
});
