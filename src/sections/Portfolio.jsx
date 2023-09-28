import SectionTitle from "../components/SectionTitle";
import img1 from "../assets/image/sertif-kawah.png";

const Portfolio = () => {
	console.log();
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
				<div className="w-full lg:w-[1025px] lg:mx-auto">
					{/* Title of Portfolio */}
					<div className="w-96">
						<h2 className="text-2xl lg:text-3xl text-white font-bold">
							Completed Projects 👨‍💻
						</h2>
						<h4 className="text-sm mt-4 text-slate-300 lg:text-base lg:mt-6">
							Is a collection of achievements and works that
							depict my journey, reflecting abilities and
							dedication in creative endeavors.
						</h4>
					</div>

					<div className="mt-8 w-full">
						{/* Main Content Portfolio Left */}
						<div className="flex flex-col lg:flex-row lg:justify-between bg-blue-500 rounded-2xl mb-10">
							{/* IMG Portfolio */}
							<div className="lg:w-1/2 flex justify-center m-10 rounded-2xl overflow-hidden">
								<img
									src={img1}
									alt="Sertif"
									className="w-[432px]"
								/>
							</div>

							{/* Desc Portfolio */}
							<div className="lg:w-1/2 lg:mt-8 mx-10 mb-10 text-white">
								<h2 className="text-3xl mb-6">Sertifikat</h2>
								<h3 className="text-sm mb-8">
									`A written recognition that states the
									achievement, competence, or participation in
									a program, course, or activity according to
									predetermined criteria. A written
									recognition that states the achievement,
									competence, or participation in a program,
									course, or activity according to
									predetermined criteria. `
								</h3>
								<div className="w-44 px-6 py-3 bg-[#ff4495] mb-4 rounded-2xl">
									Tech Stack In Use
								</div>
								<div className="mt-8">
									<button className="w-full px-6 py-2 bg-[#00095d] text-center rounded-3xl">
										See Details
									</button>
								</div>
							</div>
						</div>

						{/* Main Content Portfolio Right */}
						<div className="flex flex-col-reverse lg:flex-row lg:justify-between bg-emerald-500 rounded-2xl ">
							{/* Desc Portfolio */}
							<div className="lg:w-1/2 lg:mt-8 mx-10 mb-10 text-white">
								<h2 className="text-3xl mb-6">Sertifikat</h2>
								<h3 className="text-sm mb-8">
									`A written recognition that states the
									achievement, competence, or participation in
									a program, course, or activity according to
									predetermined criteria. A written
									recognition that states the achievement,
									competence, or participation in a program,
									course, or activity according to
									predetermined criteria. `
								</h3>
								<div className="w-44 px-6 py-3 bg-[#ff4495] mb-4 rounded-2xl">
									Tech Stack In Use
								</div>
								<div className="mt-8">
									<button className="w-full px-6 py-2 bg-[#00095d] text-center rounded-3xl">
										See Details
									</button>
								</div>
							</div>

							{/* IMG Portfolio */}
							<div className="lg:w-1/2 flex justify-center m-10 rounded-2xl overflow-hidden">
								<img
									src={img1}
									alt="Sertif"
									className="w-[432px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
