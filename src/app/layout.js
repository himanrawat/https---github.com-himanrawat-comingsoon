import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

export const metadata = {
	title: "Coming Soon",
	description: "Coming soon.......",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${spaceGrotesk.variable} font-space-grotesk antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
