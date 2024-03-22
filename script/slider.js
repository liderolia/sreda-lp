// Массив URL изображений
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
];
// индекс для отслеживания текущей картинки
let activeImage = 0;
const imageElement = document.querySelector(".image");

// Устанавливаем начальное изображение
function currentImage() {
  const img = document.createElement("img");
  img.alt = "фото " + (activeImage + 1);
  img.src = "./img/carousel/" + images[activeImage];
  imageElement.append(img);

  nextImage();
  prevImage();
}

//  Функция, отвечающая за отображение следующей картинки
function nextImage() {
  let nextImg = activeImage + 1;
  // Если текущий индекс больше длины массива изображений, устанавливаем его обратно в 0
  if (nextImg >= images.length) {
    nextImg = 0;
  }
  // Показываем следующее изображение
  const img = document.createElement("img");
  img.alt = "фото " + (nextImg + 1);
  img.src = "./img/carousel/" + images[nextImg];
  imageElement.append(img);
}

//  Функция, отвечающая за отображение предыдущей картинки
function prevImage() {
  let prevImg = activeImage - 1;
  // Если текущий индекс меньше 0, устанавливаем его на последний индекс массива изображений
  if (prevImg < 0) {
    prevImg = images.length - 1;
  }
  // Показываем предыдущее изображение
  const img = document.createElement("img");
  img.alt = "фото " + (prevImg + 1);
  img.src = "./img/carousel/" + images[prevImg];
  imageElement.prepend(img);
}

// Запускаем отображение
currentImage();

// Функция, отвечающая за переход к следующему изображению
function nextSlide() {
  // Увеличиваем индекс текущего изображения
  activeImage++;
  if (activeImage >= images.length) {
    activeImage = 0;
  }
  // Удаление предыдущей картинки
  document.querySelector(".image img").remove();
  // следующая картинка
  nextImage();
}

//  Функция, отвечающая за переход к предыдущему изображению
function prevSlide() {
  // Уменьшаем индекс
  activeImage--;
  if (activeImage < 0) {
    activeImage = images.length - 1;
  }
  // Удаление следующей картинки *если картинки не удалять, то они бесконечно будут генерироваться в html
  document.querySelector(".image img:last-child").remove();
  // предыдущая картинка
  prevImage();
}

// Устанавливаем обработчики изображений на кнопки
const nextButton = document.querySelector(".next");
nextButton.addEventListener("click", nextSlide);

const prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", prevSlide);
