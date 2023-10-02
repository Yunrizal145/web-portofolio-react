import SectionTitle from "../components/SectionTitle";
import { skillsSet, toolsSet, descTechAndTools } from "../constants/data";

const Skills = () => {
	const { titleName, description } = descTechAndTools;

	return (
		<>
			{/* Skills */}
			<div
				id="skills"
				className="w-full flex justify-center items-center"
			>
				<SectionTitle textColor="#232f5a">Skills</SectionTitle>
			</div>
			<div className="flex justify-center items-center">
				<div className="w-[150px] h-1 bg-[#232f5a] rounded-full mt-8"></div>
			</div>
			<div className="container mx-auto mt-16">
				<div className="mx-10 md:mx-20 lg:mx-32 bg-[#232f5a] rounded-3xl">
					<h3 className="text-white font-bold text-2xl p-8 lg:text-3xl lg:p-10">
						Tech Stack 🔨
					</h3>
					<div className="w-full h-1 bg-[#f6f9fc] mb-6 lg:mb-10 "></div>
					<div className="w-full px-10 lg:px-14 mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 text-center">
						{skillsSet.map(
							({ IconSkill, skillName, title }, index) => (
								<div key={index} className="mb-12 text-white">
									<div className="w-[50px] mx-auto flex justify-center text-2xl py-3 mb-2 rounded-full bg-[#00095d] drop-shadow-xl border hover:-translate-y-3 hover:duration-300">
										<IconSkill />
									</div>
									<h3 className="text-xs lg:text-lg">
										{skillName}
									</h3>
									<h4 className="text-xs lg:text-base">
										`{title}`
									</h4>
								</div>
							)
						)}
					</div>
				</div>
			</div>
			<div className="container  mx-auto mt-10 lg:mt-16">
				<div className="lg:mx-32 lg:flex justify-between">
					<div className="mx-10 md:mx-20 mb-10 lg:-mx-0 lg:w-1/3 font-bold pt-10 text-[#00095d] bg-white h-72 shadow-[#00095d] shadow-2xl p-8 rounded-2xl">
						<h2 className="text-2xl lg:text-4xl">{titleName} 🛠</h2>
						<div className="w-full h-1 bg-[#00095d] mt-4 "></div>
						<p className="text-sm pt-10 lg:text-lg">
							{description}
						</p>
					</div>
					<div className="lg:w-3/5 mx-10 md:mx-20 lg:-mx-0 bg-[#232f5a] rounded-3xl">
						<h3 className="text-white font-bold text-2xl p-8 lg:p-10 lg:text-3xl">
							Tools 🔧
						</h3>
						<div className="w-full h-1 bg-[#f6f9fc] mb-4 "></div>
						<div className="w-full px-14 py-4 mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 text-center">
							{toolsSet.map(
								(
									{ IconTools, toolsName, toolsTitle },
									index
								) => (
									<div
										key={index}
										className="mb-8 text-white "
									>
										<div className="w-[50px] mx-auto flex justify-center text-2xl py-3 mb-2 rounded-full bg-[#00095d] drop-shadow-xl border hover:-translate-y-3 hover:duration-300">
											<IconTools />
										</div>
										<h3 className="text-xs lg:text-lg">
											{toolsName}
										</h3>
										<h4 className="text-xs lg:text-base">
											`{toolsTitle}`
										</h4>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
