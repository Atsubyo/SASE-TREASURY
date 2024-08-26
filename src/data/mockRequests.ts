import { Request } from "@/types/RequestTypes";

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
