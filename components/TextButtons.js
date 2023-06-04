"use client";
import React, { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { BsClipboard2, BsClipboard2CheckFill } from "react-icons/bs";

const TextButtons = ({textResult}) => {
	const [copied, setCopied] = useState(false);
	const copyToClipboard = () => {
		setCopied(true);
    navigator.clipboard.writeText(textResult);
    setTimeout(() => {
      setCopied(false);
    },800)
	};
	return (
		<div>
			<div className="text-3xl cursor-pointer ">
				{!copied ? (
					<BsClipboard2
						className="text-gray-500 hover:text-purple-500"
						onClick={copyToClipboard}
					/>
				) : (
					<BsClipboard2CheckFill className="text-purple-700" />
				)}
			</div>
		</div>
	);
};

export default TextButtons;
