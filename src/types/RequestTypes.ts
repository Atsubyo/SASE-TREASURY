export type Request = {
	id: string;
	requesterName: string;
	phoneNumber: string;
	email: string;
	amount: number;
	requestType: "Reimbursement" | "eCredit";
};
