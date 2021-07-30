import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		slogan: '',
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
