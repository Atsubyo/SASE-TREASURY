import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import GlobalHeader from "@/components/GlobalHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SASE TAMU Treasury",
	description: "SOFC Form Automation and Manager",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GlobalHeader />
				<AntdRegistry>{children}</AntdRegistry>
			</body>
		</html>
	);
}
