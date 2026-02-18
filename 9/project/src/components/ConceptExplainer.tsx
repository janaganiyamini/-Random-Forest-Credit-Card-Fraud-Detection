import { TreePine, Shuffle, Users } from 'lucide-react';

const ConceptExplainer = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Understanding Random Forest
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
              <TreePine className="w-6 h-6 text-emerald-600" />
              What is Random Forest?
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Random Forest is an ensemble learning method that creates multiple decision
              trees during training and outputs the mode of their predictions. Think of it as
              asking many experts for their opinion and going with the majority vote.
            </p>
            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="font-bold text-slate-800 mb-3">How it Works:</h4>
              <ol className="space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-600">1.</span>
                  <span>
                    <strong>Bootstrap Sampling:</strong> Create multiple random samples from
                    the training data with replacement
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-600">2.</span>
                  <span>
                    <strong>Tree Building:</strong> Train a decision tree on each bootstrap
                    sample using random feature subsets
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-emerald-600">3.</span>
                  <span>
                    <strong>Aggregation:</strong> Combine predictions from all trees through
                    voting (classification) or averaging (regression)
                  </span>
                </li>
              </ol>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Ensemble Learning
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ensemble learning combines multiple models to produce better predictions than
              any single model. Random Forest uses two key ensemble techniques:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-5">
                <h4 className="font-bold text-slate-800 mb-2">Bagging</h4>
                <p className="text-slate-600 text-sm">
                  Bootstrap Aggregating reduces variance by training models on different
                  random samples and combining their predictions.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-5">
                <h4 className="font-bold text-slate-800 mb-2">Feature Randomness</h4>
                <p className="text-slate-600 text-sm">
                  Each tree uses random feature subsets, making trees diverse and reducing
                  correlation between predictions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
              <Shuffle className="w-6 h-6 text-orange-600" />
              Key Parameters
            </h3>
            <div className="space-y-3">
              <div className="bg-slate-50 rounded-lg p-5">
                <h4 className="font-bold text-slate-800 mb-2">n_estimators</h4>
                <p className="text-slate-600 text-sm">
                  The number of decision trees in the forest. More trees generally improve
                  performance but increase computation time. Typical values: 100-500.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <h4 className="font-bold text-slate-800 mb-2">max_depth</h4>
                <p className="text-slate-600 text-sm">
                  Maximum depth of each tree. Controls model complexity and helps prevent
                  overfitting. Deeper trees capture more patterns but may overfit.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <h4 className="font-bold text-slate-800 mb-2">min_samples_split</h4>
                <p className="text-slate-600 text-sm">
                  Minimum samples required to split an internal node. Higher values prevent
                  learning overly specific patterns from small sample groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl shadow-lg p-8 border border-orange-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Why Random Forest for Fraud Detection?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-emerald-600 mb-2">Advantages</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Handles non-linear relationships well</li>
              <li>• Resistant to overfitting due to averaging</li>
              <li>• Provides feature importance rankings</li>
              <li>• Works well with imbalanced datasets</li>
              <li>• Requires minimal preprocessing</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-red-600 mb-2">Considerations</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Can be computationally expensive</li>
              <li>• Less interpretable than single trees</li>
              <li>• May need tuning for optimal performance</li>
              <li>• Requires careful validation strategy</li>
              <li>• Memory intensive for large forests</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptExplainer;
