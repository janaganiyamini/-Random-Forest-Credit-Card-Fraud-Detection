import { BarChart3 } from 'lucide-react';

const FeatureImportance = () => {
  const features = [
    { name: 'V14', importance: 0.18, description: 'Highly correlated with fraud patterns' },
    { name: 'V17', importance: 0.16, description: 'Transaction velocity indicator' },
    { name: 'V12', importance: 0.14, description: 'Account behavior pattern' },
    { name: 'V10', importance: 0.12, description: 'Geographic location factor' },
    { name: 'Amount', importance: 0.11, description: 'Transaction amount' },
    { name: 'V4', importance: 0.09, description: 'Merchant category pattern' },
    { name: 'V11', importance: 0.08, description: 'Time-based behavior' },
    { name: 'V16', importance: 0.06, description: 'Card usage frequency' },
    { name: 'Time', importance: 0.04, description: 'Time of transaction' },
    { name: 'V3', importance: 0.02, description: 'Minor contributing factor' },
  ];

  const maxImportance = Math.max(...features.map((f) => f.importance));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-8 h-8 text-emerald-600" />
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Feature Importance Analysis</h2>
            <p className="text-slate-600">
              Understanding which features contribute most to fraud detection
            </p>
          </div>
        </div>

        <div className="mb-8">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="font-bold text-slate-800 mb-3">What is Feature Importance?</h3>
            <p className="text-slate-600 leading-relaxed">
              Feature importance measures how much each feature contributes to the model's
              predictions. In Random Forest, it's calculated based on how much each feature
              decreases impurity (Gini importance) across all trees. Higher values indicate
              features that are more critical for accurate fraud detection.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={feature.name} className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-slate-800 w-8">
                    #{index + 1}
                  </span>
                  <span className="font-bold text-slate-800">{feature.name}</span>
                </div>
                <span className="text-sm font-bold text-emerald-600">
                  {(feature.importance * 100).toFixed(1)}%
                </span>
              </div>
              <div className="mb-2">
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500"
                    style={{ width: `${(feature.importance / maxImportance) * 100}%` }}
                  />
                </div>
              </div>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Why Feature Importance Matters
          </h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                <strong>Model Interpretability:</strong> Helps explain why the model makes
                certain predictions
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                <strong>Feature Selection:</strong> Identify which features to focus on or
                remove
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                <strong>Business Insights:</strong> Understand key fraud indicators for
                prevention strategies
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                <strong>Model Optimization:</strong> Guide feature engineering and data
                collection efforts
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-6 border border-orange-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Key Insights</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-orange-600 mb-2">Top Contributors</h4>
              <p className="text-sm text-slate-600">
                V14, V17, and V12 account for nearly 50% of the model's predictive power,
                indicating these transformed features capture critical fraud patterns.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-emerald-600 mb-2">Amount Significance</h4>
              <p className="text-sm text-slate-600">
                Transaction amount ranks in the top 5, confirming that unusual amounts are
                strong fraud indicators.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-blue-600 mb-2">Time Factor</h4>
              <p className="text-sm text-slate-600">
                Time has lower importance, suggesting fraud can occur at any time, though
                patterns may exist in combination with other features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureImportance;
