export interface ReimbursementFormType {
	name: string | null;
	phone: string | null;
	address: string | null;
	transactionDate: Date | null;
	requesterType: "student" | " employee" | "other";
	uin?: number | null;
	deliveryMethod: "mailin" | "pickup" | "deposit";
	purpose: string | null;
	proof: File[] | null;
}
