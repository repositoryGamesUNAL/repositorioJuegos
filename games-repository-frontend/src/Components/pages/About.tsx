import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>About Us</h1>
      <p>We are a team of students passionate about technology and innovation. Meet our members:</p>
      <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.8' }}>
        <li>Sara Acevedo Maya</li>
        <li>Juan José Martínez Grisales</li>
        <li>Harrison Zuleta Montoya</li>
        <li>Juan Sebastian Zapata Echeverri</li>
        <li>Kevin Leonardo Arias Orrego</li>
        <li>Andres Felipe Guido Montoya</li>
        <li>Madeleinne Paulina Henao García</li>
      </ul>
      <p>
        Together, we strive to create projects that solve real-world problems and contribute to our personal and
        professional growth.
      </p>
    </div>
  );
};

export default About;
