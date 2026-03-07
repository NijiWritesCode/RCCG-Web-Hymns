import React from "react";
import Navbar from "../components/navbar";
import hero_image from '../assets/hero-image.png'
import FeatureCard from "../components/featureCard";
import { Bolt, Users, Zap } from "lucide-react";

const Home = () => {
	return (
		<>
			<header className="">
				<Navbar />

				<section className="w-[90%] mx-auto mt-20 text-center">
					<h1 className="text-5xl text-gray-700">Find hymn lyrics in just seconds.</h1>
					<p className="mt-10 lg:mt-5 lg:text-xl mx-auto text-gray-600 lg:w-[50%]">
						HymnSeek helps you search for classical and contemporary hymns with full lyrics for free.
					</p>

					<div className="flex justify-center items-center">
						<div className="">
							<input
								type="text"
								placeholder="Search hymn..."
								className=" w-[85%] lg:w-200 border-2 border-gray-300 mt-4 pl-3 rounded-xl h-15 lg:text-xl pr-28"
							/>
							<button className="bg-blue-700 -z-20 px-3 py-2 lg:text-xl text-white rounded-lg shadow-md shadow-blue-500 relative -right-25 -top-12.5 lg:-top-0 lg:-left-25 cursor-pointer hover:rounded-full hover:px-4 transition-all ease-in-out duration-100">
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
				<section className=" flex justify-center items-center flex-wrap gap-5 mt-10 mb-10">
					<FeatureCard icon={Zap} feature={"Fast Search"} featBrief={"Get Your Desired Hymn Quick And Fast As You Type In Your Prompt."}/>
					<FeatureCard icon={Users} feature={"Community Support"} featBrief={"You Can Always Request For A Hymn To Be Added, Provided The Hymn Isn't Already Available"}/>
					<FeatureCard icon={Zap} feature={"Fast Search"} featBrief={"Get Your Desired Hymn Quick And Fast As You Type In Your Prompt."}/>
				</section>
			</main>
		</>
	);
};

export default Home;
