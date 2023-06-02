"use client"
import React, { useState } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiHashnode, SiKofi } from "react-icons/si";
// import { FaDonate } from "react-icons/fa";
// import SupportModal from "./SupportModal";

const Header = () => {
	return (
		<div className="flex flex-wrap fixed">
			{/* <!-- navbar --> */}
			<nav className="flex justify-between bg-white border-b-[1px] w-screen">
				<div className="px-5 xl:px-12 py-2 flex w-full items-center">
					<a className="font-heading" href="#">
						<h1 className="text-3xl font-bold font-secondary">
							<span className="text-purple-700">OCR</span>Bay
						</h1>
					</a>
					{/* <!-- Nav Links --> */}
					<ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
						<li>
							<p className="font-primary" href="#">
								Optical Character Recognition
							</p>
						</li>
					</ul>
					{/* <!-- Header Icons and buttons --> */}
					<div className="hidden xl:flex items-center space-x-5">
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
				</div>
				{/* <!-- Responsive navbar --> */}
				<a className="navbar-burger self-center mr-12 xl:hidden" href="#">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 hover:text-gray-200"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</a>
			</nav>
		</div>
	);
};

export default Header;
