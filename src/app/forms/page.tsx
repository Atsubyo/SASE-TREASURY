import React from "react";
import { Button, Container, SimpleGrid } from "@mantine/core";
import styles from "./forms.module.css";
import Link from "next/link";

const Forms = () => {
	return (
		<Container className={styles.container}>
			<SimpleGrid className={styles.simpleGrid} cols={2}>
				<Button size="xl" component={Link} href="/forms/reimbursement">
					Reimbursement Form
				</Button>
				<Button size="xl" component={Link} href="/forms/ecredit">
					eCredit
				</Button>
			</SimpleGrid>
		</Container>
	);
};

export default Forms;
