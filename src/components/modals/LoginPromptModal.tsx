import React, { useEffect } from "react";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { signIn } from "next-auth/react";
import { useDisclosure } from "@mantine/hooks";
import styles from "./modals.module.css";
import { FcGoogle } from "react-icons/fc";

interface LoginFallbackProps {
	status: "authenticated" | "loading" | "unauthenticated";
}

const LoginPromptModal: React.FC<LoginFallbackProps> = (props) => {
	const [opened, { open, close }] = useDisclosure(false);

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
					A SASE recognized Google account is required to access this site. Sign
					in with a relevant account to continue.
				</Text>
				<Button
					onClick={() => signIn("google")}
					leftSection={<FcGoogle />}
					variant="default"
					size="md"
					className={styles.defaultAuthButton}
				>
					Sign in with Google
				</Button>
			</Stack>
		</Modal>
	);
};

export default LoginPromptModal;
