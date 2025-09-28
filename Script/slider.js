let images = document.querySelectorAll('.slider img');
let current = 0;
function showImage(index) {
    images.forEach((img, i) => img.style.display = i === index ? 'block' : 'none');
}
setInterval(() => {
    current = (current + 1) % images.length;
    showImage(current);
}, 3000);
showImage(current);
