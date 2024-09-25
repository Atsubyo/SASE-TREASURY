import { Stack } from "@mantine/core";
import styles from "./auth.module.css";
import React from "react";
import LoginPromptModal from "../modals/LoginPromptModal";
interface LoginFallbackProps {
	status: "authenticated" | "loading" | "unauthenticated";
}

const LoginFallback: React.FC<LoginFallbackProps> = (props) => {
	return (
		<main className={styles.main}>
			<Stack>
				This application requires authentication via Google.
				<LoginPromptModal status={props.status} />
			</Stack>
		</main>
	);
};

export default LoginFallback;
