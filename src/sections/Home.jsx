import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { identity } from "../constants/data";
import Typewriter from "typewriter-effect";
import profilePict from "../assets/image/profile.png";
import Icons from "./Icons";

const Home = () => {
	const { name, role, description } = identity;

	return (
		<div className="w-full text-center lg:text-left lg:flex lg:container lg:mx-auto">
			<div className="md:mx-16 lg:w-1/2 lg:pl-36 lg:-mx-0 text-white ">
				<p className="text-xl lg:text-lg font-normal">Hi 👋,</p>
				<h2 className="text-3xl lg:text-5xl font-bold"> {name} </h2>
				<div className="mx-8 mb-2 lg:-mx-0 lg:w-[280px] h-1 bg-[#FF4495] rounded-full mt-4 lg:mb-6"></div>
				<div className="text-lg">
					<div className="text-2xl font-bold mb-2">
						<span className="text-lg text-cyan-300">I`m A</span>
						<Typewriter
							options={{
								strings: role,
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
					<p className="mx-14 text-sm mt-6 lg:text-base lg:-mx-0 lg:w-[450px]">
						{description[0]}
					</p>
				</div>
				<div className="pb-4">
					<Icons />
				</div>
				<div className="mt-8 lg:-mt-0">
					<a
						href="#download"
						className="px-6 py-3 text-base bg-white shadow-md rounded-2xl text-[#FF4495] hover:bg-[#ff4495] hover:text-white hover:shadow-md hover:border-r-2 hover:border-b-2 hover:shadow-white hover:duration-500"
					>
						<FontAwesomeIcon icon={faDownload} className="pr-2" />
						Curriculum Vitae
					</a>
				</div>
			</div>
			{/* Foto Profile */}
			<div className="flex justify-center mt-28 lg:justify-start lg:-mt-0 lg:w-1/2 lg:pl-28">
				<img
					src={profilePict}
					alt="Profile Pict"
					className="w-96 h-96"
				/>
			</div>
		</div>
	);
};

export default Home;
