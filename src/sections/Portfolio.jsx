/* eslint-disable no-unused-vars */
import SectionTitle from "../components/SectionTitle";
import img1 from "../assets/image/sertif-kawah.png";
import { motion } from "framer-motion";
import { descPortfolio } from "../constants/data";
import {
	slideIn,
	staggerContainer,
	textVariants,
	zoomIn,
} from "../utils/motion";

const Portfolio = () => {
	return (
		<div className="container mx-auto">
			{/* Portfolio Title */}
			<div
				id="portfolio"
				className="w-full flex justify-center items-center"
			>
				<SectionTitle textColor="#ffffff">Portfolio</SectionTitle>
			</div>
			<div className="flex justify-center items-center">
				<div className="w-[250px] h-1 bg-[#FFD700] rounded-full mt-8"></div>
			</div>

			{/* Portfolio Section */}
			<div className="mx-10 mt-14 md:mx-20">
				<div className="w-full lg:w-[1250px] lg:mx-auto">
					{/* Title of Portfolio */}
					<motion.div
						animate={{ y: [-350, 0] }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ ease: "easeOut", duration: 2 }}
						variants={staggerContainer}
						whileInView="show"
						initial="hidden"
						className="w-56 lg:w-[550px]"
					>
						<motion.h2
							variants={textVariants(1.1)}
							className="text-xl lg:text-4xl text-[#FFD700] "
						>
							Completed Projects 👨‍💻
						</motion.h2>
						<motion.h4
							variants={textVariants(1.2)}
							className="text-sm mt-4 text-slate-300 lg:text-lg lg:mt-6"
						>
							Is a collection of achievements and works that
							depict my journey, reflecting abilities and
							dedication in creative endeavors.
						</motion.h4>
					</motion.div>

					<motion.div
						animate={{ y: [-350, 0] }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ ease: "easeOut", duration: 2 }}
						variants={staggerContainer}
						whileInView="show"
						initial="hidden"
						className="mt-8 w-full"
					>
						{/* Main Content Portfolio Left */}
						{descPortfolio.map((item, index) => (
							<motion.div
								key={index}
								variants={slideIn("bottom", "tween", 2, 1)}
								className="flex flex-col lg:flex-row lg:justify-between bg-[#49718b] rounded-2xl mb-10"
							>
								{/* IMG Portfolio */}
								<motion.div
									variants={zoomIn(1.5, 0.75)}
									className="lg:w-1/2 flex justify-center m-10 rounded-2xl overflow-hidden"
								>
									<img
										src={item.imgPorto}
										alt="Sertif"
										className="w-[432px] md:w-full"
									/>
								</motion.div>

								{/* Desc Portfolio */}
								<div className="lg:w-1/2 lg:mt-8 mx-10 mb-10 text-white">
									<motion.h2
										variants={textVariants(1.1)}
										className="text-2xl mb-6 lg:text-4xl text-[#FFD700] font-bold"
									>
										{item.namePorto}
									</motion.h2>
									<motion.h3
										variants={textVariants(1.2)}
										className="text-sm mb-8 lg:text-lg"
									>
										`{item.descPorto}`
									</motion.h3>
									<motion.div
										variants={textVariants(1.3)}
										className="px-6 py-3 border-2 mb-4 rounded-2xl"
									>
										<div className="flex gap-4 items-center">
											{item.TechStack.map(
												(Icon, techIndex) => (
													<div key={techIndex}>
														<Icon size={24} />{" "}
													</div>
												)
											)}
										</div>
									</motion.div>
									<motion.div
										variants={zoomIn(1.5, 0.75)}
										className="mt-8"
									>
										<motion.button
											variants={textVariants(1.4)}
											className="w-full bg-[#FFD700] text-center rounded-3xl border border-[#FFD700] hover:bg-transparent duration-300"
										>
											<a
												href={item.linkPorto}
												target="_blank"
												className="w-full px-8 py-3 text-center rounded-3xl block text-white font-bold hover:text-[#FFD700]"
												rel="noreferrer"
											>
												See Details
											</a>
										</motion.button>
									</motion.div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
