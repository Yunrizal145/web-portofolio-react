// import { useState } from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import MainContent from "./layouts/MainContent";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<>
			<motion.div
				className="fixed top-0 left-0 right-0 h-2 bg-cyan-600 origin-[0%] z-50"
				style={{ scaleX }}
			/>
			<Header />
			<MainContent />
			<Footer />
		</>
	);
}

export default App;
