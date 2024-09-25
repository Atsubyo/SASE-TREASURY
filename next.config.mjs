const isVercel = process.env.VERCEL === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: true,
			},
		];
	},
	env: {
		NEXTAUTH_URL:
			process.envNEXTAUTH_URL ||
			(isVercel
				? `https://${process.env.VERCEL_URL}`
				: "http://localhost:3000/"),
	},
};

export default nextConfig;
