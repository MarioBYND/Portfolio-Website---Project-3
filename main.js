document.addEventListener('DOMContentLoaded', function () {
    var revealElements = document.querySelectorAll('[data-reveal]');
    var siteAudio = document.getElementById('site-audio');
    var audioToggle = document.getElementById('audio-toggle');

    function revealOnScroll() {
        for (var i = 0; i < revealElements.length; i++) {
            var rect = revealElements[i].getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                revealElements[i].classList.add('visible');
            }
        }
    }

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    if (typeof Swiper !== 'undefined') {
        if (document.getElementById('work-swiper')) {
            new Swiper('#work-swiper', {
                loop: true,
                speed: 420,
                spaceBetween: 16,
                grabCursor: true,
                slidesPerView: 3,
                breakpoints: {
                    0: { slidesPerView: 1 },
                    481: { slidesPerView: 2 },
                    769: { slidesPerView: 3 }
                },
                navigation: {
                    prevEl: '#work-prev',
                    nextEl: '#work-next'
                },
                mousewheel: {
                    enabled: true,
                    forceToAxis: true,
                    releaseOnEdges: true
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                }
            });
        }

        if (document.getElementById('wide-image-swiper')) {
            new Swiper('#wide-image-swiper', {
                loop: true,
                speed: 560,
                slidesPerView: 1,
                grabCursor: true,
                navigation: {
                    prevEl: '#wide-prev',
                    nextEl: '#wide-next'
                },
                mousewheel: {
                    enabled: true,
                    forceToAxis: true
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                }
            });
        }

        if (document.getElementById('secondary-row-one')) {
            new Swiper('#secondary-row-one', {
                loop: false,
                speed: 420,
                slidesPerView: 'auto',
                spaceBetween: 16,
                grabCursor: true,
                navigation: {
                    prevEl: '#secondary-row-one-prev',
                    nextEl: '#secondary-row-one-next'
                },
                mousewheel: {
                    enabled: true,
                    forceToAxis: true,
                    releaseOnEdges: true
                }
            });
        }

        if (document.getElementById('secondary-row-two')) {
            new Swiper('#secondary-row-two', {
                loop: false,
                speed: 420,
                slidesPerView: 'auto',
                spaceBetween: 16,
                grabCursor: true,
                navigation: {
                    prevEl: '#secondary-row-two-prev',
                    nextEl: '#secondary-row-two-next'
                },
                mousewheel: {
                    enabled: true,
                    forceToAxis: true,
                    releaseOnEdges: true
                }
            });
        }
    }

    function updateAudioButton() {
        if (!siteAudio || !audioToggle) {
            return;
        }

        if (siteAudio.muted) {
            audioToggle.textContent = 'Sound Off';
            audioToggle.classList.remove('is-on');
            audioToggle.setAttribute('aria-pressed', 'false');
            audioToggle.setAttribute('aria-label', 'Unmute background audio');
        } else {
            audioToggle.textContent = 'Sound On';
            audioToggle.classList.add('is-on');
            audioToggle.setAttribute('aria-pressed', 'true');
            audioToggle.setAttribute('aria-label', 'Mute background audio');
        }
    }

    if (siteAudio && audioToggle) {
        siteAudio.muted = false;

        siteAudio.play().catch(function () {
            siteAudio.muted = true;
            updateAudioButton();
        });

        updateAudioButton();

        audioToggle.addEventListener('click', function () {
            if (siteAudio.paused) {
                siteAudio.play().catch(function () {
                });
            }

            siteAudio.muted = !siteAudio.muted;
            updateAudioButton();
        });
    }
});