import {
	createAuth0Client,
	type Auth0Client,
} from "@auth0/auth0-spa-js";

let auth0ClientPromise: Promise<Auth0Client> | null = null;

export function getAuth0Client(): Promise<Auth0Client> {
	if (auth0ClientPromise) {
		return auth0ClientPromise;
	}

	const domain = import.meta.env.PUBLIC_AUTH0_DOMAIN;
	const clientId = import.meta.env.PUBLIC_AUTH0_CLIENT_ID;

	if (!domain || !clientId) {
		throw new Error(
			"Missing PUBLIC_AUTH0_DOMAIN or PUBLIC_AUTH0_CLIENT_ID"
		);
	}

	const baseUrl = new URL(
		import.meta.env.BASE_URL,
		window.location.origin
	).toString();

	auth0ClientPromise = createAuth0Client({
		domain,
		clientId,

		authorizationParams: {
			redirect_uri: baseUrl,
		},

		cacheLocation: "localstorage",
		useRefreshTokens: true,
	});

	return auth0ClientPromise;
}

export function getBaseUrl() {
	return new URL(
		import.meta.env.BASE_URL,
		window.location.origin
	).toString();
}