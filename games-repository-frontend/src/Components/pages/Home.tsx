import React from 'react';
import InputList from '../molecules/inputList/inputList';

const Home: React.FC = () => {
    return (
		<div>
			<h1>Welcome to the Home Page</h1>
			<InputList
				placeholder='Concepto Fundamental'
			/>
		</div>
	);
};

export default Home;