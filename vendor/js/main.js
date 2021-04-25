document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');
    var button_cricle = document.querySelector('.button-cricle');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 10) {
            header.classList.add('header-scroll');
            button_cricle.classList.add('show-hide');

        } else if (window.pageYOffset < 10) {
            header.classList.remove('header-scroll');
            button_cricle.classList.remove('show-hide');

        }
    });


})