// src/App.jsx

import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import SkillsEducation from './components/SkillsEducation';

function App() {
  return (
    <>
      <Navbar /> 
      <main>
        <Hero /> 
        <SkillsEducation /> {/* Yetenekler ve Eğitimi ekle */}
        {/* Projeler ve İletişim buraya gelecek */}
      </main>
    </>
  );
}

export default App;