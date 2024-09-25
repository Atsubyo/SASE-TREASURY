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
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { FcGoogle } from "react-icons/fc";

interface GlobalHeaderProps {
	title: string;
	tabs: string[];
	session: Session | null;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = (props) => {
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
						<Text size="xl">{props.title}</Text>
					</Group>
					<Group h="100%" gap={0} visibleFrom="sm">
						{props.tabs.map((val: string, idx: number) => (
							<UnstyledButton
								key={idx}
								className={styles.link}
								component={Link}
								href={`/${val.toLowerCase()}`}
								title={val}
							>
								{val}
							</UnstyledButton>
						))}
					</Group>
					<Group visibleFrom="sm">
						{props.session ? (
							<Button onClick={() => signOut()}
							variant="default"
							className={styles.defaultAuthButton}>
								Sign Out
							</Button>
						) : (
							<Button
								onClick={() => signIn("google")}
								leftSection={<FcGoogle />}
								variant="default"
								className={styles.defaultAuthButton}
							>
								Sign In via Google
							</Button>
						)}
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
				title={props.title}
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
						{props.session ? (
							<Button
								onClick={() => signOut()}
								variant="default"
								className={styles.defaultAuthButton}
							>
								Sign Out
							</Button>
						) : (
							<Button
								onClick={() => signIn("google")}
								leftSection={<FcGoogle />}
								variant="default"
								className={styles.defaultAuthButton}
							>
								Sign In via Google
							</Button>
						)}
					</Group>
				</ScrollArea>
			</Drawer>
		</AppShell>
	);
};

export default GlobalHeader;
