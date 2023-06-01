"use client";
import Image from "next/image";
import { createWorker } from "tesseract.js";
import Tesseract from "tesseract.js";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [textResult, setTextResult] = useState("");
	const [progress, setProgress] = useState(0);

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
		<main className="flex min-h-screen flex-col py-4 px-8 gap-4 font-primary bg-gray-100 w-full">
			<h1 className="text-3xl font-bold font-secondary"><span className="text-purple-700">OCR</span>Bay</h1>
			<p>Get words in image</p>
			<div className="inputWrapper relative">
				<label
					htmlFor="upload"
					className="inline-block py-[8px] px-[12px] cursor-pointer rounded shadow bg-purple-700 hover:bg-purple-900 text-white"
				>
					{" "}
					Upload Image{" "}
				</label>
				<input
					type="file"
					id="upload"
					accept="image/*"
					onChange={handleChangeImage}
					className="absolute left-[26px] top-[6px] text-lg z-[-1]"
				/>
			</div>

			<div className="result mt-4 grid items-center justify-center sm:grid-cols-2 gap-2">
				<div className="bg-white h-72 w-[95vw] sm:w-full sm:h-96 sm:max-h-96 p-1 overflow-y-auto flex flex-col items-center rounded shadow">
					{selectedImage && (
						<div className="boxImage h-96 sm:max-h-96 p-1 overflow-y-auto flex flex-col items-center">
							<Image
								src={URL.createObjectURL(selectedImage)}
								alt="thumb"
								width={1000}
								height={500}
							/>
						</div>
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
				{/* {progress < 100 && progress > 0 && (
					<div>
						<div className="progress-label">Progress ({progress}%)</div>
						<div className="progress-bar">
							<div className="progress" style={{ width: `${progress}%` }}></div>
						</div>
					</div>
				)}
				{textResult && (
					<div className="box-p font-codeFont bg-gray-300 max-h-96 overflow-auto p-4 font-light">
						<p>{textResult}</p>
					</div>
				)} */}
			</div>
		</main>
	);
}

// define worker
// const worker = createWorker();
// const convertImageToText = useCallback(async () => {
// 	// if (!selectedImage) return;
// 	await worker.load();
// 	await worker.loadLanguage("eng");
// 	await worker.initialize("eng");
// 	const {
// 		data: { text },
// 	} = await worker.recognize(selectedImage);
// 	console.log(text);
// },[selectedImage, worker])
