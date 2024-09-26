"use client";
import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Stack } from "@mantine/core";
import { useSession } from "next-auth/react";
import { SASE_EMAIL_LIST } from "@/data/UserAllowList";

const Home = () => {
	const { data: session, status } = useSession();
	const [isAllowedUser, setIsAllowedUser] = useState(false);

	useEffect(() => {
		if (!session) {
			throw new Error("Session expired, refresh the page and sign in.");
		} else {
			switch (session.user?.email) {
				case SASE_EMAIL_LIST.PRESIDENT:
					break;
				default:
					break;
			}
			if (session.user?.email) {
			}
		}
	});

	return (
		<main className={styles.main}>
			<Stack>hello world</Stack>
		</main>
	);
};

export default Home;
