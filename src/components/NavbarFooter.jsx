const Navbar = () => {
	return (
		<div className="w-full flex items-center">
			<nav
				id="navbar"
				className={`navbar w-full absolute py-4 shadow-lg rounded-lg top-full block  bg-transparent max-w-full mt-2`}
			>
				<ul className="block lg:flex justify-end">
					<li className="group">
						<a
							href="#"
							className="mx-4 flex py-3 text-white text-xl font-bold lg:text-base hover:text-[#FF4495]"
						>
							Home
						</a>
					</li>
					<li className="group">
						<a
							href="#about"
							className="mx-4 flex py-3 text-white text-xl font-bold lg:text-base hover:text-[#FF4495]"
						>
							About
						</a>
					</li>
					<li className="group">
						<a
							href="#skills"
							className="mx-4 flex py-3 text-white text-xl font-bold lg:text-base hover:text-[#FF4495]"
						>
							Skills
						</a>
					</li>
					<li className="group">
						<a
							href="#portfolio"
							className="mx-4 flex py-3 text-white text-xl font-bold lg:text-base hover:text-[#FF4495]"
						>
							Portofolio
						</a>
					</li>
					<li className="group">
						<a
							href="#contact"
							className="mx-4 flex py-3 text-white text-xl font-bold lg:text-base hover:text-[#FF4495]"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
