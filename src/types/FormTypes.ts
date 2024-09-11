import { z } from "zod";

export interface ReimbursementFormType {
	name: string;
	phone: string;
	address: string;
	transactionDate: Date | undefined;
	requesterType: "student" | " employee" | "other";
	uin?: string;
	deliveryMethod: "mailin" | "pickup" | "deposit";
	purpose: string;
	proof: File[];
}

export const ReimbursementFormSchema = z
	.object({
		name: z
			.string()
			.regex(/^[A-Za-z]+\s[A-Za-z]+$/, "First and last name is required")
			.min(1, "Full name is required"),
		phone: z
			.string()
			.regex(/^\d{10}/, "Phone number must be 10 digits")
			.min(1, "Phone number is required"),
		address: z.string().min(1, "Mailing address is required"),
		transactionDate: z.date({ message: "Date of transaction is required" }),
		requesterType: z.enum(["student", "employee", "other"]),
		uin: z.string().optional(),
		deliveryMethod: z.enum(["mailin", "pickup", "deposit"]),
		purpose: z.string().min(1, "Purpose for purchase is required"),
		proof: z
			.array(
				z.instanceof(File).refine((file) => file.type === "application/pdf", {
					message: "File must be in PDF format",
				})
			)
			.refine((array) => array.length > 0, {
				message: "Proof of purchase (receipt and bank statement) is required",
			}),
	})
	.refine(
		(data) => {
			console.log(data);
			return data.requesterType !== "other" && data.uin && data.uin.length <= 0;
		},
		{
			path: ["uin"],
			message: "UIN is required for TAMU Students and Employees",
		}
	);
