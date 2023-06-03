"use client";
import Image from "next/image";
import React from "react";

const SupportModal = ({ open }) => {
	return (
		<>
			{open && (
				<div className="fixed z-20 sm:left-1/3  h-[58%] sm:h-[75%] w-auto flex gap-4 rounded border-2 border-purple-200 shadow">
					<div className="bg-purple-200 text-gray-500 pt-8 relative max-w-[300px] sm:max-w-full text-center flex flex-col items-center justify-center">
						<span
							class="pro"
							className="text-md text-purple-900 hover:text-white bg-white hover:bg-purple-700 px-2 py-1 rounded-sm text-sm font-bold absolute left-6 top-6"
						>
							♥️ Donate
						</span>
						<Image
							class="round"
							className="p-0 max-w-full h-auto"
							src="/assets/UpiSahil.png"
							width="200"
							height="600"
							alt="user"
						/>
						<h3 className="my-2 mx-0">Scan with any UPI app</h3>
						<h6 className="uppercase my-[5px] mx-0">or</h6>
						<p
							className="text-sm leading-5"
						>
							You can support this project on Ko-Fi
						</p>
						<div class="buttons">
							<button
								className="bg-purple-700 hover:bg-purple-900 rounded flex items-center justify-center w-auto px-4"
							>
								<a href="https://ko-fi.com/Z8Z3H8EXU" target="_blank" className="flex items-center justify-center ">
									<Image
										height={40}
										width={40}
										className="border-0"
										src="/assets/ko-fi.png"
										alt="Buy Me a Coffee at ko-fi.com"
									/>
									<p className="text-white text-sm">Buy me coffee</p>
								</a>
							</button>
						</div>
						<div
							class="skills"
							className="flex justify-center bg-purple-900 text-sm text-gray-200 border-b-2 rounded border-pruple-900 p-4 mt-8"
						>
							<h6
								// style="margin: 5px 0; text-transform: uppercase; text-align:center;"
								className="uppercase text-center"
							>
								If you like this project, do support
							</h6>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SupportModal;
