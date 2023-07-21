$(document).ready(function () {
    function startSlider() {
        var imageWidth = $(".startup-slider img").outerWidth();

        function animateSlider() {
            $(".startup-slider").animate(
                { marginLeft: -imageWidth },
                1000,
                "linear",
                function () {
                    $(".startup-slider img:first").appendTo(".startup-slider");
                    $(".startup-slider").css("margin-left", 0);
                    animateSlider();
                }
            );
        }
        animateSlider();
    }
    startSlider();
});

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
}

function closeNavbarOnClickOutside(event) {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
  
    if (!navbar.contains(event.target) && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  
  document.addEventListener('click', closeNavbarOnClickOutside);

