import { Box, Button, Group, Text, UnstyledButton } from "@mantine/core";
import styles from "./globalHeader.module.css";
import React from "react";

const GlobalHeader = () => {
	return (
		<Box pb={120}>
			<header className={styles.header}>
				<Group justify="space-between" h="100%">
					<Group>
						<Text size="xl">SOFC Form Manager</Text>
					</Group>
					<Group h="100%" gap={0} visibleFrom="sm">
						<UnstyledButton>Home</UnstyledButton>
						<UnstyledButton>Forms</UnstyledButton>
						<UnstyledButton>Dashboard</UnstyledButton>
					</Group>
					<Group visibleFrom="sm">
						<Button>Login</Button>
					</Group>
				</Group>
			</header>
		</Box>
	);
};

export default GlobalHeader;
