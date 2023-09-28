import useScroll from "../utils/useScroll";
import logoImage from "../assets/image/logo.png";
import Navbar from "../components/Navbar";

const Header = () => {
	const scrolled = useScroll();

	return (
		<header
			className={`w-full fixed z-20 ${
				scrolled
					? "bg-opacity-30 bg-gray-700 backdrop-blur-md h-16 -mt-3 lg:h-20"
					: "bg-[#00095D]"
			} transition-all duration-500`}
		>
			<div className="mx-auto">
				<div className="flex items-center justify-between relative">
					<div className="w-[150px] mx-6 pr-10 py-6 lg:w-[350px] lg:px-[70px]">
						<a href="#" className="block">
							<img src={logoImage} alt="Logo" />
						</a>
					</div>
					<div className="lg:w-full mr-32">
						<Navbar />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
