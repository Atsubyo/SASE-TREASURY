import React from "react";
import { Button, Container, Grid, GridCol } from "@mantine/core";
import styles from "./forms.module.css";
import Link from "next/link";

const Forms: React.FC = () => {
	const gridColProp = {
		// h: 120,
		span: {
			base: 12,
			xs: 6,
		},
	};
	return (
		<Container className={styles.container}>
			<Grid grow className={styles.grid}>
				<GridCol {...gridColProp}>
					<Button
						size="xl"
						w="100%"
						component={Link}
						href="/forms/reimbursement"
						title="Reimbursement Form"
						bg="blue"
					>
						Reimbursement Form
					</Button>
				</GridCol>
				<GridCol {...gridColProp}>
					<Button
						size="xl"
						w="100%"
						component={Link}
						href="/forms/ecredit"
						title="eCredit"
						bg="blue"
					>
						eCredit
					</Button>
				</GridCol>
			</Grid>
		</Container>
	);
};

export default Forms;
