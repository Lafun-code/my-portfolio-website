// src/components/SkillsEducation.jsx

import React from 'react';

// Yetenek verisi
const SKILLS_DATA = [
    "JavaScript (ES6+)",
    "C++ (Basics)",
    "C# (Basics)",
    "HTML5 & CSS3",
    "SQL & NoSQL (PostgreSQL, MongoDB)",
    "Git & GitHub",
];

// Eğitim verisi
const EDUCATION_DATA = {
    school: "Mehmet Akif Ersoy University",
    program: "Computer Programming",
    years: "2023 - Present"
};

const SkillsEducation = () => {
    return (
        // Bu bölümü tek bir div içinde tutarak TerminalShell'e entegre ediyoruz.
        <div style={{ padding: '0 25px' }}>

            {/* YETENEKLER BÖLÜMÜ */}
            <div id="skills">
                {/* Başlık Komutu */}
                <p className="terminal-line prompt">guest@portfolio:~$ cat skills.ini</p>
                <p className="terminal-line output sub-title">
                    // Anahtar Yetenekler:
                </p>
                
                {/* Yetenek Listesi - HATA DÜZELTME BU KISIMDA! */}
                <ul className="terminal-list">
                    {SKILLS_DATA.map((skill, index) => (
                        <li key={index} className="terminal-line output">
                            {/* Metnin görüntülendiğinden emin olun */}
                            <span className="accent-text">[{index + 1}]</span> {skill} 
                        </li>
                    ))}
                </ul>
            </div>

            <br/>
            
            {/* EĞİTİM BÖLÜMÜ */}
            <div id="education">
                {/* Başlık Komutu */}
                <p className="terminal-line prompt">guest@portfolio:~$ cat education.log</p>
                
                <p className="terminal-line output">
                    <span className="accent-text">{EDUCATION_DATA.school}</span>
                </p>
                <p className="terminal-line output" style={{ paddingLeft: '15px' }}>
                    Program: {EDUCATION_DATA.program}
                </p>
                <p className="terminal-line output" style={{ paddingLeft: '15px' }}>
                    Yıllar: {EDUCATION_DATA.years}
                </p>
            </div>
            
            {/* Yanıp Sönen İmleç */}
            <p className="terminal-line prompt blinking-cursor" style={{ marginTop: '20px' }}>guest@portfolio:~$</p>
        </div>
    );
};

export default SkillsEducation;