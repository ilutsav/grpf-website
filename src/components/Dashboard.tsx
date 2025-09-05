import { useTranslation } from 'react-i18next';
import FinanceCard from './FinanceCard';
import type { FinanceData } from '../types';

const DashboardContent: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // Your family finance data
  const financeData: FinanceData = {
    totalCapital: 7196529,
    grossProfit: 604608,
    expenses: 26000, // Salary of Utsav 12 month @ 2000
    netProfit: 578608, // grossProfit - expenses
    netCapital: 6617921,
    perPersonSaving: 162005,
    salaryAmount: 2000,
    salaryMonths: 12
  };

  const currency = t('dashboard.currency');
  const isNepali = i18n.language === 'ne';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('dashboard.title')}
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isNepali ? 'nepali-text' : ''}`}>
            Financial Overview - Total Members: 41
          </p>
        </div>

        {/* Finance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Total Capital */}
          <FinanceCard
            title={t('dashboard.totalCapital')}
            amount={financeData.totalCapital}
            currency={currency}
            type="primary"
          />

          {/* Gross Profit */}
          <FinanceCard
            title={t('dashboard.grossProfit')}
            amount={financeData.grossProfit}
            currency={currency}
            type="success"
          />

          {/* Expenses */}
          <FinanceCard
            title={t('dashboard.expenses')}
            amount={financeData.expenses}
            currency={currency}
            details={t('dashboard.salaryNote')}
            type="warning"
          />

          {/* Net Profit */}
          <FinanceCard
            title={t('dashboard.netProfit')}
            amount={financeData.netProfit}
            currency={currency}
            type="success"
          />

          {/* Net Capital */}
          <FinanceCard
            title={t('dashboard.netCapital')}
            amount={financeData.netCapital}
            currency={currency}
            type="primary"
          />

          {/* Per Person Saving */}
          <FinanceCard
            title={t('dashboard.perPersonSaving')}
            amount={financeData.perPersonSaving}
            currency={currency}
            type="default"
          />
        </div>

        {/* Quick Stats for 41 Members */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className={`text-2xl font-bold text-gray-800 mb-6 text-center ${isNepali ? 'nepali-text' : ''}`}>
            Member Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">41</div>
              <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                Total Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{currency} 162,005</div>
              <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                Average per Member
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{currency} 14,112</div>
              <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                Profit per Member
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">2076 B.S.</div>
              <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                Established
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Global Relation Provisional Fund - Financial Dashboard - Last Updated: {new Date().toLocaleDateString(isNepali ? 'ne-NP' : 'en-US')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;