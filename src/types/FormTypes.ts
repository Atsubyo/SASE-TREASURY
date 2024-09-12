import { z } from "zod";

export interface ReimbursementFormType {
	name: string;
	phone: string;
	address: string;
	transactionDate: Date | undefined;
	requesterType: "student" | " employee" | "other";
	uin?: string;
	deliveryMethod: "mailin" | "pickup" | "deposit";
	directDepositSetup?: true | false;
	purpose: string;
	proof: File[];
}

export interface EcreditFormType {}

export const ReimbursementFormSchema = z
	.object({
		name: z
			.string()
			.regex(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/, "First and last name is required")
			.regex(
				/^\S(?:.*\S)?$/,
				"Leading and/or trailing whitespace is not alloweed"
			)
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
		directDepositSetup: z.boolean().optional(),
		purpose: z.string().min(1, "Purpose for purchase is required"),
		proof: z
			.array(
				z.instanceof(File).refine((file) => file.type === "application/pdf", {
					message: "File must be in PDF format",
				})
			)
			.refine(
				(array) => array.length > 0,
				"Proof of purchase (receipt and bank statement) is required"
			),
	})
	.superRefine((data, ctx) => {
		if (
			data.requesterType !== "other" &&
			data.uin != null &&
			data.uin.length <= 0
		) {
			ctx.addIssue({
				path: ["uin"],
				code: z.ZodIssueCode.custom,
				message: "UIN is required for TAMU Students and Employees",
			});
		}
		if (
			data.deliveryMethod === "deposit" &&
			data.directDepositSetup === false
		) {
			ctx.addIssue({
				path: ["directDepositSetup"],
				code: z.ZodIssueCode.custom,
				message: "You must setup direct deposit with Treasurer",
			});
		}
	});
