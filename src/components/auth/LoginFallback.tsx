"use client";

import React, { Fragment, useEffect } from "react";
import { Button, ButtonGroup, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginFallback = ({ children }: { children: React.ReactNode }) => {
	const { data: session } = useSession();

	const openModal = () =>
		modals.open({
			title: "Please confirm your action",
			children: (
				<Fragment>
					<Text size="sm">
						Authentication with a SASE Recognized account is required to gain
						access to this site. Please sign in before you may continue.
					</Text>
					<Button onClick={() => signIn("google")}>Sign in With Google</Button>
				</Fragment>
			),
			withCloseButton: false,
		});

	useEffect(() => {
		if (!session) {
			openModal();
		}
	}, [session]);

	return (
		<Fragment>
			{session ? (
				<Fragment>
					<div>Logged in as {session.user?.name}</div>
					<Button onClick={() => signOut()}>Sign Out</Button>
					{children}
				</Fragment>
			) : (
				<Fragment>
					<div>You need to login</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default LoginFallback;
