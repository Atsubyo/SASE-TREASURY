"use client";

import React from "react";
import {
	AppShell,
	AppShellHeader,
	Burger,
	Button,
	Divider,
	Drawer,
	Group,
	rem,
	ScrollArea,
	Text,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./globalHeader.module.css";
import Link from "next/link";

const GlobalHeader = () => {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	const theme = useMantineTheme();

	return (
		<AppShell pb={rem(60)}>
			<AppShellHeader
				h={rem(60)}
				px={theme.spacing.md}
				className={styles.header}
			>
				<Group justify="space-between" h="100%">
					<Group>
						<Text size="xl">SOFC Form Manager</Text>
					</Group>
					<Group h="100%" gap={0} visibleFrom="sm">
						<UnstyledButton
							className={styles.link}
							component={Link}
							href="/home"
						>
							Home
						</UnstyledButton>
						<UnstyledButton
							className={styles.link}
							component={Link}
							href="/forms"
						>
							Forms
						</UnstyledButton>
						<UnstyledButton
							className={styles.link}
							component={Link}
							href="/dashboard"
						>
							Dashboard
						</UnstyledButton>
					</Group>
					<Group visibleFrom="sm">
						<Button>Login</Button>
					</Group>

					<Burger
						opened={drawerOpened}
						onClick={toggleDrawer}
						hiddenFrom="sm"
					/>
				</Group>
			</AppShellHeader>
			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="SOFC Form Manager"
				hiddenFrom="sm"
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
					<Divider my="sm" />

					<UnstyledButton className={styles.link}>Home</UnstyledButton>
					<UnstyledButton className={styles.link}>Forms</UnstyledButton>
					<UnstyledButton className={styles.link}>Dashboard</UnstyledButton>

					<Divider my="sm" />

					<Group justify="center" grow pb="xl" px="md">
						<Button variant="default">Log in</Button>
					</Group>
				</ScrollArea>
			</Drawer>
		</AppShell>
	);
};

export default GlobalHeader;
