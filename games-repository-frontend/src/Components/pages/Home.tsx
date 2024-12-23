import React from 'react';
import InputList from '../molecules/inputList';

const Home: React.FC = () => {
    return (
		<div style={{ padding: '20px', width: '50%', alignItems: 'center', margin: 'auto' }}>
			<h1>Welcome to the Home Page</h1>
			<h2>La comunicación es la unica opción</h2>
			<img 
				style={{ width: '500px', height: 'auto' }}
				src="/vacaciones.jpg" alt="" />
		</div>
	);
};

export default Home;
