import React from 'react';
import Headlines from '../atoms/headlines';

const About: React.FC = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
    <Headlines level="h1" text="About Us "></Headlines>
    <ul style={{ listStyleType: "none", padding: 0, lineHeight: "1.8" }}>
      <li>Sara Acevedo Maya</li>
      <li>Juan José Martínez Grisales</li>
      <li>Harrison Zuleta Montoya</li>
      <li>Juan Sebastian Zapata Echeverri</li>
      <li>Kevin Leonardo Arias Orrego</li>
      <li>Andres Felipe Guido Montoya</li>
      <li>Madeleinne Paulina Henao García</li>
    </ul>
    <p>
      Together, we strive to create projects that solve real-world problems
      and contribute to our personal and professional growth.
    </p>
      <p style={{ fontSize: "2.8em", marginTop: "50px" }}>
          <img 
            style={{
              width: '150px',
              height: 'auto'
            }}
          src="/roshigoku.jpg" 
          alt="" 
        />
        
      </p>
      <p style={{ fontSize: "2.8em" }}>
        Sara y Juanse el ultimo dia
      </p>
    </div>
  );
};

export default About;
