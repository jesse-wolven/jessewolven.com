class mobileNavigation {
	/**
	 * Handle navigation logic for Tablets and Mobile Phones
	 */
	handleMobileNavMenu() {
		const menuBtn = document.querySelector('.mobile-nav-btn');
		const mobileNav = document.querySelector('.mobile-nav');
		const mobileOverlay = document.querySelector('.mobile-overlay');
		const navBtnClick = document.querySelectorAll('.smooth-scroll');
		let screenWidth =
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;
		menuBtn.addEventListener('click', function () {
			menuBtn.classList.add('hide-mobile-nav');
			mobileNav.classList.add('display-mobile-nav');
			mobileOverlay.classList.remove('hidden');
		});

		mobileOverlay.addEventListener('click', function () {
			mobileNav.classList.remove('display-mobile-nav');
			menuBtn.classList.remove('hide-mobile-nav');
			mobileOverlay.classList.add('hidden');
		});

		const closeMobileNavBtn = document.querySelector('.btn-close-mobile-nav');
		closeMobileNavBtn.addEventListener('click', function () {
			mobileNav.classList.remove('display-mobile-nav');
			menuBtn.classList.remove('hide-mobile-nav');
			mobileOverlay.classList.add('hidden');
		});

		const closeMobileNavBtn2 = document.querySelector(
			'.btn-close-mobile-nav-small'
		);
		closeMobileNavBtn2.addEventListener('click', function () {
			mobileNav.classList.remove('display-mobile-nav');
			menuBtn.classList.remove('hide-mobile-nav');
			mobileOverlay.classList.remove('hidden');
		});

		if (screenWidth < 420) {
			navBtnClick.forEach(link => {
				link.addEventListener('click', function () {
					mobileNav.classList.remove('display-mobile-nav');
					menuBtn.classList.remove('hide-mobile-nav');
					mobileOverlay.classList.add('hidden');
				});
			});
		}
	}
}

export default new mobileNavigation();
