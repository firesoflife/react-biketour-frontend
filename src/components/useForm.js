import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		entry: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = e => {
		e.preventDefault();
		console.log('name:', e.target.name, 'value:', e.target.value);
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		// TEST AXIOS
		const data = {
			name: values.username,
			email: values.email,
			entry: values.entry,
		};

		axios
			.post('http://localhost:4000/slogans', data)
			.then(resp => console.log(resp))
			.catch(resp => console.log(resp));

		setErrors(validate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	return { handleChange, handleSubmit, values, errors };
};

export default useForm;
