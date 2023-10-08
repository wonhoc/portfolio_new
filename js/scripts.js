$(document).ready(function (){
    let mkDiv;
    $(".skill").hover(function(){
        if(!fnNullCheck($(this).attr("titles"))){

            mkDiv = $("<div>", {id: "skill_text", name: "skill_text", text: $(this).attr("titles")}).appendTo($(this));
            mkDiv.css("padding", "15px 20px");
            mkDiv.css("background-color", "#444444");
            mkDiv.css("border-radius", "5px");
            mkDiv.css("color", "#ffffff");
            mkDiv.css("position", "absolute");
            mkDiv.css("font-size", "16px");
        }
    },function() {

        mkDiv.remove();
    });


});

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var fnNullCheck = function(str){

    if(new String(str).valueOf() == "undefined" || str == null) return true;

    var ch = new String(str);
    if(ch == null) return true;
    if(ch.toString().length == 0) return true;

    return false;
}
