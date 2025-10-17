// src/components/Hero.jsx

import React from 'react';
import './Hero.css'; 

const Hero = () => {
  const name = "Hüsnü Emre Berkay";
  const title = "Full-Stack Developer & Retro Technology Enthusiast";
  const aboutText = `Hello! I'm Emre. I build innovative solutions with modern web technologies. My journey started with HTML and CSS, and today I develop complex applications using technologies like C++ and C#. In my free time, I enjoy playing old games and dabbling in pixel art.`;

  return (
    <section id="home" className="hero-section">
      {/* TerminalShell'den dolayı terminal-header'ı kaldırdık */}
      <div className="terminal-body">
        {/* Giriş Komutu */}
        <p className="terminal-line prompt">guest@portfolio:~$ whoami</p>
        <p className="terminal-line output">
            <span className="accent-text">{name}</span>
        </p>

        {/* Ana Başlık */}
        <p className="terminal-line output sub-title">
            &gt; {title}
        </p>
        
        {/* Hakkımda Metni */}
        <p className="terminal-line prompt">guest@portfolio:~$ cat about.txt</p>
        {aboutText.split('\n').map((line, index) => (
          <p key={index} className="terminal-line output text-content">{line}</p>
        ))}
        
        {/* İletişim bilgileri veya bitiş komutu */}
        <p className="terminal-line prompt blinking-cursor">guest@portfolio:~$</p>
      </div>
    </section>
  );
};

export default Hero;