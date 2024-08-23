// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { GlobalHeader } from "@/components";

export const metadata = {
	title: "My Mantine app",
	description: "I have followed setup instructions carefully",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider>
					<ModalsProvider>
						<GlobalHeader />
						{children}
					</ModalsProvider>
				</MantineProvider>
			</body>
		</html>
	);
}
