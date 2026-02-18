import { TrendingUp, Target, AlertTriangle } from 'lucide-react';

const MetricsComparison = () => {
  const baselineMetrics = {
    model: 'Logistic Regression',
    accuracy: 0.97,
    precision: 0.65,
    recall: 0.58,
    f1Score: 0.61,
  };

  const rfMetrics = {
    model: 'Random Forest',
    accuracy: 0.99,
    precision: 0.89,
    recall: 0.82,
    f1Score: 0.85,
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Model Performance Metrics</h2>
        <p className="text-slate-600 mb-6">
          Comparing Random Forest against a baseline Logistic Regression model for fraud
          detection.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">
                {baselineMetrics.model}
              </h3>
              <span className="text-sm bg-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium">
                Baseline
              </span>
            </div>
            <div className="space-y-4">
              <MetricBar
                label="Accuracy"
                value={baselineMetrics.accuracy}
                color="slate"
              />
              <MetricBar
                label="Precision"
                value={baselineMetrics.precision}
                color="slate"
              />
              <MetricBar label="Recall" value={baselineMetrics.recall} color="slate" />
              <MetricBar
                label="F1-Score"
                value={baselineMetrics.f1Score}
                color="slate"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">{rfMetrics.model}</h3>
              <span className="text-sm bg-emerald-600 text-white px-3 py-1 rounded-full font-medium">
                Best Model
              </span>
            </div>
            <div className="space-y-4">
              <MetricBar label="Accuracy" value={rfMetrics.accuracy} color="emerald" />
              <MetricBar label="Precision" value={rfMetrics.precision} color="emerald" />
              <MetricBar label="Recall" value={rfMetrics.recall} color="emerald" />
              <MetricBar label="F1-Score" value={rfMetrics.f1Score} color="emerald" />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Performance Improvement</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <ImprovementCard
              metric="Precision"
              improvement={
                ((rfMetrics.precision - baselineMetrics.precision) /
                  baselineMetrics.precision) *
                100
              }
            />
            <ImprovementCard
              metric="Recall"
              improvement={
                ((rfMetrics.recall - baselineMetrics.recall) / baselineMetrics.recall) *
                100
              }
            />
            <ImprovementCard
              metric="F1-Score"
              improvement={
                ((rfMetrics.f1Score - baselineMetrics.f1Score) / baselineMetrics.f1Score) *
                100
              }
            />
            <ImprovementCard
              metric="Accuracy"
              improvement={
                ((rfMetrics.accuracy - baselineMetrics.accuracy) /
                  baselineMetrics.accuracy) *
                100
              }
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <MetricExplanation
          icon={<Target className="w-6 h-6 text-blue-600" />}
          title="Precision"
          definition="Of all transactions flagged as fraud, what percentage were actually fraud?"
          formula="TP / (TP + FP)"
          importance="High precision minimizes false alarms, reducing unnecessary investigations."
          bgColor="bg-blue-50"
          borderColor="border-blue-200"
        />
        <MetricExplanation
          icon={<AlertTriangle className="w-6 h-6 text-orange-600" />}
          title="Recall"
          definition="Of all actual fraud cases, what percentage did we catch?"
          formula="TP / (TP + FN)"
          importance="High recall ensures we catch most fraud cases, protecting customers."
          bgColor="bg-orange-50"
          borderColor="border-orange-200"
        />
        <MetricExplanation
          icon={<TrendingUp className="w-6 h-6 text-emerald-600" />}
          title="F1-Score"
          definition="Harmonic mean of precision and recall, balancing both metrics."
          formula="2 × (Precision × Recall) / (Precision + Recall)"
          importance="Best overall metric for imbalanced datasets like fraud detection."
          bgColor="bg-emerald-50"
          borderColor="border-emerald-200"
        />
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-lg p-8 border border-red-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Why Accuracy is Misleading in Fraud Detection
        </h3>
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">
            In fraud detection datasets, fraudulent transactions typically represent less than
            1% of all transactions. This extreme imbalance makes accuracy a poor metric.
          </p>
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-bold text-slate-800 mb-3">Example:</h4>
            <p className="text-slate-600 mb-3">
              Consider a dataset with 10,000 transactions where only 50 are fraud (0.5%):
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span className="text-slate-600">
                  A model that predicts "legitimate" for everything achieves{' '}
                  <strong>99.5% accuracy</strong> but catches{' '}
                  <strong>0% of fraud cases</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span className="text-slate-600">
                  A model with 85% F1-score might have lower accuracy but catches{' '}
                  <strong>82% of fraud cases</strong>
                </span>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            This is why we focus on precision, recall, and F1-score rather than accuracy when
            evaluating fraud detection models.
          </p>
        </div>
      </div>
    </div>
  );
};

const MetricBar = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => {
  const colorClasses = {
    slate: 'bg-slate-400',
    emerald: 'bg-emerald-600',
  };

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-bold text-slate-800">
          {(value * 100).toFixed(1)}%
        </span>
      </div>
      <div className="w-full bg-white rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]} rounded-full transition-all duration-500`}
          style={{ width: `${value * 100}%` }}
        />
      </div>
    </div>
  );
};

const ImprovementCard = ({
  metric,
  improvement,
}: {
  metric: string;
  improvement: number;
}) => {
  return (
    <div className="bg-white rounded-lg p-4 text-center">
      <p className="text-sm text-slate-600 mb-1">{metric}</p>
      <p className="text-2xl font-bold text-emerald-600">+{improvement.toFixed(1)}%</p>
    </div>
  );
};

const MetricExplanation = ({
  icon,
  title,
  definition,
  formula,
  importance,
  bgColor,
  borderColor,
}: {
  icon: React.ReactNode;
  title: string;
  definition: string;
  formula: string;
  importance: string;
  bgColor: string;
  borderColor: string;
}) => {
  return (
    <div className={`${bgColor} rounded-xl shadow-lg p-6 border ${borderColor}`}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>
      <div className="space-y-3">
        <div>
          <h4 className="text-xs font-bold text-slate-700 mb-1">Definition</h4>
          <p className="text-sm text-slate-600">{definition}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-700 mb-1">Formula</h4>
          <p className="text-sm font-mono bg-white px-2 py-1 rounded">{formula}</p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-700 mb-1">Why It Matters</h4>
          <p className="text-sm text-slate-600">{importance}</p>
        </div>
      </div>
    </div>
  );
};

export default MetricsComparison;
