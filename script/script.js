/* ----------- 
Адаптивное меню*/
const btnMenu = document.getElementById("btn_menu");
const listMenu = document.getElementById("adaptive_menu");
btnMenu.onclick = function () {
  btnMenu.classList.toggle("change");
  listMenu.classList.toggle("show");
};

/* ----------- 
Прокрутка вверх*/

// Получить кнопку:
mybutton = document.getElementById("myBtn");

// Когда пользователь прокручивает вниз 200px от верхней части документа, покажите кнопку

document.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
myBtn.onclick = function () {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
};
