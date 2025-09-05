import { useTranslation } from 'react-i18next';
import FinanceCard from './FinanceCard';

const FinancialDetails: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isNepali = i18n.language === 'ne';
  const currency = t('dashboard.currency');

  // Detailed financial data based on the budget overview
  const collectionData = [
    { title: t('financial.monthlyPayment'), amount: 984000 },
    { title: t('financial.fineCollection'), amount: 2000 },
    { title: t('financial.serviceRenewalCharge'), amount: 58000 },
    { title: t('financial.interestFromLoan'), amount: 525786 },
    { title: t('financial.interestFromBank'), amount: 18822 },
  ];

  const bankCapitalData = [
    { title: t('financial.loanProvided'), amount: 5880000 },
    { title: t('financial.cashInBank'), amount: 1280529 },
    { title: t('financial.expensesInSalary'), amount: 26000 },
  ];

  const perPersonData = [
    { title: t('financial.previousYearCapital'), amount: 138028 },
    { title: t('financial.amountDeposited2080'), amount: 24000 },
    { title: t('financial.totalCapitalPerPerson'), amount: 162028 },
  ];

  const projectionData = [
    { title: t('financial.meetingExpenses'), amount: 77000 },
    { title: t('financial.netProfitDistribution'), amount: 501608 },
    { title: t('financial.perPersonProfit'), amount: 12234.34 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('financial.title')}
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isNepali ? 'nepali-text' : ''}`}>
            {t('financial.subtitle')}
          </p>
        </div>

        {/* Collection Data */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('financial.collection2081')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionData.map((item, index) => (
              <FinanceCard
                key={index}
                title={item.title}
                amount={item.amount}
                currency={currency}
                type="primary"
              />
            ))}
            <FinanceCard
              title={t('financial.totalCollection')}
              amount={1588608}
              currency={currency}
              type="success"
            />
          </div>
        </div>

        {/* Bank and Capital Status */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('financial.bankCapitalStatus')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bankCapitalData.map((item, index) => (
              <FinanceCard
                key={index}
                title={item.title}
                amount={item.amount}
                currency={currency}
                type={index === 2 ? 'warning' : 'default'}
              />
            ))}
            <FinanceCard
              title={t('financial.totalEarned')}
              amount={7196529}
              currency={currency}
              type="success"
            />
          </div>
        </div>

        {/* Per Person Calculation */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('financial.perPersonCalculation')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perPersonData.map((item, index) => (
              <FinanceCard
                key={index}
                title={item.title}
                amount={item.amount}
                currency={currency}
                type="primary"
              />
            ))}
          </div>
        </div>

        {/* Overall Calculation for 41 Members */}
        {/* <div className="mb-12">
          <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('financial.overallCalculation')}
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">41</div>
                <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                  {t('financial.totalMembers')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{currency} 162,005</div>
                <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                  {t('financial.divisionPerMember')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{currency} 112,005</div>
                <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                  {t('financial.monthlyContribution')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{currency} 50,000</div>
                <div className={`text-sm text-gray-600 ${isNepali ? 'nepali-text' : ''}`}>
                  {t('financial.differenceFromOthers')}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FinanceCard
                  title={t('financial.proportionalDistribution')}
                  amount={1250}
                  currency={currency}
                  type="success"
                />
                <FinanceCard
                  title={t('financial.netCapital40Members')}
                  amount={6325541}
                  currency={currency}
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* Projection of Dividend */}
        <div className="mb-12">
          <h2 className={`text-2xl font-bold text-gray-800 mb-6 ${isNepali ? 'nepali-text' : ''}`}>
            {t('financial.projectionDividend')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectionData.map((item, index) => (
              <FinanceCard
                key={index}
                title={item.title}
                amount={item.amount}
                currency={currency}
                type={index === 0 ? 'warning' : 'success'}
              />
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className={`text-2xl font-bold mb-4 ${isNepali ? 'nepali-text' : ''}`}>
            {t('financial.fiscalYear')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">{currency} 6,617,921</div>
              <div className={`text-blue-100 ${isNepali ? 'nepali-text' : ''}`}>
                {t('financial.netCapitalFinal')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{currency} 162,005</div>
              <div className={`text-blue-100 ${isNepali ? 'nepali-text' : ''}`}>
                {t('financial.perPersonSaving31Ashad')}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{currency} 14,112</div>
              <div className={`text-blue-100 ${isNepali ? 'nepali-text' : ''}`}>
                {t('financial.profitPerPerson31Ashad')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDetails;