export default function validateInfo(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = 'Username required';
	}

	if (!values.email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!values.entry) {
		errors.entry =
			'Hey! We need a real Slogan! You could even win some prizes!';
	}
	return errors;
}
