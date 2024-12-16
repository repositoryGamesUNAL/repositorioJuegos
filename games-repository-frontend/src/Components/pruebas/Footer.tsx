import React from 'react';

// Define las props que acepta el componente
interface FooterProps {
  className?: string; // Prop opcional para estilos
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  // Define estilos utilizando CSSProperties
  const footerStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    color: '#333',
    textAlign: 'center',
  };

  const columnStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const menuStyles: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkStyles: React.CSSProperties = {
    textDecoration: 'none',
    color: '#333',
    marginBottom: '0.5rem',
  };

  return (
    <footer style={footerStyles} className={className}>
      {/* Primera columna */}
      <div style={columnStyles}>
        <ul style={menuStyles}>
          <li><a href="/" style={linkStyles}>Home</a></li>
          <li><a href="/about" style={linkStyles}>About</a></li>
          <li><a href="/contact" style={linkStyles}>Contact</a></li>
        </ul>
      </div>

      {/* Segunda columna */}
      <div style={columnStyles}>
        <button style={{ margin: '0.5rem 0' }}>Subscribe</button>
        <button style={{ margin: '0.5rem 0' }}>Learn More</button>
      </div>

      {/* Tercera columna */}
      <div style={columnStyles}>
        <p>1234 Example Street</p>
        <p>City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
