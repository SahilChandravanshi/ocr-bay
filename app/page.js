"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [textResult, setTextResult] = useState(
		" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at et accusamus aliquid veniam ipsam esse voluptates voluptas quibusdam repudiandae."
	);
	const handleChangeImage = (e) => {
		setSelectedImage(e.target.files[0]);
	};

	return (
		<main className="flex min-h-screen flex-col p-4 gap-4 font-primary bg-teal-600">
			<h1 className="text-3xl font-bold font-secondary">OCR Bay</h1>
			<p>Get words in image</p>
			<div className="inputWrapper relative">
				<label
					htmlFor="upload"
					className="inline-block py-[8px] px-[12px] cursor-pointer rounded-md bg-orange-400 text-white"
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

			<div className="result mt-4 grid items-center justify-center md:grid-cols-2 gap-2">
				{selectedImage && (
					<div className="boxImage bg-orange-400 max-h-72 md:max-h-96 p-1 overflow-y-auto flex flex-col items-center">
						<Image
							src={URL.createObjectURL(selectedImage)}
							alt="thumb"
							width={1000}
							height={500}
						/>
					</div>
				)}
				{textResult && (
					<div className="box-p font-codeFont bg-gray-300 md:h-[100%] p-4 font-light">
						<p>{textResult}</p>
					</div>
				)}
			</div>
		</main>
	);
}
