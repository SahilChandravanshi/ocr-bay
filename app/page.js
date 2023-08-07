"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";

export default function Home() {
	return (
		<div className="w-screen px-5 xl:px-0 h-screen flex flex-col justify-center items-center pt-16">
			<a
				href="https://twitter.com/steventey/status/1616505632001232896"
				target="_blank"
				rel="noreferrer"
				className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-purple-200 px-7 py-2 transition-colors hover:bg-purple-300"
			>
				<p className="text-sm font-semibold text-purple-700 font-secondary">
					Introducing OCRBay
				</p>
			</a>
			<h1 className="bg-gradient-to-br from-black to-stone-600 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem] font-primary">
				Extract text from Images
			</h1>
			<div className="mt-6 text-center text-gray-500 md:text-xl font-secondary">
				<div ratio={0.6}>
					Curious how you&apos;extract text from images? Upload a photo and find
					out!{" "}
					<div>
						<span className="cursor-default underline decoration-dotted underline-offset-2 transition-colors hover:text-gray-800">
							100% free and privacy-friendly
						</span>
					</div>
				</div>
			</div>
			<div className="-mb-16 flex flex-col">
				<Link
					href={"extract"}
					className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black font-primary"
				>
					<FaFileAlt />
					<p>Extract Text!</p>
				</Link>
				{/* <Image
					src={"/ocr3.gif"}
					alt="ocrGif"
					width={500}
					height={500}
					className="mt-4"
				/> */}
			</div>
			<div className="flex justify-center items-center">
				<Image
					src={"/ocr3.gif"}
					alt="ocrGif"
					width={500}
					height={500}
					className="mt-6 pl-6"
				/>
			</div>
		</div>
	);
}
