document.addEventListener('DOMContentLoaded', function () {
    const folders = document.querySelectorAll('.folder');
    folders.forEach(folder => {
        folder.addEventListener('click', function () {
            const nextElement = this.nextElementSibling;
            if (nextElement && nextElement.classList.contains('hold')) {
                nextElement.classList.toggle('open');
            }
        });
    });
});
