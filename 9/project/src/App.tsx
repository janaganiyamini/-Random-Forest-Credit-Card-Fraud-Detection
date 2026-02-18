import { useState } from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ConceptExplainer from './components/ConceptExplainer';
import FraudDetectionDemo from './components/FraudDetectionDemo';
import FeatureImportance from './components/FeatureImportance';
import MetricsComparison from './components/MetricsComparison';
import InterviewPrep from './components/InterviewPrep';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {activeSection === 'intro' && <Introduction />}
        {activeSection === 'concepts' && <ConceptExplainer />}
        {activeSection === 'demo' && <FraudDetectionDemo />}
        {activeSection === 'features' && <FeatureImportance />}
        {activeSection === 'metrics' && <MetricsComparison />}
        {activeSection === 'interview' && <InterviewPrep />}
      </main>
    </div>
  );
}

export default App;
