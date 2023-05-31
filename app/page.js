"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleChangeImage = (e) => {
		setSelectedImage(e.target.files[0]);
	};

	return (
		<main className="flex min-h-screen flex-col justify-between p-4">
			<h1 className="text-3xl font-bold">OCR Bay</h1>
			<p>Get words in image</p>
			<div className="inputWrapper">
				<label htmlFor="upload"> Upload Image </label>
				<input
					type="file"
					id="upload"
					accept="image/*"
					onChange={handleChangeImage}
				/>
			</div>

			<div className="result">
				{selectedImage && (
					<div className="boxImage">
						<Image src={URL.createObjectURL(selectedImage)} alt="thumb" width={"180"} height={"180"}/>
					</div>
				)}
			</div>
		</main>
	);
}
