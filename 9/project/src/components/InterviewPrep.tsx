import { useState } from 'react';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface QA {
  question: string;
  answer: string;
  category: string;
}

const InterviewPrep = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const questionsAnswers: QA[] = [
    {
      category: 'Model Understanding',
      question: 'What is Random Forest?',
      answer:
        'Random Forest is an ensemble learning method that creates multiple decision trees during training and outputs the mode of their predictions (classification) or mean prediction (regression). It uses bagging (bootstrap aggregating) and random feature selection to create diverse trees that, when combined, produce more accurate and stable predictions than individual trees. Each tree is trained on a random sample of the data with replacement, and at each split, only a random subset of features is considered.',
    },
    {
      category: 'Model Understanding',
      question: 'What is ensemble learning?',
      answer:
        'Ensemble learning is a machine learning technique that combines multiple models (called base learners or weak learners) to produce a stronger predictive model. The key idea is that multiple models working together can often achieve better performance than any single model. Common ensemble methods include bagging (Random Forest), boosting (XGBoost, AdaBoost), and stacking. Ensembles work by reducing variance, bias, or improving predictions through voting or averaging mechanisms.',
    },
    {
      category: 'Hyperparameters',
      question: 'What is n_estimators?',
      answer:
        'n_estimators is a hyperparameter in Random Forest that specifies the number of decision trees in the forest. More trees generally lead to better performance and more stable predictions, as they reduce variance through averaging. However, more trees also increase computational cost and training time. Typical values range from 100 to 500. After a certain point, adding more trees provides diminishing returns. The optimal number depends on the dataset size and complexity, and should be determined through cross-validation.',
    },
    {
      category: 'Imbalanced Data',
      question: 'What is SMOTE?',
      answer:
        'SMOTE (Synthetic Minority Over-sampling Technique) is a popular method for handling imbalanced datasets. Instead of simply duplicating minority class samples, SMOTE creates synthetic samples by interpolating between existing minority class instances. It selects a minority class sample, finds its k-nearest neighbors in the minority class, and creates new synthetic samples along the line segments connecting the sample to its neighbors. This helps balance the dataset while introducing variation, though it can sometimes create noisy samples if the minority class regions overlap with majority class regions.',
    },
    {
      category: 'Evaluation Metrics',
      question: 'Why is accuracy misleading in fraud detection?',
      answer:
        'Accuracy is misleading in fraud detection because of extreme class imbalance. Fraudulent transactions typically represent less than 1% of all transactions. A model that simply predicts "legitimate" for all transactions would achieve over 99% accuracy but be completely useless for fraud detection. In imbalanced scenarios, accuracy fails to distinguish between model performance on majority vs. minority classes. Instead, we should use metrics like precision (minimizes false alarms), recall (maximizes fraud caught), and F1-score (balances both), which better reflect the model\'s ability to detect the rare but critical fraud cases.',
    },
    {
      category: 'Evaluation Metrics',
      question: 'What is the difference between precision and recall?',
      answer:
        'Precision measures the accuracy of positive predictions: of all transactions we flagged as fraud, what percentage were actually fraud? (TP / (TP + FP)). High precision means fewer false alarms. Recall measures completeness: of all actual fraud cases, what percentage did we catch? (TP / (TP + FN)). High recall means we catch most fraud. There\'s often a trade-off: increasing recall (catching more fraud) may decrease precision (more false alarms). In fraud detection, we typically prioritize recall to catch fraud, then optimize precision to reduce investigation costs.',
    },
    {
      category: 'Data Preparation',
      question: 'What is stratified sampling and why use it?',
      answer:
        'Stratified sampling is a technique where we split data into train and test sets while maintaining the same class distribution in both sets. For example, if fraud represents 0.5% of the original dataset, stratified sampling ensures both train and test sets have approximately 0.5% fraud. This is crucial in imbalanced datasets because random splitting might result in a test set with too few or no fraud cases, making evaluation unreliable. Stratified sampling provides more representative and stable performance estimates across train and test sets.',
    },
    {
      category: 'Model Comparison',
      question: 'Why compare against a baseline model?',
      answer:
        'Comparing against a baseline model (like Logistic Regression) helps us understand if the complexity of Random Forest is justified. It answers: "Is the additional computational cost and reduced interpretability worth the performance gain?" A baseline provides context for interpreting results. If Random Forest only marginally outperforms the baseline, a simpler model might be preferable for production due to easier maintenance, faster inference, and better interpretability. Baselines also help detect implementation errors - if a complex model performs worse than a simple baseline, something is likely wrong.',
    },
    {
      category: 'Feature Engineering',
      question: 'What is feature importance and how is it calculated in Random Forest?',
      answer:
        'Feature importance in Random Forest measures how much each feature contributes to reducing impurity (classification) or variance (regression) across all trees in the forest. It\'s calculated by tracking how much each feature decreases the weighted impurity (typically Gini impurity) when used for splitting. Features that consistently create more pure child nodes receive higher importance scores. These scores are averaged across all trees and normalized to sum to 1.0. Feature importance helps with model interpretation, feature selection, and identifying key fraud indicators for business insights.',
    },
    {
      category: 'Model Advantages',
      question: 'What are the main advantages of Random Forest for fraud detection?',
      answer:
        'Random Forest excels at fraud detection for several reasons: (1) Handles non-linear relationships well, capturing complex fraud patterns. (2) Resistant to overfitting through ensemble averaging. (3) Provides feature importance for interpretability. (4) Works well with imbalanced data when properly configured. (5) Requires minimal feature preprocessing - can handle mixed data types and doesn\'t require scaling. (6) Robust to outliers and noisy data. (7) Can capture interactions between features automatically. (8) Provides probability estimates for risk-based decision making.',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const categories = Array.from(
    new Set(questionsAnswers.map((qa) => qa.category))
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-8 h-8 text-emerald-600" />
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Interview Preparation</h2>
            <p className="text-slate-600">
              Common questions and comprehensive answers for fraud detection interviews
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
          <h3 className="font-bold text-slate-800 mb-2">How to Use This Section</h3>
          <p className="text-slate-600 text-sm">
            Click on any question to reveal the answer. Try to answer in your own words
            first, then compare with the provided answer. Understanding these concepts deeply
            will help you excel in interviews and real-world fraud detection projects.
          </p>
        </div>

        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-600 rounded"></span>
                {category}
              </h3>
              <div className="space-y-3">
                {questionsAnswers
                  .filter((qa) => qa.category === category)
                  .map((qa, index) => {
                    const globalIndex = questionsAnswers.indexOf(qa);
                    const isExpanded = expandedIndex === globalIndex;

                    return (
                      <div
                        key={globalIndex}
                        className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200"
                      >
                        <button
                          onClick={() => toggleExpand(globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors"
                        >
                          <span className="text-left font-medium text-slate-800">
                            {qa.question}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-slate-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-600 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-6 py-4 bg-white border-t border-slate-200">
                            <p className="text-slate-600 leading-relaxed">{qa.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl shadow-lg p-6 border border-emerald-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Study Tips</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">1.</span>
              <span>Understand concepts deeply, don't just memorize answers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">2.</span>
              <span>Practice explaining concepts in simple terms</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">3.</span>
              <span>Relate concepts to real-world fraud detection scenarios</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">4.</span>
              <span>Review the math behind metrics and algorithms</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold">5.</span>
              <span>Compare different approaches and their trade-offs</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl shadow-lg p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Additional Topics</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Cross-validation strategies for imbalanced data</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Hyperparameter tuning techniques (GridSearch, RandomSearch)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Alternative algorithms: XGBoost, LightGBM, Neural Networks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Production deployment considerations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>Model monitoring and retraining strategies</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
