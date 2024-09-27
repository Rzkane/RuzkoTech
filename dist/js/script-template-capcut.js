
    // Fungsi untuk mencari video berdasarkan input pencarian
    function searchVideo() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const videos = document.querySelectorAll('.video');

        // Loop melalui setiap video dan tampilkan/hilangkan berdasarkan kecocokan dengan pencarian
        videos.forEach(video => {
            const title = video.getAttribute('data-title').toLowerCase();
            if (title.includes(searchInput)) {
                video.style.display = 'block'; // Tampilkan video yang cocok
            } else {
                video.style.display = 'none'; // Sembunyikan video yang tidak cocok
            }
        });
    }

    // Fungsi untuk memutar video saat diklik
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
        video.addEventListener('click', function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });