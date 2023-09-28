import SectionTitle from "../components/SectionTitle";
import InputLabel from "../components/InputLabel";
import TextareaField from "../components/TextareaField";
import { BsWhatsapp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
	return (
		<div className="container mx-auto">
			<div
				id="contact"
				className="w-full flex justify-center items-center"
			>
				<SectionTitle textColor="#00095d">Contact</SectionTitle>
			</div>
			<div className="flex justify-center items-center">
				<div className="w-[250px] h-1 bg-[#00095d] rounded-full mt-8"></div>
			</div>
			<div className="mx-10 md:mx-20 lg:mx-32 mt-12">
				{/* Contact Title */}
				<div className="w-full text-[#0095d]">
					<h2 className="text-2xl font-bold">
						Contact me, if you want to discuss
					</h2>
					<h4 className="text-sm lg:text-base font-semibold text-slate-800">
						I am always open to discuss website development,
						cooperation or partnerships. Just contact me through the
						media below.
					</h4>
				</div>

				{/* Contact Main Content */}
				<div className="lg:flex lg:gap-10">
					<div className="lg:w-2/3">
						<div className="mt-10">
							<InputLabel label="Nama Lengkap" placeholder="" />
							<InputLabel label="Email" placeholder="" />
							<InputLabel label="Subject" placeholder="" />
							<TextareaField label="Message" placeholder="" />
						</div>
					</div>
					<div className="flex justify-between my-8 lg:flex-col">
						<div className="w-[150px] h-1 lg:w-1 lg:h-[150px] bg-[#00095d] rounded-full"></div>
						<div className="flex gap-2 -ml-3 -mt-3">
							<span>O</span>
							<span>R</span>
						</div>
						<div className="w-[150px] h-1 lg:w-1 lg:h-[150px] bg-[#00095d] rounded-full"></div>
					</div>
					<div className="lg:w-1/3 lg:mt-14 ">
						{/* Whatsapp */}
						<div className="w-full p-4 bg-cyan-400 rounded-2xl flex gap-6">
							<div className="w-20 p-4 bg-[#fff] rounded-full text-green-500 text-5xl">
								<BsWhatsapp />
							</div>
							<div className="text-white pt-3">
								<h2 className="font-bold text-lg">Whatsapp</h2>
								<h4 className="text-sm text-slate-200">
									0882 - 9417 - 4402
								</h4>
							</div>
						</div>

						{/* Email */}
						<div className="w-full p-4 bg-cyan-400 rounded-2xl flex gap-6 mt-14">
							<div className="w-20 p-4 bg-[#fff] rounded-full text-red-400 text-5xl">
								<TfiEmail />
							</div>
							<div className="text-white pt-3">
								<h2 className="font-bold text-lg">Mail</h2>
								<h4 className="text-sm text-slate-200">
									hamad.yunrizal@gmail.com
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
