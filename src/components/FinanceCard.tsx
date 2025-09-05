import type { FinanceCardProps } from '../types';

const FinanceCard: React.FC<FinanceCardProps> = ({ 
  title, 
  amount, 
  currency, 
  details, 
  type = 'default' 
}) => {
  const getCardStyles = () => {
    const baseStyles = "bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200 border border-gray-100";
    return baseStyles;
  };

  const getAmountColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'primary':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className={getCardStyles()}>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        {title}
      </h3>
      <div className={`text-3xl font-bold ${getAmountColor()} mb-2`}>
        {currency} {formatNumber(amount)}
      </div>
      {details && (
        <p className="text-sm text-gray-500 italic">
          {details}
        </p>
      )}
    </div>
  );
};

export default FinanceCard;