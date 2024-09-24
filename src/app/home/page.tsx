"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./home.module.css";
import { Fragment } from "react";
import { Button } from "@mantine/core";

const Home = () => {
	const { data: session } = useSession();
	console.log("session:", session);

	return (
		<main className={styles.main}>
			{session ? (
				<Fragment>
					<div>Logged In as {session.user?.name}</div>
					<Button onClick={() => signOut()}>Sign Out</Button>
				</Fragment>
			) : (
				<Fragment>
					<div>You need to login</div>
					<Button onClick={() => signIn("google")}>Sign in With Google</Button>
				</Fragment>
			)}
		</main>
	);
};

export default Home;
