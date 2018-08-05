// STATIC NAVBAR!
var navbar = document.querySelector("nav");
var main = document.querySelector('main');
var sticky = navbar.offsetTop;

window.onscroll = function() {
	if (window.pageYOffset >= sticky) {
    	navbar.classList.add("sticky");
    	main.classList.add("main-content");
  	} else {
    	navbar.classList.remove("sticky");
    	main.classList.remove("main-content");
  	}
};



// PORTFOLIO MODAL
var modal = document.getElementById('portfolio-modal');
var span = document.getElementsByClassName("close")[0];
var portfolioLinks = document.querySelectorAll('#portfolio a');

for (var i = 0; i < portfolioLinks.length; i += 1) {
	portfolioLinks[i].addEventListener("click", function(event) {
		event.preventDefault();
		console.log(this.href);
		$('#portfolio-modal .modal-html').load(this.href + " .portfolio-page-section")
		$('#portfolio-modal').slideDown();

	})
}

span.onclick = function() {
    $('#portfolio-modal').slideUp();
}

window.onclick = function(event) {
    if (event.target == modal) {
        $('#portfolio-modal').slideUp();
    }
}


// FADE IN MAIN
$(document).ready(function() {
	$('main').fadeIn(500);
});