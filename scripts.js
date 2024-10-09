// Change Navbar background color on scroll
window.onscroll = function() {
    var nav = document.getElementById("nav");
    var heroImageHeight = document.getElementById("hero-image").offsetHeight;

    if (window.scrollY > heroImageHeight) {
        nav.style.backgroundColor = "black";
    } else {
        nav.style.backgroundColor = "transparent";
    }
};

// Smooth scrolling for all navbar items
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var targetSection = this.getAttribute('href').substring(1);
        document.getElementById(targetSection).scrollIntoView({
            behavior: 'smooth'
        });
    });
});