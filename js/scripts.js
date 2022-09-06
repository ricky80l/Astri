$(window).bind('scroll', function () {
    event.preventDefault();
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('fixed-top');
    } else {
        $('.navbar').removeClass('fixed-top');
    }
});



const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}






/* Scorrimento pagine interne */
$(document).ready(function(e) {
    $('a[href*="#"]:not([href="#"])').click(function(event) { //prende tutte le ancore che iniziano con # non quelle con il solo #
        $('html, body').animate({
            scrollTop: $($(this).attr("href"))
            .offset().top - 186}, 1000);
        event.preventDefault();
    });
});