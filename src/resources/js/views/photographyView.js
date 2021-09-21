import { photography } from '../photographyConfig.js';
import SimpleBar from '../../../../node_modules/simplebar/dist/simplebar.min.js';

class PhotoView {
	/**
	 * Handles Displaying the Photography Page grid based on screen size
	 * 5 Wide for larger screens, 3 wide for smaller screens
	 */
	handleDisplayingPhotoGrid() {
		const photoGrid = document.querySelector('.photograph-grid');
		let html = '';
		let screenWidth =
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;
		if (screenWidth > 810) {
			for (let i = 0; i < photography.length; i += 5) {
				html += `
                <div class="row photo-row">
                    <div class="col span-1-of-5 photo-col-1">
                    <button class="photoBtn photoBtn--show-modal">
                        <img src="src/resources/img/photographySection/lowQuality/${
													photography[i]
												}" data-src="src/resources/img/photographySection/highQuality/${
					photography[i]
				}" alt="photo ${i}" class="img-${i}" onContextMenu="return false;" draggable="false"/>
                </button>
                    </div>
                    <div class="col span-1-of-5 photo-col-2">
                    <button class="photoBtn photoBtn--show-modal">
                        <img src="src/resources/img/photographySection/lowQuality/${
													photography[i + 1]
												}" data-src="src/resources/img/photographySection/highQuality/${
					photography[i + 1]
				}" alt="photo ${i + 1}" class="img-${
					i + 1
				}" onContextMenu="return false;" draggable="false"/>
                </button>
                    </div>
                    <div class="col span-1-of-5 photo-col-3">
                    <button class="photoBtn photoBtn--show-modal">
                        <img src="src/resources/img/photographySection/lowQuality/${
													photography[i + 2]
												}" data-src="src/resources/img/photographySection/highQuality/${
					photography[i + 2]
				}" alt="photo ${i + 2}" class="img-${
					i + 2
				}" onContextMenu="return false;" draggable="false"/>
                </button>
                    </div>
                    <div class="col span-1-of-5 photo-col-4">
                    <button class="photoBtn photoBtn--show-modal">
                        <img src="src/resources/img/photographySection/lowQuality/${
													photography[i + 3]
												}" data-src="src/resources/img/photographySection/highQuality/${
					photography[i + 3]
				}" alt="photo ${i + 3}" class="img-${
					i + 3
				}" onContextMenu="return false;" draggable="false"/>
                </button>
                    </div>
                    <div class="col span-1-of-5 photo-col-5">
                    <button class="photoBtn photoBtn--show-modal">
                        <img src="src/resources/img/photographySection/lowQuality/${
													photography[i + 4]
												}" data-src="src/resources/img/photographySection/highQuality/${
					photography[i + 4]
				}" alt="photo ${i + 4}" class="img-${
					i + 4
				}" onContextMenu="return false;" draggable="false"/>
                </button>
                    </div>
                </div>
                `;
			}
		} else {
			/*  Must be a smaller screen, print in rows of 3 */
			for (let i = 0; i < photography.length; i += 3) {
				html += `
                <div class="row photo-row">
                    <div class="col span-1-of-3 photo-col-1">
                        <button class="photoBtn photoBtn--show-modal">
                            <img src="src/resources/img/photographySection/lowQuality/${
															photography[i]
														}" data-src="src/resources/img/photographySection/highQuality/${
					photography[i]
				}" alt="photo ${i}" class="img-${i}" onContextMenu="return false;" draggable="false"/>
                        </button>
                    </div>
                    <div class="col span-1-of-3 photo-col-2">
                        <button class="photoBtn photoBtn--show-modal">
                            <img src="src/resources/img/photographySection/lowQuality/${
															photography[i + 1]
														}" data-src="src/resources/img/photographySection/highQuality/${
					photography[i + 1]
				}" alt="photo ${i + 1}" class="img-${
					i + 1
				}" onContextMenu="return false;" draggable="false"/>
                        </button>
                    </div>
                    <div class="col span-1-of-3 photo-col-3">
                        <button class="photoBtn photoBtn--show-modal">
                            <img src="src/resources/img/photographySection/lowQuality/${
															photography[i + 2]
														}" data-src="src/resources/img/photographySection/highQuality/${
					photography[i + 2]
				}" alt="photo ${i + 2}" class="img-${
					i + 2
				}" onContextMenu="return false;" draggable="false"/>
                        </button>
                    </div>
                </div>
                `;
			}
		}

		photoGrid.insertAdjacentHTML('beforeend', html);

		/* ----------------------- Custom Scrollbar --------------------------- */
		let scrollBarElement = document.getElementById('custom-scrollbar');
		new SimpleBar(scrollBarElement, { autoHide: false });
	}

