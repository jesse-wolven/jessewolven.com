import SimpleBar from '../../../../node_modules/simplebar/dist/simplebar.min.js';

class SpotifyApiView {
	timeRange = '';
	artistsParentElement = '';
	tracksParentElement = '';

	/**
	 * Listen for a Time Frame selection for the Spotify API,
	 * Then set the access string in session storage for retrieving the top tracks and top artists
	 */
	handleTimeFrameSelection() {
		const timeFrameSelector = document.querySelector('.time-frame-row');
		const timeFrame = document.querySelectorAll('.time-frame');
		let spotifyWebApiArtists = '';
		let spotifyWebApiTracks = '';

		let that = this;

		timeFrameSelector.addEventListener('click', function (e) {
			const clicked = e.target.closest('.time-frame');

			// Guard clause
			if (!clicked) return;

			// Remove any active class
			timeFrame.forEach(tf => tf.classList.remove('time-frame-active'));

			// Activate the clicked button
			clicked.classList.add('time-frame-active');

			if (clicked.classList.contains('time-frame-1'))
				that.timeRange = 'short_term';
			else if (clicked.classList.contains('time-frame-2'))
				that.timeRange = 'medium_term';
			else if (clicked.classList.contains('time-frame-3'))
				that.timeRange = 'long_term';
			else console.log('No time frame selected. The user must choose.');

			// Set the Web API access string
			spotifyWebApiArtists = `https://api.spotify.com/v1/me/top/artists?time_range=${that.timeRange}&limit=10`;
			spotifyWebApiTracks = `https://api.spotify.com/v1/me/top/tracks?time_range=${that.timeRange}&limit=10`;
			window.sessionStorage.setItem('webApiArtists', spotifyWebApiArtists);
			window.sessionStorage.setItem('webApiTracks', spotifyWebApiTracks);
		});
	}

	/**
	 * Ensures that a time frame has been selected, then initiates the first steps of gaining authorization
	 * @param {function} handler Function of the Model to handle the first steps of connecting to the Spotify API
	 */
	handleSpotifyConnectionButton(handler) {
		const spotifyButton = document.querySelector('.btn-spotify-api');

		let that = this;
		if (
			window.location.href.includes(
				'www.jessewolven.com'
			)
		) {
			spotifyButton.addEventListener('click', function () {
				if (that.timeRange === '') {
					alert('Please select a time frame.');
					return;
				}

				window.sessionStorage.setItem('ContinueWithAuthentication', 'True');
				handler();
			});
		}
	}

	/**
	 * Retrieves the authentication code from the Spotify API redirect, then continues to access token retrieval
	 * @param {function} handler function to handle the authenticated code from spotify and ensure a state match
	 */
	getAuthenticatedUri(handler) {
		if (
			window.location.href.includes(
				'www.jessewolven.com'
			)
		) {
			handler(window.location.search);
		}
	}

	/**
	 * Ensures the redirected URL contains the required code for access token retrieval
	 * @param {function} handler function to handle the authenticated code from spotify and ensure a state match
	 */
	handleAquiringAuthenticatedUri(handler) {
		// if loading hasn't finished yet:
		if (
			document.readyState === 'loading' &&
			window.location.href.includes('?code')
		) {
			document.addEventListener('DOMContentLoaded', function () {
				this.getAuthenticatedUri(handler);
			});
		}
		// 'DOMContentLoaded has already fired:
		else if (window.location.href.includes('?code')) {
			this.getAuthenticatedUri(handler);
		}
	}

	/**
	 * Ensures we have all the necessary variables for access token retrieval
	 * And waits to make sure we have retrieved the CliendId
	 * @param {*} handler functions for requesting an access token from the Spotify API
	 */
	handleRequestingAccessToken(handler) {
		// if loading hasn't finished yet:
		if (
			document.readyState === 'loading' &&
			window.location.href.includes('#music') &&
			window.sessionStorage.getItem('Returned_Authorization_Code') !== null &&
			window.sessionStorage.getItem('ContinueWithAuthentication') === 'True'
		) {
			document.addEventListener('DOMContentLoaded', setTimeout(handler, 5000));
		}
		// 'DOMContentLoaded has already fired:
		else if (
			window.location.href.includes('#music') &&
			window.sessionStorage.getItem('Returned_Authorization_Code') !== null &&
			window.sessionStorage.getItem('ContinueWithAuthentication') === 'True'
		) {
			setTimeout(handler, 5000);
		}
	}

