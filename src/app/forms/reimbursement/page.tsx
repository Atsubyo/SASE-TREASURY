"use client";

import React, { useState } from "react";
import {
	Center,
	Container,
	FileInput,
	FileInputProps,
	Pill,
	PillGroup,
	rem,
	SegmentedControl,
	Stack,
	Textarea,
	TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar, IconFileTypePdf } from "@tabler/icons-react";
import styles from "../forms.module.css";
import { SASE_BLUE } from "@/types/StyleConstants";
import { ReimbursementFormType } from "@/types/FormTypes";

const ReimbursementForm: React.FC = () => {
	const [formState, setFormState] = useState<ReimbursementFormType>({
		name: null,
		phone: null,
		address: null,
		transactionDate: new Date(),
		requesterType: "student",
		uin: null,
		deliveryMethod: "mailin",
		purpose: null,
		proof: null,
	});

	const onFormChange = (key: string, val: any) => {
		console.log("key:", key, "| val:", val);
		setFormState((prevState) => ({
			...prevState,
			[key]: val,
		}));
	};

	const filePill: FileInputProps["valueComponent"] = ({ value }) => {
		const removePill = () => {
			console.log("here");
		};

		if (value === null) {
			return null;
		}

		if (Array.isArray(value)) {
			return (
				<PillGroup>
					{value.map((file, index) => (
						<Pill key={index} withRemoveButton onRemove={removePill}>
							{file.name}
						</Pill>
					))}
				</PillGroup>
			);
		}

		return <Pill>{value.name}</Pill>;
	};

	return (
		<Container py={rem(20)}>
			<Center>
				<Stack justify="center">
					<TextInput
						label="Name"
						description="Full name of the person who made the purchase."
						aria-label="name"
						placeholder="John Doe"
						className={styles.textInput}
						withAsterisk
						onChange={(val) => onFormChange("name", val)}
					/>
					<TextInput
						label="Phone Number"
						description="Phone number of the person who made the purchase."
						aria-label="phone number"
						placeholder="123-456-7890"
						className={styles.textInput}
						withAsterisk
						onChange={(val) => onFormChange("phone", val)}
					/>
					<TextInput
						label="Mailing Address"
						description="Valid non-P.O. Box address for check to to be sent (needed regardless of reimbursement method)."
						aria-label="mailing address"
						placeholder="1234 SASE TAMU Dr, College Station, TX 77840"
						className={styles.textInput}
						withAsterisk
						onChange={(val) => onFormChange("address", val)}
					/>
					<DatePickerInput
						label="Transaction Date"
						description="The date the purchase was made."
						aria-label="transaction date"
						placeholder="YYYY-MM-DD"
						valueFormat="YYYY-MM-DD"
						className={styles.input}
						leftSection={<IconCalendar className={styles.inputIcon} />}
						leftSectionPointerEvents="none"
						clearable
						withAsterisk
						onChange={(val) => onFormChange("transactionDate", val)}
					/>
					<SegmentedControl
						value={formState.requesterType}
						className={styles.input}
						color={SASE_BLUE}
						data={[
							{ label: "TAMU Student", value: "student" },
							{ label: "TAMU Employee", value: "employee" },
							{ label: "Other", value: "other" },
						]}
						onChange={(val) => onFormChange("requesterType", val)}
					/>
					{formState.requesterType != "other" ? (
						<TextInput
							label="UIN"
							description="TAMU affiliated Universal Identification Number."
							aria-label="name"
							placeholder="123456789"
							className={styles.textInput}
							withAsterisk
							onChange={(val) => onFormChange("uin", val)}
						/>
					) : null}
					<SegmentedControl
						value={formState.deliveryMethod}
						className={styles.input}
						color={SASE_BLUE}
						data={[
							{ label: "Mail In Check", value: "mailin" },
							{ label: "SOFC Pickup", value: "pickup" },
							{ label: "Direct Deposit", value: "deposit" },
						]}
						onChange={(val) => onFormChange("deliveryMethod", val)}
					/>
					<Textarea
						label="Purpose of Purchase"
						description="What was the purchase and how it is relevant to SASE."
						aria-label="purpose of purchase"
						placeholder="Forks and Spoons used for serving and eating food at company X GBM."
						className={styles.textInput}
						withAsterisk
						autosize
						minRows={3}
						maxRows={5}
						onChange={(val) => onFormChange("purpose", val)}
					/>
					<FileInput
						label="Proof of Purchase"
						aria-label="proof of purchase"
						placeholder="HEB_Receipt-John_Doe.pdf"
						leftSection={<IconFileTypePdf className={styles.inputIcon} />}
						leftSectionPointerEvents="none"
						valueComponent={filePill}
						accept="pdf"
						multiple
						clearable
						onChange={(val) => onFormChange("proof", val)}
					/>
				</Stack>
			</Center>
		</Container>
	);
};

export default ReimbursementForm;
