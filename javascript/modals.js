
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const thumbnails = document.querySelectorAll('.thumbnail');
const closeBtn = document.querySelector('.close-btn');
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = thumb.src;
        captionText.innerText = thumb.alt;
    });
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
