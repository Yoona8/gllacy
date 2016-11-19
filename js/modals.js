ymaps.ready(init);

  function init() {
    var yaMap = new ymaps.Map("yandex-map", {
      center: [59.93859876, 30.32704563],
      zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.93865024, 30.32302979], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/icons/map-pin.png',
      iconImageSize: [218, 142],
      iconImageOffset: [-35, -142]
    });

    yaMap.geoObjects.add(myPlacemark);
  };


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
