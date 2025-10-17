// src/components/Contact.jsx

import React from 'react';

const CONTACT_DATA = {
    email: "husnuemre@outlook.com",
    github: "Lafun-code",
    linkedin: "husnu-emre-berkay-040b46270"
};

const Contact = () => {
    return (
        <div className="terminal-body" id="contact">
            
            <p className="terminal-line prompt">guest@portfolio:~$ run contact.bat</p>
            
            <p className="terminal-line output sub-title">
                // İletişim Kanalları:
            </p>

            {/* Email */}
            <p className="terminal-line output">
                <span className="accent-text">Email: </span>
                <a href={`mailto:${CONTACT_DATA.email}`} className="link-style">
                    {CONTACT_DATA.email}
                </a>
            </p>

            {/* GitHub */}
            <p className="terminal-line output">
                <span className="accent-text">GitHub: </span>
                <a href={`https://github.com/${CONTACT_DATA.github}`} target="_blank" rel="noopener noreferrer" className="link-style">
                    {CONTACT_DATA.github}
                </a>
            </p>

            {/* LinkedIn */}
            <p className="terminal-line output">
                <span className="accent-text">LinkedIn: </span>
                <a href={`https://www.linkedin.com/in/${CONTACT_DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="link-style">
                    {CONTACT_DATA.linkedin}
                </a>
            </p>

            <p className="terminal-line prompt blinking-cursor" style={{ marginTop: '20px' }}>guest@portfolio:~$</p>
        </div>
    );
};

export default Contact;