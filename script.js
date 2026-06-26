document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wildlife-video');
    const toggleBtn = document.getElementById('toggle-btn');
    const videoWrapper = document.getElementById('video-wrapper');

    // Requirement 4 Logic: Hides the video or plays it if not playing
    toggleBtn.addEventListener('click', () => {
        const isHidden = videoWrapper.classList.contains('hidden');

        if (isHidden) {
            // If it is hidden, show it and play it
            videoWrapper.classList.remove('hidden');
            video.play();
            toggleBtn.textContent = 'Hide Video';
        } else {
            // If it is visible...
            if (video.paused || video.ended) {
                // ...and not playing -> play it
                video.play();
                toggleBtn.textContent = 'Hide Video';
            } else {
                // ...and is playing -> hide it (and pause to stop audio)
                video.pause();
                videoWrapper.classList.add('hidden');
                toggleBtn.textContent = 'Play Video';
            }
        }
    });

    // Sync button text if the user plays/pauses using the native video controls
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
