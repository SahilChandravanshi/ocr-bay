import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiOutlineMedium, SiHashnode } from "react-icons/si";

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
					© 2023 Tailblocks —
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
				<span className="inline-flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-gray-500 ">
					<a href="github.com/sahilChandravanshi/" className="text-xl hover:text-purple-700">
						<BsGithub />
					</a>
					<a href="https://twitter.com/SahilSaklash/" className="text-xl hover:text-purple-700">
						<BsTwitter />
					</a>
					<a href="https://blog.sahilchandravanshi.com/" className="text-xl hover:text-purple-700">
						<SiHashnode />
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
