import { z } from "zod";

export interface ReimbursementFormType {
	firstName: string;
	lastName: string;
	phone: string;
	address: string;
	transactionDate: Date | undefined;
	requesterType: "student" | " employee" | "other";
	uin?: string;
	deliveryMethod: "mailin" | "pickup" | "deposit";
	directDepositSetup?: true | false;
	amount: number;
	purpose: string;
	proof: File[];
}

export interface ECreditFormType {
	firstName: string;
	lastName: string;
	phone: string;
	vendorName: string;
	vendorContact: string;
	amount: string;
	purpose: string;
	proof: File[];
}

const firstLastNameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
const untrimmedWhitespaceRegex = /^\S(?:.*\S)?$/;
const phoneNumberRegex = /^\d{10}$/;
const moneyRegex = /^\d+(\.\d{2})?$/;
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[a-zA-Z]{2,}(\/[\w-]*)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ReimbursementFormSchema = z
	.object({
		name: z
			.string()
			.regex(firstLastNameRegex, "First and last name is required")
			.regex(
				untrimmedWhitespaceRegex,
				"Leading and/or trailing whitespace is not alloweed"
			)
			.min(1, "Full name is required"),
		phone: z
			.string()
			.regex(phoneNumberRegex, "Phone number must be 10 digits")
			.min(1, "Phone number is required"),
		address: z.string().min(1, "Mailing address is required"),
		transactionDate: z.date({ message: "Date of transaction is required" }),
		requesterType: z.enum(["student", "employee", "other"]),
		uin: z.string().min(1, "UIN is required"),
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

export const ECreditFormSchema = z.object({
	name: z
		.string()
		.regex(firstLastNameRegex, "First and last name is required")
		.regex(
			untrimmedWhitespaceRegex,
			"Leading and/or trailing whitespace is not alloweed"
		)
		.min(1, "Full name is required"),
	phone: z
		.string()
		.regex(phoneNumberRegex, "Phone number must be 10 digits")
		.min(1, "Phone number is required"),
	vendorName: z
		.string()
		.regex(
			untrimmedWhitespaceRegex,
			"Leading and/or trailing whitespace is not alloweed"
		)
		.min(1, "Vendor name is required"),
	vendorContact: z
		.string()
		.regex(
			untrimmedWhitespaceRegex,
			"Leading and/or trailing whitespace is not alloweed"
		)
		.min(1, "Vendor contact is required")
		.refine(
			(value) =>
				phoneNumberRegex.test(value) ||
				urlRegex.test(value) ||
				emailRegex.test(value),
			"Vendor contact must be a valid phone number, website, or email address"
		),
	amount: z
		.string()
		.regex(
			moneyRegex,
			"Amount must be a monetary value in decimals (e.g., 12.34)"
		)
		.min(1, "Amount is required"),
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
});