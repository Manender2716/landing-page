// Scroll event to change navbar background color
window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

// Highlight active nav link based on current URL
const links = document.querySelectorAll('.nav-links a');
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
	if (link.getAttribute("href") === currentPage) {
		link.classList.add("active");
	}
});