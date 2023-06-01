import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-wrap">
					{/* <!-- navbar --> */}
					<nav className="flex justify-between bg-white border-b-[1px] w-screen">
						<div className="px-5 xl:px-12 py-2 flex w-full items-center">
							<a className="font-heading" href="#">
							<h1 className="text-3xl font-bold font-secondary"><span className="text-purple-700">OCR</span>Bay</h1>
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
								<button className="py-[8px] px-[18px] cursor-pointer rounded shadow bg-purple-700 hover:bg-purple-900 text-white">Donate</button>
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
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</a>
					</nav>
			</div>
  )
}

export default Header;