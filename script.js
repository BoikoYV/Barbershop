//Модальное окно вход
let link = document.querySelector(".header__user-nav-link"); //ссылка вход
let popup = document.querySelector(".profile__login-inner"); // модальное окно с формой
let overlay = document.querySelector(".modal__overlay"); // оверлей
let close = document.querySelector(".cross"); // крестик закрывающий форму
let form = popup.querySelector(".profile-login-form"); // форма
let inputLogin = popup.querySelector("[name=login]"); // инпут для ввода логина
let inputPass = popup.querySelector("[name=password]"); // инпут для ввода пароля

//Добавляет класс модальному окну и оверлею и они появляется по клику
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
    inputLogin.focus();
});

//Убирает класс при нажатии на крестик
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
    popup.classList.remove("error");
});

//Убирает класс при нажатии на оверлей
overlay.addEventListener("click", function (evt) {
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
    popup.classList.remove("error");
});

// Проверяет введен ли логин и пароль
form.addEventListener("submit", function (evt) {
    if(!inputLogin.value || ! inputPass.value){
        evt.preventDefault();
        popup.classList.add("error");
        console.log("Введите логин и пароль");
    }
});

// Закрывает модальное и оверлей через "esc"
window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27){
        evt.preventDefault();

        if(popup.classList.contains("modal-show")){
            popup.classList.remove("modal-show");
            overlay.classList.remove("modal-show");
        }
    }
})

//Модальное окно - карта

let mapLink = document.querySelector(".btn-map"); // Кнопка как проехать
let modal_map = document.querySelector(".map"); //Модальное окно карта
let mapClose = document.querySelector(".map-cross"); // крестик закрывающий форму

//Открывает карту и оверлей
mapLink.addEventListener("click", function (evt){
    modal_map.classList.add("map-show");
    overlay.classList.add("map-show");
});

//Закрывает карту и оверлей по крестику
mapClose.addEventListener("click", function (evt){
    modal_map.classList.remove("map-show");
    overlay.classList.remove("map-show");
});

 //Закрывает карту и оверлей по клику на оверлей
overlay.addEventListener("click", function (evt){
    modal_map.classList.remove("map-show");
    overlay.classList.remove("map-show");
});

// Закрывает карту и оверлей через "esc"
window.addEventListener("keydown", function (evt) {
  if(evt.keyCode === 27){
      evt.preventDefault();

      if(modal_map.classList.contains("map-show")){
          modal_map.classList.remove("map-show");
          overlay.classList.remove("map-show");
      }
  }
});

