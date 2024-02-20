const imageURLInput = document.getElementById('image-url');
const addImageButton = document.getElementById('add-image');
const imageGallery = document.getElementById('image-gallery');

addImageButton.addEventListener('click', () => {
    const imageUrl = imageURLInput.value;
    if (!imageUrl) {
        return;
    }

    // إنشاء عنصر الصورة
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'صورة';
    image.style.cursor = 'pointer';

    // إضافة الصورة إلى معرض الصور
    imageGallery.appendChild(image);

    // إضافة حدث عرض الصورة
    image.addEventListener('click', () => {
        // فتح صفحة جديدة لعرض الصورة
        window.open(imageUrl, '_blank');
    });
});
