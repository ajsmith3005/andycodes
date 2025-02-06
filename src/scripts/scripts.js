// Smooth scroll functionality
function smoothScroll(target, duration) {
	let targetElement = document.querySelector(target);
	let startPosition = window.scrollY;
	let targetPosition = targetElement.offsetTop;
	let distance = targetPosition - startPosition - 50;
	let startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		let elapsed = currentTime - startTime;
		let progress = elapsed / duration;
		if (progress > 1) progress = 1;

		let easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; 
		let position = startPosition + distance * easeInOutQuad(progress);

		window.scrollTo(0, position);

		if (progress < 1) {
		window.requestAnimationFrame(animation);
		}
	}

	window.requestAnimationFrame(animation);
}

// Attach event listeners to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(event) {
	event.preventDefault();
	let targetID = this.getAttribute('href');
	smoothScroll(targetID, 1000);
});
});
