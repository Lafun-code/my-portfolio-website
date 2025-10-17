// src/components/SkillsEducation.jsx

import React from 'react';
// Hero.css'i yeniden kullanabiliriz veya bu bölüm için yeni bir CSS oluşturabiliriz. 
// Şimdilik Hero.css'in terminal stillerini kullanalım.
import './Hero.css'; 

// Yetenek verisi (skills.ini taklidi)
const SKILLS_DATA = [
    "JavaScript (ES6+)",
    "C++ (Basics)",
    "C# (Basics)",
    "HTML5 & CSS3",
    "SQL & NoSQL (PostgreSQL, MongoDB)",
    "Git & GitHub",
];

// Eğitim verisi (education.log taklidi)
const EDUCATION_DATA = {
    school: "Mehmet Akif Ersoy University",
    program: "Computer Programming",
    years: "2023 - Present"
};

const SkillsEducation = () => {
    return (
        <section className="terminal-window" style={{ marginTop: '3rem' }}>
            <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">user@emre-portfolio: ~$ skills.ini</span>
            </div>
            
            <div className="terminal-body" id="skills">
                {/* Yetenekler Başlığı ve Komutu */}
                <p className="terminal-line prompt">guest@portfolio:~$ cat skills.ini</p>
                <p className="terminal-line output sub-title">
                    // Anahtar Yetenekler:
                </p>
                
                {/* Yetenek Listesi */}
                <ul className="terminal-list">
                    {SKILLS_DATA.map((skill, index) => (
                        <li key={index} className="terminal-line output">
                            <span className="accent-text">[{index + 1}]</span> {skill}
                        </li>
                    ))}
                </ul>

                <br/>
                
                {/* Deneyim ve Eğitim Başlangıcı */}
                <div id="education">
                    <div className="terminal-header" style={{borderRadius: '0', background: '#3e4451'}}>
                        <span className="terminal-dot red"></span>
                        <span className="terminal-dot yellow"></span>
                        <span className="terminal-dot green"></span>
                        <span className="terminal-title">user@emre-portfolio: ~$ education.log</span>
                    </div>

                    <div className="terminal-body" style={{paddingTop: '15px'}}>
                        <p className="terminal-line prompt">guest@portfolio:~$ cat education.log</p>
                        
                        <p className="terminal-line output">
                            <span className="accent-text">{EDUCATION_DATA.school}</span>
                        </p>
                        <p className="terminal-line output">
                            Program: {EDUCATION_DATA.program}
                        </p>
                        <p className="terminal-line output">
                            Yıllar: {EDUCATION_DATA.years}
                        </p>
                    </div>
                </div>

                {/* Yanıp Sönen İmleç */}
                <p className="terminal-line prompt blinking-cursor">guest@portfolio:~$</p>
            </div>
        </section>
    );
};

export default SkillsEducation;