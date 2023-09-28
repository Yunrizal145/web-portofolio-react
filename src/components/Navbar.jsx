import { useState } from "react";

const Navbar = () => {
	const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
	const [isNavbarHidden, setIsNavbarHidden] = useState(true);

	const handleHamburgerClick = () => {
		setIsHamburgerClicked(!isHamburgerClicked);
		setIsNavbarHidden(!isNavbarHidden);
	};

	return (
		<div className="w-full flex items-center">
			<button
				id="hamburger"
				type="button"
				className={`hamburger ${
					isHamburgerClicked ? "hamburger-click" : ""
				} block absolute right-4 mr-8 lg:hidden`}
				onClick={handleHamburgerClick}
			>
				<span className=" hamburger-costum transition duration-300 ease-in-out origin-top-right"></span>
				<span className=" hamburger-costum transition duration-300 ease-in-out"></span>
				<span className=" hamburger-costum transition duration-300 ease-in-out origin-bottom-right"></span>
			</button>
			<nav
				id="navbar"
				className={`navbar ${
					isNavbarHidden ? "hidden" : ""
				} hidden w-full absolute py-4 shadow-lg rounded-lg top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none mt-2`}
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
