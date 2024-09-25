import { Stack } from "@mantine/core";
import styles from "./auth.module.css";
import React from "react";

const LoginFallback: React.FC = () => {
	return (
		<main className={styles.main}>
			<Stack>
			This application requires authentication via Google.</Stack>
		</main>
	);
};

export default LoginFallback;
