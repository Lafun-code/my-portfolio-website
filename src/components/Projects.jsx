// src/components/Projects.jsx

import React from 'react';

const PROJECTS_DATA = [
    {
        name: "Game 'Development' (C++)",
        description: "Memory analysis and real-time modification developed with C++.",
        details: ["Technology: C++", "Focus: Low-level memory manipulation, system interaction.", "Status: Ongoing research project."],
        link: "https://github.com/Lafun-code/game-project-repo" 
    },
    {
        name: "Discord Bot (JS)",
        description: "An interactive music bot developed with JS for user engagement.",
        details: ["Technology: JavaScript (Node.js), Discord.js Library", "Focus: API integration, real-time communication.", "Status: Stable, deployed on a private server."],
        link: "https://github.com/Lafun-code/discord-bot-repo"
    }
];

const Projects = () => {
  return (
    <div className="terminal-body" id="projects">
        
        <p className="terminal-line prompt">guest@portfolio:~$ ls projects.dir</p>
        
        {PROJECTS_DATA.map((project, projectIndex) => (
            <div key={projectIndex} className="project-entry">
                
                <p className="terminal-line output">
                    <span className="accent-text">[{projectIndex + 1}] {project.name}</span>
                </p>
                
                <p className="terminal-line output text-content" style={{ marginLeft: '15px' }}>
                    Açıklama: {project.description}
                </p>

                <ul className="terminal-list" style={{ marginLeft: '15px' }}>
                    {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="terminal-line output">
                           - {detail}
                        </li>
                    ))}
                </ul>
                
                <p className="terminal-line output prompt" style={{ marginLeft: '15px' }}>
                    Repo: <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="link-style"
                           >
                            {project.link.split('/').pop()} (link)
                          </a>
                </p>

                {projectIndex < PROJECTS_DATA.length - 1 && 
                    <p className="terminal-line output" style={{ color: '#444', marginTop: '10px' }}>---</p>
                }
            </div>
        ))}
        
        <p className="terminal-line prompt blinking-cursor" style={{ marginTop: '20px' }}>guest@portfolio:~$</p>
    </div>
  );
};

export default Projects;