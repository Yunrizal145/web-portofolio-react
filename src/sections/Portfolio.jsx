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
				<div className="w-[250px] h-1 bg-[#f6f9fc] rounded-full mt-8"></div>
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
							className="text-xl lg:text-4xl text-white font-bold"
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
						<motion.div
							variants={slideIn("bottom", "tween", 2, 1)}
							className="flex flex-col lg:flex-row lg:justify-between bg-blue-500 rounded-2xl mb-10"
						>
							{/* IMG Portfolio */}
							<motion.div
								variants={zoomIn(1.5, 0.75)}
								className="lg:w-1/2 flex justify-center m-10 rounded-2xl overflow-hidden"
							>
								<img
									src={img1}
									alt="Sertif"
									className="w-[432px]"
								/>
							</motion.div>

							{/* Desc Portfolio */}
							<div className="lg:w-1/2 lg:mt-8 mx-10 mb-10 text-white">
								<motion.h2
									variants={textVariants(1.1)}
									className="text-2xl mb-6 lg:text-4xl"
								>
									Sertificate
								</motion.h2>
								<motion.h3
									variants={textVariants(1.2)}
									className="text-sm mb-8 lg:text-lg"
								>
									`Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Impedit cupiditate fuga
									ipsum labore architecto quas nam commodi,
									asperiores quo! Perspiciatis, rerum
									molestiae accusantium error esse
									reprehenderit neque. Sapiente, reprehenderit
									quos.`
								</motion.h3>
								<motion.div
									variants={textVariants(1.3)}
									className="w-44 px-6 py-3 bg-[#ff4495] mb-4 rounded-2xl"
								>
									Tech Stack In Use
								</motion.div>
								<motion.div
									variants={zoomIn(1.5, 0.75)}
									className="mt-8"
								>
									<motion.button
										variants={textVariants(1.4)}
										className="w-full px-6 py-2 bg-[#00095d] text-center rounded-3xl"
									>
										See Details
									</motion.button>
								</motion.div>
							</div>
						</motion.div>

						{/* Main Content Portfolio Right */}
						<motion.div
							variants={slideIn("bottom", "tween", 2, 1)}
							className="flex flex-col-reverse lg:flex-row lg:justify-between bg-emerald-500 rounded-2xl "
						>
							{/* Desc Portfolio */}
							<div className="lg:w-1/2 lg:mt-8 mx-10 mb-10 text-white">
								<motion.h2
									variants={textVariants(1.1)}
									className="text-2xl mb-6 lg:text-4xl"
								>
									Sertifikat
								</motion.h2>
								<motion.h3
									variants={textVariants(1.2)}
									className="text-sm mb-8 lg:text-lg"
								>
									`A written recognition that states the
									achievement, competence, or participation in
									a program, course, or activity according to
									predetermined criteria. A written
									recognition that states the achievement,
									competence, or participation in a program,
									course, or activity according to
									predetermined criteria. `
								</motion.h3>
								<motion.div
									variants={textVariants(1.3)}
									className="w-44 px-6 py-3 bg-[#ff4495] mb-4 rounded-2xl"
								>
									Tech Stack In Use
								</motion.div>
								<motion.div
									variants={zoomIn(1.5, 0.75)}
									className="mt-8"
								>
									<motion.button
										variants={textVariants(1.4)}
										className="w-full px-6 py-2 bg-[#00095d] text-center rounded-3xl"
									>
										See Details
									</motion.button>
								</motion.div>
							</div>

							{/* IMG Portfolio */}
							<motion.div
								variants={zoomIn(1.5, 0.75)}
								className="lg:w-1/2 flex justify-center m-10 rounded-2xl overflow-hidden"
							>
								<img
									src={img1}
									alt="Sertif"
									className="w-[432px]"
								/>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
