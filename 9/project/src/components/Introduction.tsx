import { AlertTriangle, Target, TrendingUp } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Welcome to Fraud Detection Learning
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          This interactive platform helps you understand how machine learning, specifically
          Random Forest algorithms, can detect fraudulent credit card transactions. You'll
          learn about ensemble learning, handling imbalanced datasets, and evaluating model
          performance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">The Problem</h3>
          <p className="text-slate-600">
            Credit card fraud costs billions annually. Traditional rule-based systems
            struggle to keep up with evolving fraud patterns. Machine learning offers
            adaptive solutions.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">The Solution</h3>
          <p className="text-slate-600">
            Random Forest algorithms combine multiple decision trees to identify fraud
            patterns. This ensemble approach provides high accuracy and handles complex,
            imbalanced datasets effectively.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Your Learning</h3>
          <p className="text-slate-600">
            Through this platform, you'll understand ensemble learning, imbalanced data
            handling, model evaluation metrics, and feature importance analysis used in
            real-world fraud detection.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl shadow-lg p-8 border border-emerald-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Task Overview</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Learning Objectives:</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Understand ensemble learning and Random Forest
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Handle imbalanced datasets effectively
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Evaluate models using appropriate metrics
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Analyze feature importance for fraud indicators
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">Key Concepts:</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Precision, Recall, and F1-Score
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Stratified sampling for training
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Model comparison and evaluation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Feature engineering and selection
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
