"use client";

import React from "react";
import {
	Button,
	Center,
	Checkbox,
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
	Title,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { IconCalendar, IconFileTypePdf } from "@tabler/icons-react";
import styles from "@/app/forms/forms.module.css";
import { SASE_BLUE } from "@/types/StyleConstants";
import { ECreditFormType, ECreditFormSchema } from "@/types/FormTypes";

const ECreditForm: React.FC = () => {
	const form = useForm<ECreditFormType>({
		initialValues: {
			name: "",
			phone: "",
			vendorName: "",
			vendorContact: "",
			amount: "",
			purpose: "",
			proof: [],
		},
		validate: zodResolver(ECreditFormSchema),
	});

	const handleSubmit = (values: ECreditFormType) => {
		console.log(values);
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
						eCredit Request Form
					</Title>
					<form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
						<Stack justify="center">
							<TextInput
								label="Full Name"
								description="Full name of the person who made the purchase."
								aria-label="name"
								placeholder="John Doe"
								className={`${styles.textInput} ${styles.inputMargin}`}
								withAsterisk
								{...form.getInputProps("name")}
							/>
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
								label="Vendor Name"
								description="Name of the vendor purchase is being made from"
								aria-label="vendor name"
								placeholder="Vendor Name"
								className={`${styles.textInput} ${styles.inputMargin}`}
								withAsterisk
								{...form.getInputProps("vendorName")}
							/>
							<TextInput
								label="Vendor Contact"
								description="Phone number, website, or email address of the vendor."
								aria-label="vendor contact"
								placeholder="Vendor Contact Information"
								className={`${styles.textInput} ${styles.inputMargin}`}
								withAsterisk
								{...form.getInputProps("vendorContact")}
							/>
							<TextInput
								label="Purchase Amount"
								description="Total value of purchase in USD (Do not include '$')."
								aria-label="purchase amount"
								placeholder="$12.34"
								className={`${styles.textInput} ${styles.inputMargin}`}
								withAsterisk
								{...form.getInputProps("amount")}
							/>
							<Textarea
								label="Purpose of Purchase"
								description="What was the purchase and how it is relevant to SASE."
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
								{...form.getInputProps("proof")}
							/>
							<Button size="lg" type="submit" className={styles.fullButton}>
								Submit
							</Button>
						</Stack>
					</form>
				</Stack>
			</Center>
		</Container>
	);
};

export default ECreditForm;
