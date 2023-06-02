"use client";
import React from "react";

const SupportModal = ({ open }) => {
	return (
		<>
			{open && (
				<div>
					<h1>hello modal</h1>
				</div>
			)}
		</>
	);
};

export default SupportModal;
