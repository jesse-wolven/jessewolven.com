class PageNavigation {
	/**
	 * Handles smooth scrolling on click of a navigation item
	 */
	smoothScrollHandler() {
		const navItems = document.querySelectorAll('.smooth-scroll');
		let screenWidth =
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;
		const mobileNav = document.querySelector('.mobile-nav');
		const menuBtn = document.querySelector('.mobile-nav-btn');
		navItems.forEach(link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				let id = e.target.parentElement.getAttribute('href');
				document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

				if (screenWidth < 420) {
					mobileNav.classList.remove('display-mobile-nav');
					menuBtn.classList.remove('hide-mobile-nav');
				}
			});
		});
	}
}

export default new PageNavigation();
