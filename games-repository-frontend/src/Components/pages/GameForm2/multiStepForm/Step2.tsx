import React from 'react';
import { useForm } from '../hooks/useForm';

const Step2: React.FC = () => {
	const { state, dispatch } = useForm();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(form.entries()) as Record<string, string>;

		dispatch({ type: 'UPDATE_FORM_DATA', payload: data });
		dispatch({ type: 'NEXT_STEP' });
	};

	const handleBack = () => {
		dispatch({ type: 'PREV_STEP' });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Step 2: Contact Information</h2>
			<input
				name="email"
				type="email"
				defaultValue={state.formData.email}
				placeholder="Email Address"
				required
			/>
			<input
				name="phone"
				type="tel"
				defaultValue={state.formData.phone}
				placeholder="Phone Number"
			/>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
				<button type="button" onClick={handleBack}>
				Back
				</button>
				<button type="submit">Next</button>
			</div>
		</form>
	);
};

export default Step2;
