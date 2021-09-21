import {
	AUTH_URI_BASE,
	RESPONSE_TYPE,
	REDIRECT_URI,
	SCOPE,
	SPOTIFY_TOKEN_BASE_URL,
} from './musicConfig.js';

import CryptoJS from '../../../node_modules/crypto-js/crypto-js.js';

let authorizationURI = '';
let refresh_token = '';
let access_token = '';
let authorizationCode = '';
let returnedState = '';
let CLIENT_ID;

export const state = {
	spotifyDataTracks: {},
	spotifyDataArtists: {},
	expiresIn: 0,
};

/* 
Listen for changes to the data variable after retrieving the access token
On Change grab the time for expiration, the refresh token, and the access token
*/
let data = {
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

data.registerListener(function (val) {
	state.expiresIn = data.val.expires_in;
	refresh_token = data.val.refresh_token;
	access_token = data.val.access_token;
});

/* 
Listen for changes to the authenticated URI 
On Change send the authenticated URI to have the parameters extracted
*/
let authenticatedURI = {
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

authenticatedURI.registerListener(function (val) {
	getQueryFromUrl(authenticatedURI.value);
});

/**
 * Function to store the authorization code and the state.
 * Then redirects us to the music section of my web page
 * @param {object} authenticatedParams parameter object retrieved from the Spotify redirect URL
 */
function getQueryFromUrl(authenticatedParams) {
	const urlSearchParams = new URLSearchParams(authenticatedParams);
	const params = Object.fromEntries(urlSearchParams.entries());
	authorizationCode = params.code;
	returnedState = params.state;
	window.sessionStorage.setItem(
		'Returned_Authorization_Code',
		authorizationCode
	);
	window.sessionStorage.setItem('Returned_State_Code', returnedState);
	window.location.href = 'https://www.jessewolven.com/#music-section';
}

/**
 * Async function to retrieve refreshed access tokens
 * @returns promise
 */
export async function requestRefreshedAccessToken() {
	try {
		const res = await fetch(SPOTIFY_TOKEN_BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `client_id=${CLIENT_ID}&grant_type=refresh_token&refresh_token=${refresh_token}`,
		});

		window.sessionStorage.setItem('Refreshing_Data', true);

		data.val = await res.json();
		await accessSpotifyWebAPI(access_token, 'artists');
		await accessSpotifyWebAPI(access_token, 'tracks');
		return;
	} catch (err) {
		throw Error(
			`Error in token retrieval Error: ${err} Error Description: ${err.error_description} Error Status: ${err.status} Error Message: ${err.message}`
		);
	}
}

/**
 * Function to generate a random string as an extra security measure when connecting to Spotify
 * @returns random state string
 */
function generateRandomStateString() {
	let randomStateString = '';
	const possibleCharacters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const minLength = 5;
	const maxLength = 9;
	// Random length between min and max:
	const stringLength = Math.floor(
		Math.random() * (maxLength - minLength + 1) + minLength
	);

	for (let i = 0; i < stringLength; i++) {
		randomStateString += possibleCharacters.charAt(
			Math.floor(Math.random() * possibleCharacters.length)
		);
	}

	return randomStateString;
}

/**
 * Function to generate a random string called the verification string for PKCE
 * @returns random verification string
 */
function generateRandomCodeVerificationString() {
	let randomCodeVerificationString = '';
	const possibleCharacters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
	const minLength = 43;
	const maxLength = 128;
	// Random length between min and max:
	const stringLength = Math.floor(
		Math.random() * (maxLength - minLength + 1) + minLength
	);

	for (let i = 0; i < stringLength; i++) {
		randomCodeVerificationString += possibleCharacters.charAt(
			Math.floor(Math.random() * possibleCharacters.length)
		);
	}

	return randomCodeVerificationString;
}

/**
 * Function to base64 encode the SHA-256, code verification string
 */
function base64URL(string) {
	return string
		.toString(CryptoJS.enc.Base64)
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
}

/**
 * Function to generate a code challenge, used in PKCE authorization
 * @param {string} code_verifier
 * @returns string code challenge
 */
function generateCodeChallenge(code_verifier) {
	return base64URL(CryptoJS.SHA256(code_verifier));
}

/**
 * Constructs the authorization URI that we redirect the user to for authorization
 */
function constructAuthorizationURI() {
	window.sessionStorage.setItem('State', generateRandomStateString());
	window.sessionStorage.setItem(
		'Code_Verifier',
		generateRandomCodeVerificationString()
	);

	const codeChallengeString = generateCodeChallenge(
		window.sessionStorage.getItem('Code_Verifier')
	);

	window.sessionStorage.setItem('Code_Challenge', codeChallengeString);

	authorizationURI =
		AUTH_URI_BASE +
		'?response_type=' +
		RESPONSE_TYPE +
		'&client_id=' +
		CLIENT_ID +
		'&redirect_uri=' +
		REDIRECT_URI +
		'&scope=' +
		SCOPE +
		'&state=' +
		window.sessionStorage.getItem('State') +
		'&code_challenge=' +
		window.sessionStorage.getItem('Code_Challenge') +
		'&code_challenge_method=S256';
}

/**
 * Redirect user to the authorization page
 */
function requestUserAuthorization() {
	window.location.href = authorizationURI;
}

/**
 * First stages of authorization before redirecting the user
 */
export async function beginAuthorization() {
	constructAuthorizationURI();
	requestUserAuthorization();
}

/**
 * Set the authenticated URI for handling
 * @param {string} authenticatedUri
 */
export function setAuthenticatedURI(authenticatedUri) {
	authenticatedURI.val = authenticatedUri;
}

/**
 * Request Data from Spotify
 * @param {string} accessToken used for spotify data retrieval
 * @param {string} option depending on if we're retrieving tracks or artists
 * @returns
 */
async function accessSpotifyWebAPI(accessToken, option) {
	try {
		const res = await fetch(
			option === 'artists'
				? window.sessionStorage.getItem('webApiArtists')
				: window.sessionStorage.getItem('webApiTracks'),
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization: 'Bearer ' + accessToken,
				},
			}
		);

		if (option === 'artists') {
			state.spotifyDataArtists = await res.json();
		} else {
			state.spotifyDataTracks = await res.json();
		}

		return;
	} catch (err) {
		throw Error(
			`Error in token retrieval Error: ${err} Error Description: ${err.error_description} Error Status: ${err.status} Error Message: ${err.message}`
		);
	}
}

