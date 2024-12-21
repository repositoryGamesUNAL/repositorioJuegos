import React from 'react';
import InputList from '../molecules/inputList/inputList';

const Home: React.FC = () => {
    return (
		<div style={{ padding: '20px', width: '70%' }}>
			<h1>Welcome to the Home Page</h1>
			<InputList
				layout='column'
				placeholder='Concepto Fundamental'
			/>
		</div>
	);
};

export default Home;