import * as model from './model.js';
import pageNavigationView from './views/pageNavigationView.js';
import skillsView from './views/skillsView.js';
import musicView from './views/musicView.js';
import photoView from './views/photographyView.js';
import contactView from './views/contactView.js';
import mobileView from './views/mobileNavigationView.js';
import '../../../node_modules/regenerator-runtime/runtime.js';

/* 
Listen for changes to the spotify data retrived from the server
On Change, display the data to the screen
*/
let spotifyData = {
	value: '',
	listener: function (val) {},
	set val(val) {
		this.value = val;
		this.listener(val);
	},
	get val() {
		return this.value;
	},
	registerListener: function (listener) {
		this.listener = listener;
	},
};

spotifyData.registerListener(function (val) {
	musicView.handleSpotifyDataDisplay(
		spotifyData.val.spotifyDataArtists,
		'artists'
	);
	musicView.handleSpotifyDataDisplay(
		spotifyData.val.spotifyDataTracks,
		'tracks'
	);
});

/* 
Listen for changes to the expires_in variable 
On Change set a timeout before grabbing a refreshed access token 
*/
let expires_in = {
	value: '',
	listener: function (val) {},
	set val(val) {
		this.value = val;
		this.listener(val);
	},
	get val() {
		return this.value;
	},
	registerListener: function (listener) {
		this.listener = listener;
	},
};

expires_in.registerListener(function (val) {
	refreshTokenCountdown(expires_in.val);
});

/**
 * Sets a timer that on expiration requests a refreshed access token from Spotify
 * @param {number} expiresIn Milliseconds before the Spotify API access token expires
 */
const refreshTokenCountdown = function (expiresIn) {
	setTimeout(controlRefreshedAccessToken, 1000 * expiresIn - 300000);
};

/**
 * Generates verification codes and authorization URI, then redirects to the authorization URI
 */
function controlSpotifyAuthorization() {
	try {
		model.beginAuthorization();
	} catch (err) {
		console.error(err);
	}
}

/**
 * Sets the authorization uri for the user to authenticate
 * @param {string} uri to the Spotify user authorization page
 */
function controlAquireAuthenticatedUri(uri) {
	try {
		model.setAuthenticatedURI(uri);
	} catch (err) {
		console.error(err);
	}
}

/**
 * Request the initial access token from Spotify and initiate a timer for refreshed access token retrieval
 */
async function controlRequestAcessToken() {
	try {
		await model.continueWithAuthentication();
		spotifyData.val = model.state;
		expires_in.val = model.state.expiresIn;
	} catch (err) {
		console.error(err);
	}
}

/**
 * Retrieve a new access token using the refresh token and setup recurring retrievals
 */
async function controlRefreshedAccessToken() {
	try {
		await model.requestRefreshedAccessToken();
		spotifyData.val = model.state;
		expires_in.val = model.state.expiresIn;
	} catch (err) {
		console.error(err);
	}
}

/**
 * Set the Spotify Client ID on page load, needed to keep it secret
 */
function controlClientId() {
	model.setClientId();
}

/**
 * Page initiation.
 * Controls all JavaScript calls
 */
function init() {
	// Page navigation and initiation
	pageNavigationView.smoothScrollHandler();
	musicView.handleClientId(controlClientId);
	mobileView.handleMobileNavMenu();

	// Handle the contact form submission logic
	contactView.handleContactFormSubmission();

	// Skills Button animation and modal handler
	skillsView.handleTimelineModal();

	// Spotify API connection handling
	musicView.handleTimeFrameSelection();
	musicView.handleAquiringAuthenticatedUri(controlAquireAuthenticatedUri);
	musicView.handleSpotifyConnectionButton(controlSpotifyAuthorization);
	musicView.handleRequestingAccessToken(controlRequestAcessToken);

	// Photography grid display, button handling, and photo modal handling
	photoView.handleDisplayingPhotoGrid();
	photoView.handlePhotoModal();
}

// Page Initiation Function Call:
init();
