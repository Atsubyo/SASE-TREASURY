"use client";

import React, { useEffect } from "react";
import {
	Button,
	Center,
	Checkbox,
	Container,
	FileInput,
	FileInputProps,
	Group,
	Pill,
	PillGroup,
	rem,
	SegmentedControl,
	Stack,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useCookies } from "react-cookie";
import { IconCalendar, IconFileTypePdf } from "@tabler/icons-react";
import styles from "@/app/forms/forms.module.css";
import { SASE_BLUE } from "@/types/StyleConstants";
import {
	ReimbursementFormType,
	ReimbursementFormSchema,
} from "@/types/FormTypes";

const ReimbursementForm: React.FC = () => {
	const [cookies, setCookie] = useCookies(["formData"]);
	const form = useForm<ReimbursementFormType>({
		initialValues: {
			firstName: "",
			lastName: "",
			phone: "",
			address: "",
			transactionDate: undefined,
			requesterType: "student",
			uin: "",
			deliveryMethod: "mailin",
			directDepositSetup: false,
			amount: 0,
			purpose: "",
			proof: [],
		},
		validate: zodResolver(ReimbursementFormSchema),
	});

	useEffect(() => {
		setCookie("formData", JSON.stringify(form.values), {
			path: "/",
		});
	}, [form.values, setCookie]);

	const handleSubmit = (values: ReimbursementFormType) => {
		if (values.requesterType === "other") {
			values.uin = "N/A";
			form.setFieldValue("uin", "N/A");
		}
		if (values.deliveryMethod !== "deposit") {
			values.directDepositSetup = false;
			form.setFieldValue("directDepositSetup", false);
		}
		// call api
	};

	const filePill: FileInputProps["valueComponent"] = ({ value }) => {
		const removePill = (pillIndex: number) => {
			if (Array.isArray(value)) {
				value.splice(pillIndex, 1);
				form.setFieldValue("proof", value);
			} else {
				value = null;
			}
		};

		if (value === null) {
			return null;
		}

		if (Array.isArray(value)) {
			return (
				<PillGroup>
					{value.map((file, index) => (
						<Pill
							key={index}
							className={styles.pill}
							size="sm"
							withRemoveButton
							onRemove={() => removePill(index)}
						>
							{file.name}
						</Pill>
					))}
				</PillGroup>
			);
		}

		return (
			<Pill
				className={styles.pill}
				size="sm"
				withRemoveButton
				onRemove={() => removePill(0)}
			>
				{value.name}
			</Pill>
		);
	};

	return (
		<Container py={rem(20)}>
			<Center>
				<Stack>
					<Title order={1} className={styles.title}>
						Reimbursement Request Form
					</Title>
					<form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
						<Stack justify="center">
							<Group className={`${styles.textInput} ${styles.inputMargin}`}>
								<TextInput
									label="First Name"
									description="First name of the person who made the purchase."
									aria-label="first name"
									placeholder="John"
									withAsterisk
									flex={1}
									{...form.getInputProps("firstName")}
								/>
								<TextInput
									label="Last Name"
									description="Last name of the person who made the purchase."
									aria-label="last name"
									placeholder="Doe"
									withAsterisk
									flex={1}
									{...form.getInputProps("lastName")}
								/>
							</Group>
							<TextInput
								label="Phone Number"
								description="Phone number of the person who made the purchase."
								aria-label="phone number"
								placeholder="1234567890"
								className={`${styles.textInput} ${styles.inputMargin}`}
								withAsterisk
								{...form.getInputProps("phone")}
							/>
							<TextInput
								label="Mailing Address"
								description="Valid non-P.O. Box address for check to to be sent (needed regardless of reimbursement method)."
								aria-label="mailing address"
								placeholder="1234 SASE TAMU Dr, College Station, TX 77840"
								className={`${styles.textInput} ${styles.inputMargin}`}
								withAsterisk
								{...form.getInputProps("address")}
							/>
							<DatePickerInput
								label="Transaction Date"
								description="The date the purchase was made."
								aria-label="transaction date"
								placeholder="YYYY-MM-DD"
								valueFormat="YYYY-MM-DD"
								maxDate={new Date()}
								className={`${styles.input} ${styles.inputMargin}`}
								leftSection={<IconCalendar className={styles.inputIcon} />}
								leftSectionPointerEvents="none"
								clearable
								withAsterisk
								{...form.getInputProps("transactionDate")}
							/>
							<SegmentedControl
								value={form.values.requesterType}
								className={`${styles.input} ${styles.inputMargin}`}
								color={SASE_BLUE}
								data={[
									{ label: "TAMU Student", value: "student" },
									{ label: "TAMU Employee", value: "employee" },
									{ label: "Other", value: "other" },
								]}
								{...form.getInputProps("requesterType")}
							/>
							{form.values.requesterType !== "other" ? (
								<TextInput
									label="UIN"
									description="TAMU affiliated Universal Identification Number."
									aria-label="name"
									placeholder="123456789"
									className={`${styles.textInput} ${styles.inputMargin}`}
									withAsterisk
									{...form.getInputProps("uin")}
								/>
							) : null}
							<SegmentedControl
								value={form.values.deliveryMethod}
								className={`${styles.input} ${styles.inputMargin}`}
								color={SASE_BLUE}
								data={[
									{ label: "Mail In Check", value: "mailin" },
									{ label: "SOFC Pickup", value: "pickup" },
									{ label: "Direct Deposit", value: "deposit" },
								]}
								{...form.getInputProps("deliveryMethod")}
							/>
							{form.values.deliveryMethod === "deposit" ? (
								<Checkbox
									name="directDepositSetup"
									label="I assert I have direct deposit setup with the treasurer."
									aria-label="i assert i have direct deposity setup with the treasurer"
									description="Contact Treasurer (sasetamu.treasurer@gmail.com) if you are unsure."
									{...form.getInputProps("directDepositSetup")}
								/>
							) : null}
							<Textarea
								label="Purpose of Purchase"
								description="What was the purchase and how is it relevant to SASE."
								aria-label="purpose of purchase"
								placeholder="Forks and Spoons used for serving and eating food at company X GBM."
								className={`${styles.textInput} ${styles.inputMargin}`}
								withAsterisk
								autosize
								minRows={3}
								maxRows={5}
								{...form.getInputProps("purpose")}
							/>
							<FileInput
								label="Proof of Purchase"
								aria-label="proof of purchase"
								placeholder="HEB_Receipt-John_Doe.pdf"
								className={`${styles.input} ${styles.inputMargin}`}
								leftSection={<IconFileTypePdf className={styles.inputIcon} />}
								leftSectionPointerEvents="none"
								valueComponent={filePill}
								accept="pdf"
								multiple
								clearable
								withAsterisk
								{...form.getInputProps("proof")}
							/>
							<Button
								size="lg"
								type="submit"
								color={SASE_BLUE}
								className={styles.fullButton}
							>
								Submit
							</Button>
						</Stack>
					</form>
				</Stack>
			</Center>
		</Container>
	);
};

export default ReimbursementForm;
