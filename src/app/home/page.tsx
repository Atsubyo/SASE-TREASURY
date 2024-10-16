"use client";
import React, { useState } from "react";
import styles from "./home.module.css";
import { Stack } from "@mantine/core";
import { useSession } from "next-auth/react";
import { SASE_EMAIL_LIST } from "@/data/UserAllowList";
import TreasurerHome from "@/components/officerComponents/treasury/page";
import LoginFallback from "@/components/auth/LoginFallback";

const Home = () => {
	const { data: session, status } = useSession();

	if (!session) {
		throw new Error("Session expired, refresh the page and sign in.");
	} else {
		const userEmail = session.user?.email;
		const isPresident = SASE_EMAIL_LIST.PRESIDENT.includes(userEmail!);
		const isTreasurer = SASE_EMAIL_LIST.TREASURER.includes(userEmail!);

		if (isPresident || isTreasurer) {
			return <TreasurerHome />;
		} else {
			return <LoginFallback status="unauthenticated" />;
		}
	}
};

export default Home;
