import React from "react";
import styles from "./profile.module.css";
import {
	Avatar,
	Box,
	Container,
	Divider,
	Grid,
	GridCol,
	Group,
	Space,
	Text,
	Title,
} from "@mantine/core";

const Profile = () => {
	const gridColProp = {
		h: 120,
		span: {
			base: 12,
			xs: 6,
			md: 4,
			lg: 3,
		},
	};

	return (
		<main className={styles.main}>
			<Container w="80%">
				<Group justify="space-between" mx="md">
					<Group gap="sm">
						<Avatar variant="filled" radius="lg" size="xl" src="">
							FL
						</Avatar>
						<Title order={1}>First Last</Title>
					</Group>
					<Title order={2}>Position</Title>
				</Group>
				<Divider my="xl" size="sm" />
				<Grid grow>
					<GridCol {...gridColProp}>
						<Box>
							<Title order={4}>Email</Title>
							<Divider />
							<Text>email@domain.com</Text>
						</Box>
					</GridCol>
					<GridCol {...gridColProp}>
						<Box>
							<Title order={4}>Phone Number</Title>
							<Divider />
							<Text>(123)456-7890</Text>
						</Box>
					</GridCol>
					<GridCol {...gridColProp}>
						<Box>
							<Title order={4}>UIN</Title>
							<Divider />
							<Text>123456789</Text>
						</Box>
					</GridCol>
					<GridCol {...gridColProp}>
						<Box>
							<Title order={4}>Mailing Address</Title>
							<Divider />
							<Text>12345 Apple Drive</Text>
						</Box>
					</GridCol>
					<GridCol {...gridColProp}>
						<Box>
							<Title order={4}>Reimbursement Delivery</Title>
							<Divider />
							<Text>Mail-In/Pickup/DirectDeposit</Text>
						</Box>
					</GridCol>
					<GridCol {...gridColProp}>
						<Box>
							<Title order={4}>TAMU Affiliation</Title>
							<Divider />
							<Text>email@domain.com</Text>
						</Box>
					</GridCol>
					<GridCol {...gridColProp}>
						<Box>
							<Title order={4}>Reimbursement Method</Title>
							<Divider />
							<Text>Student/Faculty/Staff/Other</Text>
						</Box>
					</GridCol>
					<GridCol {...gridColProp}>
						<Box>
							<Title order={4}>U.S. Citizenship Status</Title>
							<Divider />
							<Text>yes</Text>
						</Box>
					</GridCol>
				</Grid>
			</Container>
		</main>
	);
};

export default Profile;
