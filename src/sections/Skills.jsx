import SectionTitle from "../components/SectionTitle";
import { skillsSet, toolsSet, descTechAndTools } from "../constants/data";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariants } from "../utils/motion";

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
			<motion.div
				animate={{ x: [-350, 0] }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ ease: "easeOut", duration: 2 }}
				variants={staggerContainer}
				whileInView="show"
				initial="hidden"
				className="container mx-auto mt-16"
			>
				<motion.div
					variants={slideIn("right", "tween", 0.1, 1)}
					className="mx-10 md:mx-20 lg:mx-32 bg-[#232f5a] rounded-3xl"
				>
					<motion.h3
						variants={textVariants(1.1)}
						className="text-white font-bold text-2xl p-8 lg:text-3xl lg:p-10"
					>
						Tech Stack 🔨
					</motion.h3>
					<div className="w-full h-1 bg-[#f6f9fc] mb-6 lg:mb-10 "></div>
					<motion.div
						variants={slideIn("left", "tween", 0.6, 2)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="w-full px-10 lg:px-14 mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 text-center"
					>
						{skillsSet.map(
							({ IconSkill, skillName, title }, index) => (
								<div key={index} className="mb-12 text-white">
									<motion.div
										variants={textVariants(1.6)}
										className="w-[50px] mx-auto flex justify-center text-2xl py-3 mb-2 rounded-full bg-[#00095d] drop-shadow-xl border hover:-translate-y-3 hover:duration-300"
									>
										<IconSkill />
									</motion.div>
									<motion.h3
										variants={textVariants(1.7)}
										className="text-xs lg:text-lg"
									>
										{skillName}
									</motion.h3>
									<motion.h4
										variants={textVariants(1.8)}
										className="text-xs lg:text-base"
									>
										`{title}`
									</motion.h4>
								</div>
							)
						)}
					</motion.div>
				</motion.div>
			</motion.div>
			<div className="container  mx-auto mt-10 lg:mt-16">
				<div className="lg:mx-32 lg:flex justify-between">
					<motion.div
						animate={{ x: [-350, 0] }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ ease: "easeOut", duration: 2 }}
						variants={staggerContainer}
						whileInView="show"
						initial="hidden"
						className="mx-10 md:mx-20 mb-10 lg:-mx-0 lg:w-1/3 font-bold pt-10 text-[#00095d] bg-white h-72 shadow-[#00095d] shadow-2xl p-8 rounded-2xl"
					>
						<motion.h2
							variants={textVariants(1.6)}
							className="text-2xl lg:text-4xl"
						>
							{titleName} 🛠
						</motion.h2>
						<motion.div
							variants={textVariants(1.7)}
							className="w-full h-1 bg-[#00095d] mt-4 "
						></motion.div>
						<motion.p
							variants={textVariants(1.8)}
							className="text-sm pt-10 lg:text-lg"
						>
							{description}
						</motion.p>
					</motion.div>
					<motion.div
						animate={{ x: [350, 0] }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ ease: "easeOut", duration: 2 }}
						variants={staggerContainer}
						whileInView="show"
						initial="hidden"
						className="lg:w-3/5 mx-10 md:mx-20 lg:-mx-0 bg-[#232f5a] rounded-3xl"
					>
						<motion.h3
							variants={textVariants(1.1)}
							className="text-white font-bold text-2xl p-8 lg:p-10 lg:text-3xl"
						>
							Tools 🔧
						</motion.h3>
						<div className="w-full h-1 bg-[#f6f9fc] mb-4 "></div>
						<motion.div
							variants={slideIn("left", "tween", 0.6, 2)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="w-full px-10 py-4 mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-center"
						>
							{toolsSet.map(
								(
									{ IconTools, toolsName, toolsTitle },
									index
								) => (
									<div
										key={index}
										className="mb-8 text-white "
									>
										<motion.div
											variants={textVariants(1.6)}
											className="w-[50px] mx-auto flex justify-center text-2xl py-3 mb-2 rounded-full bg-[#00095d] drop-shadow-xl border hover:-translate-y-3 hover:duration-300"
										>
											<IconTools />
										</motion.div>
										<motion.h3
											variants={textVariants(1.7)}
											className="text-xs lg:text-lg"
										>
											{toolsName}
										</motion.h3>
										<motion.h4
											variants={textVariants(1.8)}
											className="text-xs lg:text-base"
										>
											`{toolsTitle}`
										</motion.h4>
									</div>
								)
							)}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Skills;
