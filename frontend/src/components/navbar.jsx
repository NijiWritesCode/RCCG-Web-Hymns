import React, { useState } from "react";
import { MenuSquareIcon, X } from "lucide-react";

const Navbar = () => {
	const [sideBar, setSideBar] = useState(false);

	const toggle = () => {
		setSideBar(!sideBar);
	};

	return (
		<nav className="flex items-center justify-between w-full lg:w-[85%] lg:rounded-xl shadow-sm lg:shadow-md shadow-black px-3 lg:px-10 py-3 mx-auto lg:mt-4 bg-gray-200 sticky">
			<h1 className="text-blue-800">HymnSeek</h1>

			<ul className=" hidden lg:flex gap-3 text-md">
				<li>Home</li>
				<li>Explore</li>
				<li>About</li>
				<li>Favourites</li>
			</ul>

			<MenuSquareIcon className="lg:hidden" onClick={toggle} />

			{sideBar ? (
				<div className="absolute inset-0 bg-black/50 h-screen" onClick={toggle}>
					<ul className=" relative bg-gray-900 text-white pt-3 pl-2 pr-6 w-[50%] h-[50%] -right-51 flex flex-col gap-3 text-md">
                        <X className="text-red-600 absolute right-0 mr-2.5" onClick={toggle}/>
						<li>Home</li>
						<li>Explore</li>
						<li>About</li>
						<li>Favourites</li>
					</ul>
				</div>
			) : (
				<></>
			)}
		</nav>
	);
};

export default Navbar;
