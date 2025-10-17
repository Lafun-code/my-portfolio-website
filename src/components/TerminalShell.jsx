// src/components/TerminalShell.jsx

import React, { useState } from 'react';
import './Hero.css'; 
import Hero from './Hero'; 
import SkillsEducation from './SkillsEducation';
import Projects from './Projects'; 
import Contact from './Contact';   

const MENU_ITEMS = [
    { id: 'about', label: 'about.txt' },
    { id: 'skills', label: 'skills.ini' },
    { id: 'education', label: 'education.log' },
    { id: 'projects', label: 'projects.dir' },
    { id: 'contact', label: 'contact.bat' },
];

const TerminalShell = () => {
    // Varsayılan olarak 'about' bölümünü göster
    const [activeSection, setActiveSection] = useState('about'); 

    // Aktif içeriği döndüren fonksiyon
    const renderContent = () => {
        switch (activeSection) {
            case 'about':
                return <Hero />;
            case 'skills':
            case 'education': // Hem skills hem de education için aynı bileşeni kullan
                return <SkillsEducation activeSection={activeSection} />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            default:
                return <Hero />;
        }
    };

    return (
        <div className="terminal-page-container">
            <section className="terminal-window full-page">
                {/* 1. Terminal Başlığı (Window Header) */}
                <div className="terminal-header">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                    <span className="terminal-title">user@emre-portfolio: /run/{activeSection}</span>
                </div>

                {/* 2. Navigasyon / Menü */}
                <nav className="terminal-navbar">
                    <ul className="terminal-links">
                        {MENU_ITEMS.map((item) => (
                            <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                                {/* Tıklanınca aktif bölümü değiştirir */}
                                <a href="#!" onClick={() => setActiveSection(item.id)}>
                                    [{item.label}]
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3. İçerik Alanı */}
                <div className="terminal-content-area">
                    {renderContent()}
                </div>
            </section>
        </div>
    );
};

export default TerminalShell;