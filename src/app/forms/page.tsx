import React from "react";
import { Button, Container, SimpleGrid } from "@mantine/core";
import styles from "./forms.module.css";
import Link from "next/link";

const Forms: React.FC = () => {
	return (
		<Container className={styles.container}>
			<SimpleGrid className={styles.simpleGrid} cols={2}>
				<Button
					size="xl"
					component={Link}
					href="/forms/reimbursement"
					bg="blue"
				>
					Reimbursement Form
				</Button>
				<Button size="xl" component={Link} href="/forms/ecredit" bg="blue">
					eCredit
				</Button>
			</SimpleGrid>
		</Container>
	);
};

export default Forms;
