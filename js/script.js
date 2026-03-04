// Знаходимо картинку котика на сторінці
const catImage = document.querySelector('img');

// Додаємо "слухача", який чекає на клік мишкою по картинці
catImage.addEventListener('click', function() {
    alert('Мяу! 😎 Ти погладив найкрутішого котика!');
});