import useScroll from "../utils/useScroll";
import logoImage from "../assets/image/logo.png";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Header = () => {
	const scrolled = useScroll();

	return (
		<motion.header
			variants={staggerContainer}
			whileInView="show"
			initial="hidden"
			transition={{ ease: "easeOut", duration: 2 }}
			className={`w-full fixed z-20 ${
				scrolled
					? "bg-opacity-30 bg-gray-700 backdrop-blur-md h-16 -mt-3 lg:h-28"
					: "bg-[#00095D]"
			} transition-all duration-500`}
		>
			<motion.div
				variants={fadeIn("down", "tween", 0.3, 0.75)}
				className="mx-auto"
			>
				<div className="flex items-center justify-between relative">
					<div className="w-[150px] mx-6 pr-10 py-8 lg:py-10 lg:w-[450px] lg:px-[70px]">
						<a href="#" className="block">
							<img src={logoImage} alt="Logo" />
						</a>
					</div>
					<div className="lg:w-full mr-32">
						<Navbar />
					</div>
				</div>
			</motion.div>
		</motion.header>
	);
};

export default Header;
