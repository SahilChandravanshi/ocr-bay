"use client";
import Image from "next/image";
// import { createWorker } from "tesseract.js";
import Tesseract from "tesseract.js";
import { useEffect, useState, useCallback } from "react";
import { FaDonate, FaFileUpload } from "react-icons/fa";
import SupportModal from "@/components/SupportModal";

export default function Home() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [textResult, setTextResult] = useState("");
	const [progress, setProgress] = useState(0);
	const [modal, setModal] = useState(false);

	const convertImageToText = useCallback(async () => {
		if (!selectedImage) return;
		Tesseract.recognize(selectedImage, "eng", {
			logger: (m) => {
				// console.log(m);
				setProgress(parseInt(m.progress * 100));
			},
		})
			.then(({ data: { text } }) => {
				setTextResult(text);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [selectedImage]);

	useEffect(() => {
		convertImageToText();
	}, [convertImageToText, selectedImage]);

	const handleChangeImage = (e) => {
		if (e.target.files[0]) {
			setSelectedImage(e.target.files[0]);
		} else {
			setSelectedImage(null);
			setTextResult("");
		}
	};

	return (
		<main className="flex min-h-screen flex-col py-4 px-8 gap-2 font-primary bg-gray-100 w-full justify-center">
			<p>
				Extract words from image.{" "}
				<label
					htmlFor="upload"
					className="text-purple-700 hover:text-purple-900 cursor-pointer"
				>
					Click here to select image!
				</label>
			</p>
			<div className="inputWrapper relative hidden">
				<input
					type="file"
					id="upload"
					accept="image/*"
					onChange={handleChangeImage}
					className="absolute left-[26px] top-[6px] text-lg hidden"
				/>
			</div>

			<div className="result mt-2 grid items-center justify-center sm:grid-cols-2 gap-2">
				<div className="bg-white h-72 w-[95vw] sm:w-full sm:h-96 sm:max-h-96 p-1 overflow-y-auto flex flex-col items-center rounded shadow">
					{selectedImage == null ? (
						<div className="w-full h-full flex justify-center items-center border-dotted border-2 border-gray-300 rounded">
							{/* <p>Upload Here</p> */}
							<label
								htmlFor="upload"
								className="py-4 px-8 cursor-pointer rounded border-[1.5px] border-purple-300 hover:border-purple-600 hover:bg-purple-100 text-purple-500 hover:text-purple-900 flex flex-col gap-2 items-center justify-center text-sm"
							>
								<FaFileUpload className="text-3xl text-purple-600 hover:text-purple-900" />
								Select Image
							</label>
						</div>
					) : (
						selectedImage && (
							<div className="boxImage h-96 sm:max-h-96 overflow-y-auto flex flex-col items-center rounded">
								<Image
									src={URL.createObjectURL(selectedImage)}
									alt="thumb"
									width={1000}
									height={500}
								/>
							</div>
						)
					)}
				</div>
				<div className="bg-white h-72 w-[95vw] sm:w-full sm:h-96 sm:max-h-96 p-1 overflow-y-auto flex flex-col items-center justify-center rounded shadow">
					{progress < 100 && progress > 0 ? (
						<div>
							<div className="progress-label">Progress ({progress}%)</div>
							<div className="progress-bar">
								<div className="progress"></div>
							</div>
						</div>
					) : (
						textResult && (
							<div className="box-p font-codeFont h-96 overflow-auto p-4 font-light">
								<p>{textResult}</p>
							</div>
						)
					)}
				</div>
			</div>
			<button
				className="py-2 px-4 cursor-pointer rounded-full w-20 h-20 shadow bg-purple-700 hover:bg-purple-900 text-white flex flex-col justify-center items-center gap-2 fixed z-10 bottom-4 right-6 text-xs"
				onClick={() => {
					setModal(true);
				}}
			>
				<FaDonate className="text-2xl" />
				Donate
			</button>
			<SupportModal open={modal} />
		</main>
	);
}
