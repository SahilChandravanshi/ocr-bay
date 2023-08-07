"use client";
import React, { useState } from "react";
// import { BsGithub, BsTwitter } from "react-icons/bs";
// import { SiHashnode, SiKofi } from "react-icons/si";
import { BiGitMerge } from "react-icons/bi";
// import { FaDonate } from "react-icons/fa";
// import SupportModal from "./SupportModal";

const Header = () => {
	return (
		<div className="flex flex-wrap fixed">
			{/* <!-- navbar --> */}
			<nav className="flex justify-between bg-gradient-to-r from-green-100 via-pink-100 to-purple-100 border-b-[1px] w-screen">
				<div className="px-5 xl:px-12 py-2 flex w-full items-center justify-between">
					<h1 className="text-3xl font-bold font-secondary">
						<span className="text-purple-700">OCR</span>Bay
					</h1>
					{/* <!-- Nav Links --> */}
					<ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
						<li>
							<p className="font-primary" href="#">
								Optical Character Recognition
							</p>
						</li>
					</ul>
					{/* <!-- Header Icons and buttons --> */}
					<div className="flex items-center space-x-5">
						<span className="inline-flex gap-3 sm:ml-auto sm:mt-0 justify-center sm:justify-start text-black font-primary">
							<a
								href="https://github.com/sahilchandravanshi/ocr-bay"
								className="text-xl hover:text-purple-700 flex justify-center items-center gap-2"
							>
								<BiGitMerge />
								<p className="text-sm hidden sm:block">Star on github</p>
								<p className="text-sm sm:hidden">Star</p>
							</a>
						</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
