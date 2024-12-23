import React from 'react';
import { useForm } from '../hooks/useForm';

const Step3: React.FC = () => {
	const { state, dispatch } = useForm();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form Data Submitted:', state.formData);
		alert('Form submitted successfully!');
		dispatch({ type: 'RESET_FORM' });
	};

	const handleBack = () => {
		dispatch({ type: 'PREV_STEP' });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Step 3: Review and Submit</h2>
			<p><strong>First Name:</strong> {state.formData.firstName}</p>
			<p><strong>Last Name:</strong> {state.formData.lastName}</p>
			<p><strong>Email:</strong> {state.formData.email}</p>
			<p><strong>Phone:</strong> {state.formData.phone}</p>

			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
				<button type="button" onClick={handleBack}>
				Back
				</button>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default Step3;