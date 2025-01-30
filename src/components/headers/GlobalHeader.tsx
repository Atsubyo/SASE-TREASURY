"use client";

import React from "react";
import {
	AppShell,
	AppShellHeader,
	Avatar,
	Burger,
	Button,
	Divider,
	Drawer,
	Group,
	Menu,
	rem,
	ScrollArea,
	Text,
	Title,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./globalHeader.module.css";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { FcGoogle } from "react-icons/fc";
import { IconDoorEnter, IconDoorExit, IconSettings } from "@tabler/icons-react";

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
						<Menu
							trigger="click-hover"
							transitionProps={{ transition: "pop-top-right", duration: 100 }}
							openDelay={50}
							closeDelay={400}
							width={175}
						>
							<Menu.Target>
								<Avatar src={null} alt="no image" color="blue" />
							</Menu.Target>

							<Menu.Dropdown>
								<Menu.Label>
									{props.session?.user?.name}
									<br />
									{props.session?.user?.email}
								</Menu.Label>
								<Menu.Item
									component={Link}
									href="/profile"
									title="Profile"
									leftSection={<IconSettings size={14} />}
								>
									Profile
								</Menu.Item>

								<Menu.Divider />
								{props.session ? (
									<Menu.Item
										onClick={() => signOut()}
										color="red"
										leftSection={<IconDoorEnter size={14} />}
									>
										Sign Out
									</Menu.Item>
								) : (
									<Menu.Item
										onClick={() => signIn("google")}
										color="blue"
										leftSection={<IconDoorExit size={14} />}
									>
										Sign In
									</Menu.Item>
								)}
							</Menu.Dropdown>
						</Menu>
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
					<Title order={4} className={styles.drawerItem}>
						{props.session?.user?.name}
						<br />
						{props.session?.user?.email}
					</Title>
					<Divider my="sm" />

					<UnstyledButton
						className={styles.link}
						component={Link}
						onClick={closeDrawer}
						href="/profile"
						title="Profile"
					>
						Profile
					</UnstyledButton>

					<Divider my="sm" />

					<UnstyledButton
						className={styles.link}
						component={Link}
						onClick={closeDrawer}
						href="/home"
						title="Home"
					>
						Home
					</UnstyledButton>
					<UnstyledButton
						className={styles.link}
						component={Link}
						onClick={closeDrawer}
						href="/forms"
						title="Forms"
					>
						Forms
					</UnstyledButton>
					<UnstyledButton
						className={styles.link}
						component={Link}
						onClick={closeDrawer}
						href="/dashboard"
						title="Dashboard"
					>
						Dashboard
					</UnstyledButton>

					<Divider my="sm" />

					<Group justify="center" grow pb="xl" px="md">
						{props.session ? (
							<Button
								onClick={() => {
									signOut();
									closeDrawer();
								}}
								variant="filled"
								color="red"
							>
								Sign Out
							</Button>
						) : (
							<Button
								onClick={() => {
									signIn("google");
									closeDrawer();
								}}
								leftSection={<FcGoogle />}
								variant="default"
								className={styles.defaultAuthButton}
							>
								Sign In
							</Button>
						)}
					</Group>
				</ScrollArea>
			</Drawer>
		</AppShell>
	);
};

export default GlobalHeader;
