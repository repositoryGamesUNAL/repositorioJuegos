//import React from 'react';
import './styles.module.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Menu 1</h4>
                <button>Button</button>
                <p>+7 (495) 000-00-00</p>
            </div>
            <div className="footer-section">
                <h4>Menu 2</h4>
                <p>mon-fri 9:00 - 18:00</p>
            </div>
            <div className="footer-section">
                <h4>Menu 3</h4>
                <button>Button 2</button>
                <p>Moscow,ul. Name d. 1</p>
            </div>
            <div className="footer-section">
                <h4>Menu 4</h4>
                <button>Button</button>
                <address>mhenaoga@unal.edu.co</address>
            </div>
            <div className="footer-section">
                <h4>Menu 5</h4>
            </div>
            <div>
                <p>© 2021-2021 Company name. All rights reserved</p>
                <a href="/privacity_ppolicy">Privacy Policy</a>
            </div>
        </footer>
    );
}

export default Footer;