import waIcon from "../assets/image/wa.png";
import linkedIcon from "../assets/image/linked.png";
import githubIcon from "../assets/image/github.png";
import igIcon from "../assets/image/ig.png";

const Icons = () => {
	return (
		<div className="lg:w-[450px] flex justify-center lg:justify-start gap-5 my-6">
			<a
				href="https://wa.me/+6288294174402"
				target="_blank"
				className="px-3 py-3 lg:px-4 lg:py-4 rounded-full bg-[#f6f9fc] duration-300 hover:blur-none hover:scale-125 hover:translate-x-0 hover:duration-300"
				rel="noreferrer"
			>
				<img
					className="w-4 h-4 lg:w-6 lg:h-6"
					src={waIcon}
					alt="Whatsapp"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/hammad-yunrizal-3b0b391b9/"
				target="_blank"
				className="px-3 py-3 lg:px-4 lg:py-4 rounded-full bg-[#f6f9fc] duration-300 hover:blur-none hover:scale-125 hover:translate-x-0 hover:duration-300"
				rel="noreferrer"
			>
				<img
					className="w-4 h-4 lg:w-6 lg:h-6"
					src={linkedIcon}
					alt="Linked In"
				/>
			</a>
			<a
				href="https://github.com/Yunrizal145"
				target="_blank"
				className="px-3 py-3 lg:px-4 lg:py-4 rounded-full bg-[#f6f9fc] duration-300 hover:blur-none hover:scale-125 hover:translate-x-0 hover:duration-300"
				rel="noreferrer"
			>
				<img
					className="w-4 h-4 lg:w-6 lg:h-6"
					src={githubIcon}
					alt="Github"
				/>
			</a>
			<a
				href="https://www.instagram.com/yunrizal/"
				target="_blank"
				className="px-3 py-3 lg:px-4 lg:py-4 rounded-full bg-[#f6f9fc] duration-300 hover:blur-none hover:scale-125 hover:translate-x-0 hover:duration-300"
				rel="noreferrer"
			>
				<img
					className="w-4 h-4 lg:w-6 lg:h-6"
					src={igIcon}
					alt="Instagram"
				/>
			</a>
		</div>
	);
};

export default Icons;
