import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, Info, Phone, DollarSign, Users } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isNepali = i18n.language === 'ne';

  const navItems = [
    { id: 'dashboard', label: t('nav.dashboard'), icon: Home },
    { id: 'about', label: t('nav.about'), icon: Info },
    { id: 'members', label: t('nav.members'), icon: Users },
    { id: 'financial-details', label: t('nav.financialDetails'), icon: DollarSign },
    { id: 'contact', label: t('nav.contact'), icon: Phone },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold text-gray-800 ${isNepali ? 'nepali-text' : ''}`}>
              {isNepali ? 'ग्लोबल रिलेसन प्रोभिजनल फण्ड' : 'GRPF'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                      currentSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                    } ${isNepali ? 'nepali-text' : ''}`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Language Switcher & Mobile menu button */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2 ${
                      currentSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                    } ${isNepali ? 'nepali-text' : ''}`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;