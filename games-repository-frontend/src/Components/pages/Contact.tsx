import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions or want to reach out, here is our contact information:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>Email: studentteam@example.com</li>
        <li>Phone: +1 (555) 123-4567</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
    </div>
  );
};

export default Contact;