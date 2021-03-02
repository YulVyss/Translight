@@include('libs/smoothScroll.js', {})
@@include('libs/inputmask.min.js', {}) //маски для инпутов (чтобы вводить только цифры digital, номер телефона phone)
@@include('libs/swiper.min.js', {}) // слайдер, стили в ui.scss
@@include('libs/nouislider.js', {}) // для линии диапазоны цены range , стили в form.scss
@@include('libs/wNumb.min.js', {}) //для работы с цифрами
@@include('libs/lightgallery.min.js', {})//галерея
@@include('libs/tippy.js', {}) // подсказки
@@include('libs/datepicker-full.min.js', {}) //календарь для инпута, стили в form.scss

//обратить внимание на класс _src_item _src_active, добавляется в js,
// этот класс получает любой объект попадающий в поле зрения , для анимации при скролле
// _goto
// _side-wrapper, _side-block