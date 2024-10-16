"use client";
import React, { useState } from "react";
import styles from "./home.module.css";
import { Stack } from "@mantine/core";
import { PieChart } from "@mantine/charts";
import { useSession } from "next-auth/react";
import { SASE_EMAIL_LIST } from "@/data/UserAllowList";

const Home = () => {
	const { data: session, status } = useSession();
	const [isAllowedUser, setIsAllowedUser] = useState(false);

	const data = [
		{ name: "USA", value: 400, color: "indigo.6" },
		{ name: "India", value: 300, color: "yellow.6" },
		{ name: "Japan", value: 300, color: "teal.6" },
		{ name: "Other", value: 200, color: "gray.6" },
	];

	if (!session) {
		throw new Error("Session expired, refresh the page and sign in.");
	} else {
		const userEmail = session.user?.email;
		const isPresident = SASE_EMAIL_LIST.PRESIDENT.includes(userEmail!);
		const isTreasurer = SASE_EMAIL_LIST.TREASURER.includes(userEmail!);

		if (isPresident || isTreasurer) {
			return (
				<main className={styles.main}>
					<PieChart
						withLabelsLine
						labelsPosition="outside"
						labelsType="value"
						withLabels
						data={data}
					></PieChart>
				</main>
			);
		} else {
			<main className={styles.main}>
				<Stack>hello world</Stack>
			</main>;
		}
	}
};

export default Home;
