"use client";
import { SessionProvider } from "next-auth/react";

import React from "react";

interface SessionWrapperProps {
	children: React.ReactNode;
}

const SessionWrapper: React.FC<SessionWrapperProps> = (props) => {
	return <SessionProvider>{props.children}</SessionProvider>;
};

export default SessionWrapper;
