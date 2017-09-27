var link = document.querySelector(".modal-open");
var popup = document.querySelector(".popup-form");
var close = popup.querySelector(".close-window");
var login = popup.querySelector("[name=name]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("name");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-form-show");
    modalOverlay.classList.add("modal-show")
    login.focus();

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-error");
        console.log("Нужно ввести логин и пароль");
    } else {
        localStorage.setItem("name", login.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-form-show")) {
            popup.classList.remove("popup-form-show");
            popup.classList.remove("popup-error");
            modalOverlay.classList.remove("modal-show");
        }
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-form-show");
    popup.classList.remove("popup-error");
    modalOverlay.classList.remove("modal-show");
});

/* map */
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var modalOverlay = document.querySelector(".modal-overlay");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("popup-form-show");
    modalOverlay.classList.add("modal-show");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("popup-form-show");
    modalOverlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("popup-form-show")) {
            mapPopup.classList.remove("popup-form-show");
            modalOverlay.classList.remove("modal-show");
        }
    }
});