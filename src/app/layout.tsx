import "@mantine/core/styles.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { GlobalHeader } from "@/components";
import SessionWrapper from "@/components/auth/SessionWrapper";
import LoginFallback from "@/components/auth/LoginFallback";

export const metadata = {
	title: "My Mantine app",
	description: "I have followed setup instructions carefully",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const tabs = ["Home", "Forms", "Dashboard"];
	return (
		<SessionWrapper>
			<html lang="en">
				<head>
					<ColorSchemeScript />
				</head>
				<body>
					<MantineProvider>
						<ModalsProvider>
							<GlobalHeader title="SASE Treasury" tabs={tabs} />
							<LoginFallback>{children}</LoginFallback>
						</ModalsProvider>
					</MantineProvider>
				</body>
			</html>
		</SessionWrapper>
	);
}
