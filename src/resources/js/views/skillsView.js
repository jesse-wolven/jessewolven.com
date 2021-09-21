import '../../../../node_modules/waypoints/lib/noframework.waypoints.min.js';
class SkillsView {
	/**
	 * Displays the Timeline modal window and all button handling that comes with it
	 */
	handleTimelineModal() {
		const modal = document.querySelector('.modal');
		const overlay = document.querySelector('.overlay');
		const btnCloseModal = document.querySelector('.btn--close-modal');
		const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

		let timelineWaypoint = document.getElementById('wp--1');

		let waypoint = new Waypoint({
			element: timelineWaypoint,
			handler: function (direction) {
				this.element.classList.toggle('animate__heartBeat');
			},
			offset: '95%',
		});

		const openModal = function (e) {
			e.preventDefault();
			modal.classList.remove('hidden');
			overlay.classList.remove('hidden');
		};

		const closeModal = function () {
			modal.classList.add('hidden');
			overlay.classList.add('hidden');
		};

		btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

		btnCloseModal.addEventListener('click', closeModal);
		overlay.addEventListener('click', closeModal);

		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
				closeModal();
			}
		});
	}
}

export default new SkillsView();
