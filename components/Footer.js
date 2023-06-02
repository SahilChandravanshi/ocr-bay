import React from "react";

const Footer = () => {
	return (
		<footer className="text-gray-600 mx-4">
			<div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
				<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
					<h3 className="text-lg font-bold font-secondary">
						<span className="text-purple-700">OCR</span>Bay
					</h3>
				</a>
				<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					© 2023 OCRBay —
					<a
						href="https://sahilchandravanshi.com/"
						className="text-gray-600 ml-1"
						rel="noopener noreferrer"
						target="_blank"
					>
						<span className="text-purple-700 hover:text-purple-900">
							Sahil Chandravanshi
						</span>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
