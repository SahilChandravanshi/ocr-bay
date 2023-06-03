"use client";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const SupportModal = ({ open, setModal }) => {
	return (
		<>
			{open && (
				<div
					className="fixed left-0 top-0 z-20 h-full w-full flex items-center justify-center bg-gray-700 bg-opacity-25"
					onClick={() => {
						setModal(false);
					}}
				>
					<div
						className="bg-purple-200 text-gray-500 pt-8 relative max-w-[300px] sm:max-w-full text-center flex flex-col items-center justify-center h-[58%] sm:h-[75%] w-auto"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<span className="text-md text-purple-900 bg-white px-2 py-1 rounded text-sm font-bold absolute left-6 top-6 flex items-center justify-center gap-2">
							<FaHeart className="text-red-400 hover:text-purple-600 hover:text-lg" />{" "}
							<p>Donate</p>
						</span>
						<IoClose
							className="text-xl text-purple-600 hover:text-purple-900 font-bold absolute right-6 top-6"
							onClick={() => {
								setModal(false);
							}}
						/>
						<Image
							class="round"
							className="p-0 max-w-full h-auto"
							src="/assets/UpiSahil.png"
							width={200}
							height={600}
							alt="user"
						/>
						<h3 className="my-2 mx-0">Scan with any UPI app</h3>
						<h6 className="uppercase my-[5px] mx-0">or</h6>
						<p className="text-sm leading-5">
							You can support this project on Ko-Fi
						</p>
						<div class="buttons">
							<button className="bg-purple-600 hover:bg-purple-900 rounded flex items-center justify-center w-auto px-4">
								<a
									href="https://ko-fi.com/Z8Z3H8EXU"
									target="_blank"
									className="flex items-center justify-center "
								>
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
