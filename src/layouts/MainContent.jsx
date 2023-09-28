import About from "../sections/About";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Portfolio from "../sections/Portfolio";
import Skills from "../sections/Skills";

const MainContent = () => {
	return (
		<div className="mx-auto">
			<section className="w-full pt-40 lg:pt-32 pb-48 ">
				<Home />
			</section>
			<div className="w-full bg-white pb-20">
				<About />
			</div>
			<div className="w-full bg-[#f6f9fc] pb-24">
				<Skills />
			</div>
			<div className="w-full pb-20">
				<Portfolio />
			</div>
			<div className="w-full bg-white pb-20">
				<Contact />
			</div>
		</div>
	);
};

export default MainContent;
