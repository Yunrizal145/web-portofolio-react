import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";
import InputLabel from "../components/InputLabel";
import TextareaField from "../components/TextareaField";
import { BsWhatsapp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariants } from "../utils/motion";

const Contact = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_wgjzki7",
				"template_nr9dpss",
				form.current,
				"ZW-uXhW9cQTjO0xmn"
			)
			.then(
				(result) => {
					console.log(result.text);
					setIsModalOpen(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="container mx-auto">
			<div
				id="contact"
				className="w-full flex justify-center items-center"
			>
				<SectionTitle textColor="#36454F">Contact</SectionTitle>
			</div>
			<div className="flex justify-center items-center">
				<div className="w-[250px] h-1 bg-[#36454F] rounded-full mt-8"></div>
			</div>
			<motion.div
				animate={{ y: [-350, 0] }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ ease: "easeOut", duration: 2 }}
				variants={staggerContainer}
				whileInView="show"
				initial="hidden"
				className="mx-10 md:mx-20 lg:mx-32 mt-12"
			>
				{/* Contact Title */}
				<motion.div
					variants={slideIn("bottom", "tween", 2, 1)}
					className="w-full text-[#0095d]"
				>
					<motion.h2
						variants={textVariants(1.1)}
						className="text-2xl font-bold"
					>
						Contact me, if you want to discuss
					</motion.h2>
					<motion.h4
						variants={textVariants(1.2)}
						className="text-sm lg:text-base font-semibold text-slate-800"
					>
						I am always open to discuss website development,
						cooperation or partnerships. Just contact me through the
						media below.
					</motion.h4>
				</motion.div>

				{/* Contact Main Content */}
				<div className="lg:flex lg:gap-10">
					<motion.div
						variants={slideIn("left", "tween", 2, 1)}
						className="lg:w-2/3 relative"
					>
						<form className="mt-10" ref={form} onSubmit={sendEmail}>
							<InputLabel
								label="Nama Lengkap"
								name="user_name"
								placeholder=""
							/>
							<InputLabel
								label="Email"
								name="user_email"
								placeholder=""
							/>
							{/* <InputLabel label="Subject" placeholder="" /> */}
							<TextareaField
								label="Message"
								name="message"
								placeholder=""
							/>
							<input
								type="submit"
								value="Send"
								className="w-full px-4 py-2 rounded-lg text-sm text-white bg-[#FFD700] cursor-pointer hover:bg-[#dac449] lg:text-lg"
							/>
						</form>

						{/* Modal */}
						{isModalOpen && (
							<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg">
								<div className="relative z-10 px-6 py-3 bg-emerald-500 text-white rounded-2xl">
									<div className="flex justify-between mt-2">
										<p>Pesan</p>
										<button
											className="px-3 py-1 bg-red-500 rounded-full hover:bg-red-600"
											onClick={() =>
												setIsModalOpen(false)
											}
										>
											X
										</button>
									</div>
									<div className="h-1 w-full bg-white my-4"></div>
									<h2 className="mt-6">Email Terkirim!</h2>
									<p className="mb-5">
										Pesan Anda telah terkirim dengan sukses.
									</p>
								</div>
							</div>
						)}
					</motion.div>
					<motion.div
						variants={slideIn("bottom", "tween", 2, 1)}
						className="flex justify-between my-8 lg:flex-col"
					>
						<div className="w-[80px] h-1 lg:w-1 lg:h-[150px] bg-[#00095d] rounded-full"></div>
						<motion.div
							variants={textVariants(1.1)}
							className="flex gap-2 -ml-3 -mt-3"
						>
							<span>O</span>
							<span>R</span>
						</motion.div>
						<div className="w-[80px] h-1 lg:w-1 lg:h-[150px] bg-[#00095d] rounded-full"></div>
					</motion.div>
					<div className="lg:w-1/3 lg:mt-14">
						{/* Whatsapp */}
						<motion.a
							href="https://wa.me/+6288294174402"
							target="_blank"
							variants={slideIn("bottom", "tween", 2, 1)}
							className="w-full p-4 bg-[#36454F] rounded-2xl flex flex-col items-center lg:flex-row lg:gap-6 hover:bg-[#49718b]"
						>
							<motion.div
								variants={textVariants(1.1)}
								className="w-20 p-4 rounded-full text-green-500 text-5xl"
							>
								<BsWhatsapp />
							</motion.div>
							<div className="text-white mt-4 lg:mt-0">
								<motion.h2
									variants={textVariants(1.2)}
									className="font-bold text-lg lg:text-xl"
								>
									Whatsapp
								</motion.h2>
								<motion.h4
									variants={textVariants(1.3)}
									className="text-sm lg:text-base text-slate-200 mt-2"
								>
									0882 - 9417 - 4402
								</motion.h4>
								<motion.h4
									variants={textVariants(1.4)}
									className="text-sm lg:text-base text-[#FFD700] underline mt-2"
								>
									Send Me a Message
								</motion.h4>
							</div>
						</motion.a>

						{/* Email */}
						<motion.a
							href="mailto:hamad.yunrizal@gmail.com"
							target="_blank"
							variants={slideIn("bottom", "tween", 2, 1)}
							className="w-full p-4 bg-[#36454F] rounded-2xl flex flex-col items-center lg:flex-row lg:gap-6 mt-14 hover:bg-[#49718b]"
						>
							<motion.div
								variants={textVariants(1.1)}
								className="w-20 p-4 rounded-full text-red-500 text-5xl"
							>
								<TfiEmail />
							</motion.div>
							<div className="text-white mt-4 lg:mt-0">
								<motion.h2
									variants={textVariants(1.2)}
									className="font-bold text-lg lg:text-xl"
								>
									Mail
								</motion.h2>
								<motion.h4
									variants={textVariants(1.3)}
									className="text-sm lg:text-base text-slate-200 mt-2"
								>
									hamad.yunrizal@gmail.com
								</motion.h4>
								<motion.h4
									variants={textVariants(1.4)}
									className="text-sm lg:text-base text-[#FFD700] underline mt-2"
								>
									Send Me a Message
								</motion.h4>
							</div>
						</motion.a>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
