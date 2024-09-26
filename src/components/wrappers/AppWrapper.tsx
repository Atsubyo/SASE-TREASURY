"use client";

import { GlobalHeader } from "@/components";
import LoginFallback from "@/components/auth/LoginFallback";
import { useSession } from "next-auth/react";
import React, { Fragment } from "react";

interface AppWrapperProps {
	children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = (props) => {
	const { data: session, status } = useSession();

	const tabs = ["Home", "Forms", "Dashboard"];

	return (
		<Fragment>
			<GlobalHeader title="SASE Treasury" tabs={tabs} session={session} />
			{session ? props.children : <LoginFallback status={status} />}
		</Fragment>
	);
};

export default AppWrapper;
