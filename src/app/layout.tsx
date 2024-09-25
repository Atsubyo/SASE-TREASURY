import "@mantine/core/styles.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";

import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import SessionWrapper from "@/components/auth/SessionWrapper";
import AppWrapper from "./AppWrapper";

export const metadata = {
	title: "My Mantine app",
	description: "I have followed setup instructions carefully",
};

const mantineTheme = createTheme({
	colors: {
		blue: [
			"#0668B3",
			"#0668B3",
			"#0668B3",
			"#0668B3",
			"#0668B3",
			"#0668B3",
			"#0668B3",
			"#0668B3",
			"#0668B3",
			"#0668B3",
		],
		green: [
			"#7DC242",
			"#7DC242",
			"#7DC242",
			"#7DC242",
			"#7DC242",
			"#7DC242",
			"#7DC242",
			"#7DC242",
			"#7DC242",
			"#7DC242",
		],
	},
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SessionWrapper>
			<html lang="en">
				<head>
					<ColorSchemeScript />
				</head>
				<body>
					<MantineProvider theme={mantineTheme}>
						<ModalsProvider>
							<AppWrapper>{children}</AppWrapper>
						</ModalsProvider>
					</MantineProvider>
				</body>
			</html>
		</SessionWrapper>
	);
}
