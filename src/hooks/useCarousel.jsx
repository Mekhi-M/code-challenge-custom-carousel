/** @format */
import { useState } from "react";

const useCarousel = images => {
	const [carouselIdx, setCarouselIdx] = useState(0);

	const handleBoundary = i => (i + images.length) % images.length;

	const handleNext = () => {
		setCarouselIdx(i => handleBoundary(i + 1));
	};

	const handlePrev = () => {
		setCarouselIdx(i => handleBoundary(i - 1));
	};

	return { carouselIdx, handleNext, handlePrev };
};

export default useCarousel;
