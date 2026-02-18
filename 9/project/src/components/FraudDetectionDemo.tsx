import { useState } from 'react';
import { CreditCard, AlertCircle, CheckCircle } from 'lucide-react';

const FraudDetectionDemo = () => {
  const [transactionData, setTransactionData] = useState({
    amount: 100,
    time: 12,
    v1: 0,
    v2: 0,
  });
  const [prediction, setPrediction] = useState<'fraud' | 'legitimate' | null>(null);

  const simulatePrediction = () => {
    const fraudScore =
      transactionData.amount > 500
        ? 0.7
        : 0.2 + (Math.abs(transactionData.v1) + Math.abs(transactionData.v2)) * 0.1;

    setPrediction(fraudScore > 0.5 ? 'fraud' : 'legitimate');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Interactive Fraud Detection Demo
        </h2>
        <p className="text-slate-600 mb-6">
          Adjust the transaction parameters below to see how the Random Forest model might
          classify a transaction as fraudulent or legitimate.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Transaction Amount ($)
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                value={transactionData.amount}
                onChange={(e) =>
                  setTransactionData({ ...transactionData, amount: Number(e.target.value) })
                }
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-slate-600 mt-1">
                <span>$0</span>
                <span className="font-bold">${transactionData.amount}</span>
                <span>$1000</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Time of Day (Hour)
              </label>
              <input
                type="range"
                min="0"
                max="23"
                value={transactionData.time}
                onChange={(e) =>
                  setTransactionData({ ...transactionData, time: Number(e.target.value) })
                }
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-slate-600 mt-1">
                <span>00:00</span>
                <span className="font-bold">{transactionData.time}:00</span>
                <span>23:00</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Feature V1 (PCA Component)
              </label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={transactionData.v1}
                onChange={(e) =>
                  setTransactionData({ ...transactionData, v1: Number(e.target.value) })
                }
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-slate-600 mt-1">
                <span>-5</span>
                <span className="font-bold">{transactionData.v1.toFixed(1)}</span>
                <span>5</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Feature V2 (PCA Component)
              </label>
              <input
                type="range"
                min="-5"
                max="5"
                step="0.1"
                value={transactionData.v2}
                onChange={(e) =>
                  setTransactionData({ ...transactionData, v2: Number(e.target.value) })
                }
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-slate-600 mt-1">
                <span>-5</span>
                <span className="font-bold">{transactionData.v2.toFixed(1)}</span>
                <span>5</span>
              </div>
            </div>

            <button
              onClick={simulatePrediction}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-md"
            >
              Analyze Transaction
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200">
              <div className="flex items-center justify-center mb-6">
                <CreditCard className="w-16 h-16 text-slate-400" />
              </div>

              {prediction === null ? (
                <div className="text-center">
                  <p className="text-slate-600">
                    Adjust transaction parameters and click "Analyze Transaction" to see the
                    prediction.
                  </p>
                </div>
              ) : prediction === 'fraud' ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-600 mb-2">
                    Potential Fraud Detected
                  </h3>
                  <p className="text-slate-600">
                    This transaction shows characteristics commonly associated with
                    fraudulent activity. Further verification recommended.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-600 mb-2">
                    Legitimate Transaction
                  </h3>
                  <p className="text-slate-600">
                    This transaction appears normal based on typical patterns. Low fraud
                    risk detected.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl shadow-lg p-8 border border-blue-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Understanding the Dataset</h3>
        <p className="text-slate-600 mb-4">
          Real fraud detection datasets contain transformed features (V1-V28) created through
          PCA (Principal Component Analysis) for privacy protection. The actual features
          include:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-slate-800 mb-2">Time</h4>
            <p className="text-sm text-slate-600">
              Seconds elapsed between first transaction and current transaction
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-slate-800 mb-2">Amount</h4>
            <p className="text-sm text-slate-600">
              Transaction amount in currency units
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-slate-800 mb-2">V1-V28</h4>
            <p className="text-sm text-slate-600">
              PCA-transformed features protecting sensitive information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudDetectionDemo;
