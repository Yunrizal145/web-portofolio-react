import { identity } from "../constants/data";
import Icons from "../sections/Icons";

const Footer = () => {
	const { name, role } = identity;

	return (
		<footer className="container mx-auto text-white ">
			<div className="flex flex-col justify-center items-center mt-20">
				<h2 className="text-xl lg:text-3xl text-center font-bold tracking-widest mb-2">
					{name}
				</h2>
				<h4 className="text-lg lg:text-xl">{role[0]} 👨‍💻 </h4>

				<div className="lg:ml-36 lg:-mt-2">
					<Icons />
				</div>
				<div className="text-xs lg:text-base text-center mt-4 mb-14">
					<div>&copy; 2023 Created by {name}, All Right Deserved</div>
				</div>
			</div>
		</footer>
	);
};
2;
export default Footer;
