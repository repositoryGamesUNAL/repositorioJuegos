import React from 'react';
import Headlines from '../atoms/headlines';

const About: React.FC = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Headlines level="h1" text="About Us "></Headlines>
      <p>
        We are a team of students passionate about technology and innovation.
        Meet our members:
      </p>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        mollitia earum corporis iusto, ab perspiciatis eos minus dicta molestiae
        nobis autem a vitae, aliquid illo distinctio dignissimos commodi
        deleniti quae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Provident a facere illum quod? Perspiciatis dicta error quos omnis
        labore odio natus voluptate in quasi iusto cupiditate provident
        officiis, vel tempore.
      </p>
    </div>
  );
};

export default About;
