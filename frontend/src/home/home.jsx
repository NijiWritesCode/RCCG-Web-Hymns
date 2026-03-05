import React from "react";
import Navbar from "../components/navbar";
import hero_image from '../assets/hero-image.png'

const Home = () => {
	return (
		<>
			<header className="">
				<Navbar />

				<section className="w-[90%] mx-auto mt-20 text-center">
					<h1 className="text-5xl text-gray-700">Find hymn lyrics in just seconds.</h1>
					<p className="mt-5 text-xl mx-auto text-gray-600 w-[50%]">
						HymnSeek helps you search for classical and contemporary hymns with full lyrics for free.
					</p>

					<div className="flex justify-center items-center">
						<div className="">
							<input
								type="text"
								placeholder="Search hymn..."
								className=" w-[85%] lg:w-200 border-2 border-gray-300 mt-4 pl-3 rounded-xl h-15 text-xl pr-28"
							/>
							<button className="bg-blue-700 px-3 py-2 text-xl text-white rounded-lg shadow-md shadow-blue-500 relative -left-25 cursor-pointer hover:rounded-full hover:px-4 transition-all ease-in-out duration-100">
								Search
							</button>
						</div>
					</div>

					<div className="mt-5 w-[80%] mx-auto">
						<img src={hero_image} alt="Choristers" className="w-full" />
					</div>
				</section>
			</header>

			<main className="w-[90%] mx-auto">
				
			</main>
		</>
	);
};

export default Home;
