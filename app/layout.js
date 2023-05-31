import "./globals.css";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
// 	weight: ["100", "300", "400", "500", "700", "900"],
// 	style: ["normal", "italic"],
// 	subsets: ["latin"],
// });

export const metadata = {
	title: "OCR Bay",
	description: "Easiest Optical Character Recognition way is OCR Bay",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