	/**
	 * Handles the printing of all recieved Spotify Data to the screen
	 * @param {array of objects} spotifyData retrieved data from Spotify with artist and Track Information
	 * @param {string} option decider of whether we're printing artists or tracks to the screen
	 */
	handleSpotifyDataDisplay(spotifyData, option) {
		let screenWidth =
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;
		const spotifyApiButton = document.querySelector('.music-para-row');
		const spotifyButton = document.querySelector('.btn-spotify-api');
		let musicRow;
		let artistsRowId = document.getElementById('artistsRowId');
		let tracksRowId = document.getElementById('tracksRowId');
		if (screenWidth > 810) {
			musicRow = document.querySelector('.bigger-screen');
			artistsRowId = document.getElementById('artistsRowId');
			tracksRowId = document.getElementById('tracksRowId');
		} else {
			musicRow = document.querySelector('.smaller-screen');
			artistsRowId = document.getElementById('artistsRowId2');
			tracksRowId = document.getElementById('tracksRowId2');
		}
		const musicParagraph = document.querySelector('.music-page-description');

		window.sessionStorage.setItem('ContinueWithAuthentication', 'False');

		if (
			window.sessionStorage.getItem('Refreshing_Data') === 'false' &&
			window.sessionStorage.getItem('Music_Window_Cleared') === 'true'
		) {
			console.log('Printing Spotify Data');
		} else if (window.sessionStorage.getItem('Refreshing_Data') === 'false') {
			musicRow.classList.remove('hidden');
			spotifyApiButton.classList.remove('row');
			spotifyApiButton.classList.remove('music-para-row');
			spotifyApiButton.classList.add('hidden');
			musicParagraph.classList.add('hidden');
			spotifyButton.classList.add('hidden');
			window.sessionStorage.setItem('Music_Window_Cleared', true);
		} else {
			console.log('Reached The Clearing Stage');
			if (option === 'artists') {
				const removeArtistLinks =
					document.getElementsByClassName('artist-row-link');
				this.artistsParentElement = removeArtistLinks[0].parentNode;
				while (removeArtistLinks.length > 0) {
					removeArtistLinks[0].parentNode.removeChild(removeArtistLinks[0]);
				}
			}

			if (option === 'tracks') {
				const removeTrackLinks =
					document.getElementsByClassName('track-row-link');
				this.tracksParentElement = removeTrackLinks[0].parentNode;

				while (removeTrackLinks.length > 0) {
					removeTrackLinks[0].parentNode.removeChild(removeTrackLinks[0]);
				}
			}
		}

		let html = ``;

		if (option === 'artists') {
			spotifyData.items.forEach((obj, index) => {
				html = `<a href="${
					obj.uri
				}" class="artist-row-link" ><div class="row artist-row" >
                        <div class="col span-1-of-8 artist-rating-col">
                            <h2>${index + 1}</h2>
                        </div>
                        <div class="col span-2-of-8 artist-pic-col">
                            <img src="${obj.images[2].url}" alt="Artist Pic">
                        </div>
                        <div class="col span-5-of-8 artist-name-col">
                            <p>${obj.name}</p>
                        </div>
                    </div></a>`;
				if (this.artistsParentElement === '') {
					artistsRowId.insertAdjacentHTML('beforeend', html);
				} else {
					this.artistsParentElement.insertAdjacentHTML('beforeend', html);
				}
			});

			if (this.artistsParentElement === '') {
				let musicScrollBarElement1 = artistsRowId;
				new SimpleBar(musicScrollBarElement1, { autoHide: false });
			}
		} else {
			spotifyData.items.forEach((obj, index) => {
				html = `<a href="${
					obj.uri
				}" class="track-row-link"><div class="row track-row">
                        <div class="col span-1-of-8 track-rating-col">
                            <h2>${index + 1}</h2>
                        </div>
                        <div class="col span-2-of-8 albulm-art-col">
                            <img src="${
															obj.album.images[1].url
														}" alt="Albulm Art">
                        </div>
                        <div class="col span-5-of-8 track-info-col">
                            <div class="row track-name-row">
                                <p>${obj.name}</p>
                            </div>
                            <div class="row artist-name-row">
                                <p>${obj.artists[0].name}</p>
                            </div>
                        </div>
                        
                    </div></a>`;

				if (this.artistsParentElement === '') {
					tracksRowId.insertAdjacentHTML('beforeend', html);
				} else {
					this.tracksParentElement.insertAdjacentHTML('beforeend', html);
				}
			});

			if (this.tracksParentElement === '') {
				let musicScrollBarElement2 = tracksRowId;
				new SimpleBar(musicScrollBarElement2, { autoHide: false });
			}
		}
	}

	/**
	 * Retrieves the ClientId as soon as the document is ready
	 * @param {function} handler function to retreive the client Id
	 */
	handleClientId(handler) {
		document.onreadystatechange = function () {
			if (document.readyState === 'loading') {
				handler();
			} else if (document.readyState === 'complete') {
				handler();
			}
		};
	}
}

export default new SpotifyApiView();
