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
			<body className="bg-gradient-to-r from-green-100 via-pink-100 to-purple-100">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
