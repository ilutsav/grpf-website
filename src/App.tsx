import { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardContent from './components/Dashboard';
import About from './components/About';
import Members from './components/Members';
import FinancialDetails from './components/FinancialDetails';
import Contact from './components/Contact';
import './i18n';

function App() {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <DashboardContent />;
      case 'about':
        return <About />;
      case 'members':
        return <Members />;
      case 'financial-details':
        return <FinancialDetails />;
      case 'contact':
        return <Contact />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="App">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderSection()}
    </div>
  );
}

export default App;
