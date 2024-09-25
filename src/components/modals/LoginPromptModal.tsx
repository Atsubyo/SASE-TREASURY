import React, { useEffect } from "react";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { signIn } from "next-auth/react";
import { useDisclosure } from "@mantine/hooks";

interface LoginFallbackProps {
	status: "authenticated" | "loading" | "unauthenticated";
}

const LoginPromptModal: React.FC<LoginFallbackProps> = (props) => {
	const [opened, { open, close }] = useDisclosure(false);
	console.log(props.status);

	useEffect(() => {
		if (props.status === "unauthenticated") {
			open();
		}
	}, [props.status, open]);

	return (
		<Modal
			opened={opened}
			onClose={close}
			title={
				<Text fw={700} c="blue">
					Treasury Login
				</Text>
			}
		>
			<Stack align="center">
				<Text size="sm" ta="center">
					Authentication with a SASE Recognized account is required to gain
					access to this site. Please sign in before you may continue.
				</Text>
				<Button onClick={() => signIn("google")} variant="primary" bg="blue">
					Sign in With Google
				</Button>
			</Stack>
		</Modal>
	);
};

export default LoginPromptModal;
