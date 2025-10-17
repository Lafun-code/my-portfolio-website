// src/App.jsx

import TerminalShell from './components/TerminalShell'; 
import './index.css'; // Global stilleri tutar (Eğer index.css'i temizlediyseniz, bu satırı tutun)

function App() {
  return (
    <>
      {/* Tüm site artık tek bir terminal kabuğu içinde */}
      <TerminalShell />
    </>
  );
}

export default App;