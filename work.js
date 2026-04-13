document.addEventListener('DOMContentLoaded', function () {
    var photobox = document.getElementById('photobox');
    var photoboxImage = document.getElementById('photobox-image');
    var photoboxClose = document.getElementById('photobox-close');
    var gridItems = document.querySelectorAll('.work-grid-item');

    if (!photobox || !photoboxImage || !photoboxClose || gridItems.length === 0) {
        return;
    }

    function openPhotobox(src, alt) {
        photoboxImage.src = src;
        photoboxImage.alt = alt || 'Expanded work image';
        photobox.classList.add('is-open');
        photobox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('photobox-open');
    }

    function closePhotobox() {
        photobox.classList.remove('is-open');
        photobox.setAttribute('aria-hidden', 'true');
        photoboxImage.src = '';
        photoboxImage.alt = '';
        document.body.classList.remove('photobox-open');
    }

    for (var i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('click', function () {
            var fullSrc = this.getAttribute('data-full-src');
            var alt = this.getAttribute('data-alt');

            if (fullSrc) {
                openPhotobox(fullSrc, alt);
            }
        });
    }

    photoboxClose.addEventListener('click', closePhotobox);

    photobox.addEventListener('click', function (event) {
        if (event.target === photobox) {
            closePhotobox();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && photobox.classList.contains('is-open')) {
            closePhotobox();
        }
    });
});