	/* ============================================================================================== */
	/* ------------------------------- Photography Modal Window ------------------------------------- */
	/* ============================================================================================== */

	/**
	 * Displays the photo modal window and all the button handling that comes with that
	 */
	handlePhotoModal() {
		/* ----------------------- Modal Window Photo Scroller --------------------------- */
		const photoGridModal = document.querySelector('.photoScroller');
		let html2 = '';
		for (let i = 0; i < photography.length; i++) {
			html2 += `	
            <button class="photoBtn--show-modal"><img src="src/resources/img/photographySection/lowQuality/${photography[i]}" data-src="src/resources/img/photographySection/highQuality/${photography[i]}" alt="photo ${i}" class="ModalImgs" onContextMenu="return false;" draggable="false"/></button>             
            `;
		}

		photoGridModal.insertAdjacentHTML('beforeend', html2);

		/* ----------------------- Display Modal Window with functionality --------------------------- */
		const photoModal = document.querySelector('.photoModal');
		const photoOverlay = document.querySelector('.photoOverlay');
		const photoBtnCloseModal = document.querySelector('.photoBtn--close-modal');
		const photoOpenModalBtns = document.querySelectorAll(
			'.photoBtn--show-modal'
		);
		let currentIndex = 0;

		const openPhotoModal = function (e) {
			e.preventDefault();
			document.getElementById('highQualityPhotoId').src =
				e.target.getAttribute('data-src');
			currentIndex = +e.target.getAttribute('alt').substring(6, 9);

			setTimeout(function () {
				photoModal.classList.remove('hidden');
				photoOverlay.classList.remove('hidden');
			}, 500);

			let photoScrollBarElement2 = document.getElementById(
				'modalPhotoScrollbar'
			);
			new SimpleBar(photoScrollBarElement2, { autoHide: false });
		};

		const closePhotoModal = function () {
			photoModal.classList.add('hidden');
			photoOverlay.classList.add('hidden');
		};

		photoOpenModalBtns.forEach(btn =>
			btn.addEventListener('click', openPhotoModal)
		);

		photoBtnCloseModal.addEventListener('click', closePhotoModal);
		photoOverlay.addEventListener('click', closePhotoModal);

		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && !photoModal.classList.contains('hidden')) {
				closePhotoModal();
			}
		});

		const leftButton = document.querySelector('.slider__btn--left');
		const rightButton = document.querySelector('.slider__btn--right');

		leftButton.addEventListener('click', function () {
			if (currentIndex > 0) {
				document.getElementById(
					'highQualityPhotoId'
				).src = `src/resources/img/photographySection/highQuality/${
					photography[currentIndex - 1]
				}`;
				currentIndex -= 1;
			} else if (currentIndex === 0) alert("Oops, you can't go that way.");
		});

		rightButton.addEventListener('click', function () {
			if (currentIndex < 149) {
				document.getElementById(
					'highQualityPhotoId'
				).src = `src/resources/img/photographySection/highQuality/${
					photography[currentIndex + 1]
				}`;
				currentIndex += 1;
			} else if (currentIndex === 149) alert("You've reached the last photo.");
		});
	}
}

export default new PhotoView();
