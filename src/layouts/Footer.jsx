import { identity } from "../constants/data";
import Icons from "../sections/Icons";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariants } from "../utils/motion";

const Footer = () => {
	const { name, role } = identity;

	return (
		<motion.footer
			animate={{ y: [350, -50, 0] }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ ease: "easeOut", duration: 2 }}
			variants={staggerContainer}
			whileInView="show"
			initial="hidden"
			className="container mx-auto text-white "
		>
			<motion.div
				variants={slideIn("bottom", "tween", 0.1, 1)}
				className="flex flex-col justify-center items-center mt-20"
			>
				<motion.h2
					variants={textVariants(1.1)}
					className="text-xl lg:text-3xl text-center font-bold tracking-widest mb-2"
				>
					{name}
				</motion.h2>
				<motion.h4
					variants={textVariants(1.2)}
					className="text-lg lg:text-xl"
				>
					{role[0]} 👨‍💻{" "}
				</motion.h4>
				<motion.div
					variants={textVariants(1.3)}
					className="lg:ml-36 lg:-mt-2"
				>
					<Icons />
				</motion.div>
				<motion.div
					variants={textVariants(1.4)}
					className="text-xs lg:text-base text-center mt-4 mb-14"
				>
					<div>&copy; 2023 Created by {name}, All Right Deserved</div>
				</motion.div>
			</motion.div>
		</motion.footer>
	);
};
2;
export default Footer;
