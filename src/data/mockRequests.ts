import {
	MonthlyBudgetData,
	CategoryBudgetData,
	Request,
} from "@/types/RequestTypes";

export const mockData: Request[] = [
	{
		id: "test-1",
		requesterName: "Art Young",
		phoneNumber: "(832) 475-0938",
		email: "art.tyoung@tamu.edu",
		amount: 1,
		requestType: "Reimbursement" as const,
	},
	{
		id: "test-2",
		requesterName: "Art Young",
		phoneNumber: "(832) 475-0938",
		email: "art.tyoung@tamu.edu",
		amount: 2,
		requestType: "eCredit" as const,
	},
];

export const mockExpenseBudgetData: CategoryBudgetData[] = [
	{ category: "GBM Food", value: 400, color: "violet.9" },
	{ category: "Social Events", value: 300, color: "violet.8" },
	{ category: "Squad Events", value: 300, color: "violet.7" },
	{ category: "Fundraisers", value: 200, color: "violet.6" },
	{ category: "National Conference", value: 200, color: "violet.5" },
	{ category: "Miscellaneous", value: 200, color: "violet.4" },
];

export const mockFundingBudgetData: CategoryBudgetData[] = [
	{ category: "Companies", value: 400, color: "violet.9" },
	{ category: "Fundraisers", value: 300, color: "violet.8" },
	{ category: "Concessions", value: 300, color: "violet.7" },
	{ category: "Profit Shares", value: 200, color: "violet.6" },
	{ category: "Membership Dues", value: 200, color: "violet.5" },
	{ category: "Miscellaneous", value: 200, color: "violet.4" },
];

export const mockCategorizedBudgetData: MonthlyBudgetData[] = [
	{ month: "June", expenses: 600, funding: 600 },
	{ month: "July", expenses: 700, funding: 1600 },
	{ month: "August", expenses: 1700, funding: 1400 },
	{ month: "September", expenses: 400, funding: 300 },
	{ month: "October", expenses: 800, funding: 900 },
	{ month: "November", expenses: 1350, funding: 1200 },
	{ month: "December", expenses: 1100, funding: 800 },
	{ month: "January", expenses: 1200, funding: 900 },
	{ month: "February", expenses: 1900, funding: 1200 },
	{ month: "March", expenses: 400, funding: 1000 },
	{ month: "April", expenses: 1000, funding: 200 },
	{ month: "May", expenses: 800, funding: 1400 },
];