/**
 * Request an access token after authorization
 * @returns promise
 */
async function requestAccessToken() {
	try {
		const res = await fetch(SPOTIFY_TOKEN_BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `client_id=${CLIENT_ID}&grant_type=authorization_code&code=${window.sessionStorage.getItem(
				'Returned_Authorization_Code'
			)}&redirect_uri=${REDIRECT_URI}&code_verifier=${window.sessionStorage.getItem(
				'Code_Verifier'
			)}`,
		});

		window.sessionStorage.setItem('Refreshing_Data', false);
		window.sessionStorage.setItem('Music_Window_Cleared', false);

		data.val = await res.json();
		await accessSpotifyWebAPI(access_token, 'artists');
		await accessSpotifyWebAPI(access_token, 'tracks');
		return;
	} catch (err) {
		throw Error(
			`Error in token retrieval Error: ${err} Error Description: ${err.error_description} Error Status: ${err.status} Error Message: ${err.message}`
		);
	}
}

/**
 * Ensure the state matches then request an access token
 * @returns promise
 */
export async function continueWithAuthentication() {
	// If the State matches, proceed
	if (
		window.sessionStorage.getItem('Returned_State_Code') ===
		window.sessionStorage.getItem('State')
	) {
		await requestAccessToken();
		return;
	}
	// Else, fail and cancel authentication flow
	else {
		alert('State mismatch, authentication failed.');
	}
}

/**
 * Retrieve the client Id
 */
export function setClientId() {
	let oReq = new XMLHttpRequest(); // New request object
	oReq.onload = function () {
		// This is where you handle what to do with the response.
		// The actual data is found on this.responseText

		CLIENT_ID = this.responseText.slice(1, -1);
	};
	oReq.open('get', './src/resources/php/music.php', true);
	oReq.send();
}
