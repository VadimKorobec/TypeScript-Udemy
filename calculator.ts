type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

const calculateInvestment = (data: InvestmentData): CalculationResult => {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;

  if (initialAmount < 0) {
    return "Initial investment ammount must be at least zero.";
  }

  if (duration <= 0) {
    return "No valid amount of years provided.";
  }

  if (expectedReturn < 0) {
    return "Expected return must be at least zero";
  }
};

const printResults = (results) => {};

const results = calculateInvestment();

printResults(results);
