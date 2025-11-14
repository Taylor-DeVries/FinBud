'use client';
import RefInput from '../reference';

export interface AllocationInputs {
  targetAmount: RefInput;
  years: RefInput;
  months: RefInput;
}

export interface AllocationResults {
  monthlyInvestment: number;
  targetAmount: number;
  totalMonths: number;
  warnings: string[];
}

class AllocationInputVars implements AllocationInputs {
  targetAmount: RefInput;
  years: RefInput;
  months: RefInput;

  constructor() {
    this.targetAmount = new RefInput();
    this.years = new RefInput();
    this.months = new RefInput();
  }

  public getAllocationProps(): {
    targetAmount: number;
    years: number;
    months: number;
  } {
    try {
      const props = {
        targetAmount: Number(this.targetAmount.textInput.current?.value) || 0,
        years: Number(this.years.textInput.current?.value) || 0,
        months: Number(this.months.textInput.current?.value) || 0,
      };
      return props;
    } catch (e) {
      throw new Error('Error getting allocation props');
    }
  }
}

export default AllocationInputVars;
