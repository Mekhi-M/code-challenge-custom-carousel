/** @format */

import useCarousel from "../hooks/useCarousel";

const Carousel = ({ images }) => {
	const { carouselIdx, handleNext, handlePrev } = useCarousel(images);

	return (
		<>
			<h1 style={{ textAlign: "center" }}>Mekhi's Custom React Carousel 🦄</h1>
			<img src={images[carouselIdx]} />
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<button onClick={handlePrev}>{"<<<"} Prev</button>
				<button onClick={handleNext}>Next {">>>"}</button>
			</div>
		</>
	);
};

export default Carousel;
