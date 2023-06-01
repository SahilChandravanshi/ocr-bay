import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
	title: "OCRBay",
	description: "Easiest Optical Character Recognition way is OCR Bay",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer/>
			</body>
		</html>
	);
}
