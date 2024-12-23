import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <img 
          style={{
            height: '340px' // Si deseas que la altura se ajuste proporcionalmente
          }} 
          src="/perrito.jpg" 
          alt="" 
        />
    </div>
  );
};

export default Contact;