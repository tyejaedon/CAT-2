document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wildlife-video');
    const toggleBtn = document.getElementById('toggle-btn');
    const videoWrapper = document.getElementById('video-wrapper');

    toggleBtn.addEventListener('click', () => {
        const isHidden = videoWrapper.classList.contains('hidden');

        if (isHidden) {
            videoWrapper.classList.remove('hidden');
            video.play();
            toggleBtn.textContent = 'Hide Video';
        } else {
            if (video.paused || video.ended) {
                video.play();
                toggleBtn.textContent = 'Hide Video';
            } else {
                video.pause();
                videoWrapper.classList.add('hidden');
                toggleBtn.textContent = 'Play Video';
            }
        }
    });

    video.addEventListener('play', () => {
        if (!videoWrapper.classList.contains('hidden')) {
            toggleBtn.textContent = 'Hide Video';
        }
    });

    video.addEventListener('pause', () => {
        if (!videoWrapper.classList.contains('hidden')) {
            toggleBtn.textContent = 'Play Video';
        }
    });
});
