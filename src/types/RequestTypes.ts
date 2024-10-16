export interface Request {
	id: string;
	requesterName: string;
	phoneNumber: string;
	email: string;
	amount: number;
	requestType: "Reimbursement" | "eCredit";
}

export interface CategoryBudgetData {
	category: string;
	value: number;
	color: string;
}

export interface MonthlyBudgetData {
	month: string;
	expenses: number;
	funding: number;
}

export type BudgetData = MonthlyBudgetData[] | CategoryBudgetData[] | undefined;
