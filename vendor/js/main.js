document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');
    var button_cricle = document.querySelector('.button-cricle');
    var icon_sun = document.querySelector('.icon-dark--img');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 10) {
            header.classList.add('header-scroll');
            button_cricle.classList.add('show-hide');

        } else if (window.pageYOffset < 10) {
            header.classList.remove('header-scroll');
            button_cricle.classList.remove('show-hide');

        }
    });
    icon_sun.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            icon_sun.src = "vendor/img/sun.png";

        } else {
            icon_sun.src = "vendor/img/moon.png";

        }
    }

})