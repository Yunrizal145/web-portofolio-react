// eslint-disable-next-line react/prop-types
const SectionTitle = ({ children, textColor }) => {
	return (
		<div className={`w-full text-center relative inline-block mt-16`}>
			<span
				className={`text-5xl font-bold opacity-40 absolute flex justify-center items-center h-full w-full text-[${textColor}]`}
			>
				{children}
			</span>
			<span
				className={`text-4xl font-bold relative top-6 z-10 text-[${textColor}]`}
			>
				{children}
			</span>
		</div>
	);
};

export default SectionTitle;
