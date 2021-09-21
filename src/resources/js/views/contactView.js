class contactView {
	/**
	 * Handle alert message that appears on page reload when the form has been filled out
	 */
	handleContactFormSubmission() {
		window.addEventListener('beforeunload', event => {
			if (window.history.replaceState) {
				window.history.replaceState(null, null, window.location.href);
			}
		});
	}
}

export default new contactView();
