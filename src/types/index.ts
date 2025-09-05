export interface FinanceData {
  totalCapital: number;
  grossProfit: number;
  expenses: number;
  netProfit: number;
  netCapital: number;
  perPersonSaving: number;
  salaryAmount: number;
  salaryMonths: number;
}

export interface FinanceCardProps {
  title: string;
  amount: number;
  currency: string;
  details?: string;
  type?: 'default' | 'success' | 'warning' | 'primary';
}