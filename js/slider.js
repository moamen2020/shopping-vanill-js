//  This is Code For Image Slider
const slider_contaner = document.getElementById('slider'),
      srcImage = ['img/slider/banner-01.jpg', 'img/slider/banner-02.jpg', 'img/slider/banner-03.jpg'],
      button_Next = document.getElementById('next'),
      button_Prev = document.getElementById('prev');

setInterval(() => {
    slider_contaner.children[0].src = srcImage[Math.floor(Math.random() * srcImage.length)];
}, 3000);

button_Next.addEventListener('click', function () {
    slider_contaner.children[0].src = srcImage[Math.floor(Math.random() * srcImage.length)]
});

button_Prev.addEventListener('click', function () {
    slider_contaner.children[0].src = srcImage[Math.floor(Math.random() * srcImage.length)]
});