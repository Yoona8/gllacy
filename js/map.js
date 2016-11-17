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
