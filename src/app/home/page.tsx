"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./home.module.css";
import { Fragment } from "react";
import { Button, Stack } from "@mantine/core";

const Home = () => {
	const { data: session } = useSession();

	return (
		<main className={styles.main}>
			<Stack>hello world</Stack>
		</main>
	);
};

export default Home;
