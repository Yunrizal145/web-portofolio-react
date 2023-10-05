import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { identity, aboutExperiences } from "../constants/data";
import SectionTitle from "../components/SectionTitle";
import profilePicture from "../assets/image/profile2.png";

const About = () => {
	const { name, role, description } = identity;

	return (
		<div className="md:mx-14 lg:container lg:mx-auto">
			{/* About Me */}
			<div id="about" className="w-full flex justify-center items-center">
				<SectionTitle textColor="#232f5a">About Me</SectionTitle>
			</div>
			<div className="flex justify-center items-center">
				<div className="w-[250px] h-1 bg-[#232f5a] rounded-full mt-8"></div>
			</div>
			<div className="w-full lg:flex">
				{/* Foto profile */}
				<div className="flex justify-center lg:justify-start lg:w-1/2 pt-16 lg:pl-32">
					<img
						src={profilePicture}
						alt="Profile Picture"
						className="w-72 h-72 lg:w-[500px] lg:h-[500px]"
					/>
				</div>

				{/* Profile */}
				<div className="mx-10 lg:-mx-0 lg:w-1/2 pt-14 lg:pr-20 text-justify">
					<h2 className="text-2xl lg:text-4xl font-bold ">
						I`am <span className="text-[#00095D]">{name}</span>
					</h2>
					<h3 className="text-xl lg:text-3xl font-bold pt-3 pb-6">
						A{" "}
						<span className="text-[#00095D]">
							{role[0]}😎, Indonesian
						</span>
					</h3>
					<p className="text-sm lg:text-lg">{description[1]}</p>
					<div className="w-full h-1 bg-[#FF4495] rounded-full my-6"></div>

					{/* About Experience */}
					<div className="flex gap-6 flex-col items-center md:flex-row lg:justify-between text-center text-white">
						{aboutExperiences.map(({ number, title }, index) => (
							<div
								key={index}
								className="w-52 px-6 py-14 lg:py-8 lg:px-8 font-bold rounded-3xl bg-[#00095d] bg-opacity-60 border-[#00095d] border-b-4 border-r-4 shadow-2xl hover:bg-[#ff4495]"
							>
								<h2 className="text-xl">{number} +</h2>
								<div className="flex justify-center items-center mb-4 mt-1">
									<div className="w-[100px] h-1 bg-[#00095d] rounded-full "></div>
								</div>
								<span className="text-base">{title}</span>
							</div>
						))}
					</div>

					{/* Button Lets Talk */}
					<div className="mt-10 flex justify-center lg:justify-start">
						<a
							href="#"
							className="btn-contact px-6 py-3 text-[#f6f9fc] text-base bg-[#FF4495] rounded-2xl duration-500 lg:text-xl hover:bg-[#00095d]  hover:border-r-2 hover:border-b-2 hover:border-[#FF4495] hover:shadow-md hover:shadow-[#FF4495]"
						>
							Lets Talk
							<FontAwesomeIcon
								icon={faAngleRight}
								className="panah-kanan text-[#ffffff] opacity-0 pl-2"
							/>
							<FontAwesomeIcon
								icon={faAngleRight}
								className="panah-kanan text-[#ffffff] opacity-0 duration-300"
							/>
							<FontAwesomeIcon
								icon={faAngleRight}
								className="panah-kanan text-[#ffffff] opacity-0 duration-300 delay-75"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
