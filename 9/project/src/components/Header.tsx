import { Shield } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const navItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'concepts', label: 'Concepts' },
    { id: 'demo', label: 'Demo' },
    { id: 'features', label: 'Features' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'interview', label: 'Interview Prep' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-emerald-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Fraud Detection Learning Platform
              </h1>
              <p className="text-sm text-slate-600">
                Learn Random Forest & Credit Card Fraud Detection
              </p>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
