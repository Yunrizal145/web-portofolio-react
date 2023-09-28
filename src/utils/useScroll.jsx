import { useState, useEffect } from "react";

const useScroll = () => {
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () =>
		window.scrollY > 0 ? setScrolled(true) : setScrolled(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrolled;
};

export default useScroll;
