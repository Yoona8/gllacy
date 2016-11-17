var map = document.querySelector('.map');
var button = map.querySelector('a.btn-main');
var form = map.querySelector('.map__form');
var closeButton = map.querySelector('.map__form-close');
var overlay = map.querySelector('.modal-overlay');

// открытие формы
var _onClickOpen = function(event) {
  event.preventDefault();

  form.classList.add('map__form--open');
  overlay.classList.add('modal-overlay--active');
};

button.addEventListener('click', _onClickOpen);

// закрыть окно
var toClose = function(event) {

  if (form.classList.contains('map__form--open')) {
    form.classList.remove('map__form--open');
  };

  if (overlay.classList.contains('modal-overlay--active')) {
    overlay.classList.remove('modal-overlay--active');
  };

};

closeButton.addEventListener('click', toClose);

overlay.addEventListener('click', toClose);

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    toClose();
  };
});
