import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { identity } from "../constants/data";
import Typewriter from "typewriter-effect";
import profilePict from "../assets/image/profile.png";
import Icons from "./Icons";
import { motion } from "framer-motion";
import {
	slideIn,
	staggerContainer,
	textVariants,
	zoomIn,
} from "../utils/motion";

const Home = () => {
	const { name, role, description } = identity;

	return (
		<div className="w-full text-center lg:text-left lg:flex lg:container lg:mx-auto ">
			<motion.div
				animate={{ y: [350, -50, 0] }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ ease: "easeOut", duration: 2 }}
				variants={staggerContainer}
				whileInView="show"
				initial="hidden"
				className="md:mx-16 lg:w-1/2 lg:pl-28 lg:-mx-0 text-white "
			>
				<motion.p
					variants={slideIn("left", "tween", 0.1, 1)}
					className="text-xl lg:text-2xl font-normal"
				>
					Hi 👋,
				</motion.p>
				<motion.h2
					variants={textVariants(1.1)}
					className="text-2xl lg:text-5xl font-bold"
				>
					{" "}
					{name}{" "}
				</motion.h2>
				<motion.div
					variants={textVariants(1.2)}
					className="mx-8 my-2 lg:-mx-0 lg:w-[550px] h-1 bg-[#FFD700] rounded-full mt-4 lg:mb-6"
				></motion.div>
				<motion.div variants={textVariants(1.3)}>
					<div className="text-2xl lg:text-4xl font-bold mb-2">
						<span className="text-lg lg:text-2xl text-[#FFD700]">
							I`m A
						</span>
						<Typewriter
							options={{
								strings: role,
								autoStart: true,
								loop: true,
							}}
						/>
					</div>
					<p className="mx-14 text-sm mt-6 lg:text-xl lg:-mx-0 lg:w-[450px]">
						{description[0]}
					</p>
				</motion.div>
				<motion.div variants={textVariants(1.4)} className="pb-4">
					<Icons />
				</motion.div>
				<motion.div
					variants={zoomIn(1.5, 0.75)}
					className="mt-8 lg:-mt-0"
				>
					<motion.a
						href="#download"
						variants={textVariants(1.5)}
						className="px-6 py-3 font-bold text-base lg:px-8 lg:py-4 lg:text-xl bg-white shadow-md rounded-bl-full rounded-tr-full text-[#FFD700] hover:bg-[#FFD700] hover:text-white hover:shadow-md hover:border-r-2 hover:border-b-2 hover:shadow-white hover:rounded-tl-full hover:rounded-br-full hover:rounded-bl-md hover:rounded-tr-md hover:duration-500"
					>
						<FontAwesomeIcon icon={faDownload} className="pr-2" />
						Curriculum Vitae
					</motion.a>
				</motion.div>
			</motion.div>
			{/* Foto Profile */}
			<motion.div
				animate={{ x: [350, -50, 0] }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ ease: "easeOut", duration: 4 }}
				className="flex justify-center mt-16 -mb-24 lg:justify-start lg:-mt-10 lg:w-1/2 lg:pl-36"
			>
				<img
					src={profilePict}
					alt="Profile Pict"
					className="w-72 h-72 lg:w-[520px] lg:h-[500px]"
				/>
			</motion.div>
		</div>
	);
};

export default Home;
