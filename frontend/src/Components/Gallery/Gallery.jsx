import React, { useState, useEffect, useRef } from "react";
import Banner from "../Banner";

// Media data for gallery
const allMedia = [
	{
		year: 2024,
		type: "image",
		src: "/Merch2.png",
		caption: "Beach cleanup in Hanoi",
		description: "Our volunteers collected 1,200 kg of waste in 3 hours.",
	},
	{
		year: 2025,
		type: "image",
		src: "/bg.jpg",
		caption: "Plastic collection in Da Nang",
		description: "Community joined forces to tackle plastic pollution.",
	},
	{
		year: 2026,
		type: "video",
		src: "https://www.youtube.com/embed/X2YgM1Zw4_E",
		caption: "Recycling event in HCMC",
		description: "Over 500 participants attended the recycling fair.",
	},
	{
		year: 2024,
		type: "image",
		src: "/bg.jpg",
		caption: "Awareness campaign 2024",
		description: "Students led an awareness march across districts.",
	},
	{
		year: 2025,
		type: "image",
		src: "/bg.jpg",
		caption: "Riverbank cleanup with youth",
		description: "Youths removed debris along a 2km river section.",
	},
	{
		year: 2026,
		type: "image",
		src: "/bg.jpg",
		caption: "Volunteers at work",
		description: "Hard at work on World Environment Day.",
	},
];

// Images for slide modal
const SLIDES = [
	{ src: "/Merch2.png", caption: "Beach cleanup in Hanoi" },
	{ src: "/bg.jpg", caption: "Plastic collection in Da Nang" },
	{ src: "/bg.jpg", caption: "Awareness campaign 2024" },
];

// Banner images for Gallery page (same as About.jsx)
const BANNER_IMAGES = [
	"/banner-right.jpg",
	"/Merch2.png",
	"/bg.jpg",
];

// Responsive column count for gallery grid
const getColumnCount = () => {
	const width = window.innerWidth;
	if (width < 500) return 1;
	if (width < 700) return 2;
	if (width < 1000) return 3;
	return 4;
};

const Gallery = () => {
	// State for year filter
	const [selectedYear, setSelectedYear] = useState("All");
	// State for modal (image, video, or slide)
	const [modalMedia, setModalMedia] = useState(null);
	// State for gallery grid columns
	const [columns, setColumns] = useState(getColumnCount());
	// State for slide modal index
	const [slideIdx, setSlideIdx] = useState(0);
	// State for banner image index
	const [bannerIdx, setBannerIdx] = useState(0);
	// Ref for banner interval
	const bannerInterval = useRef();

	// Update columns on window resize
	useEffect(() => {
		const handleResize = () => setColumns(getColumnCount());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Banner auto-slide effect
	useEffect(() => {
		bannerInterval.current = setInterval(() => {
			setBannerIdx((idx) => (idx + 1) % BANNER_IMAGES.length);
		}, 4000);
		return () => clearInterval(bannerInterval.current);
	}, []);

	// Banner dot click handler
	const handleBannerDot = (idx) => {
		setBannerIdx(idx);
		clearInterval(bannerInterval.current);
		bannerInterval.current = setInterval(() => {
			setBannerIdx((i) => (i + 1) % BANNER_IMAGES.length);
		}, 4000);
	};

	// Filter media by selected year
	const filteredMedia =
		selectedYear === "All"
			? allMedia
			: allMedia.filter((media) => media.year === selectedYear);

	// Open slide modal and reset to first slide
	const openSlideModal = () => {
		setModalMedia({ type: "slide" });
		setSlideIdx(0);
	};

	return (
		<div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
			<Banner
				images={BANNER_IMAGES}
				title="SarangXanh Gallery"
				subtitle="A snapshot of our sustainability journey – from cleanups to campaigns across Vietnam."
				buttonText="Explore Gallery"
				onButtonClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
			/>

			{/* Year filter buttons */}
			<div className="flex justify-center gap-6 mt-10 mb-6 flex-wrap">
				{["All", 2024, 2025, 2026].map((year) => (
					<button
						key={year}
						className={`px-4 py-2 text-sm font-semibold rounded-full border ${
							selectedYear === year
								? "bg-blue-500 text-white"
								: "bg-white text-blue-500 border-blue-400 hover:bg-blue-100"
						} transition`}
						onClick={() => setSelectedYear(year)}
					>
						{year}
					</button>
				))}
			</div>

			{/* Media grid */}
			<div
				className="gap-2 mx-auto"
				style={{
					columnCount: columns,
					columnGap: "10px",
					padding: "10px",
				}}
			>
				{filteredMedia.map((media, idx) => (
					<div
						key={idx}
						className="relative mb-2 cursor-pointer group"
						onClick={() =>
							media.type === "image" && SLIDES.some((s) => s.src === media.src)
								? openSlideModal()
								: setModalMedia(media)
						}
					>
						{media.type === "image" ? (
							<img
								src={media.src}
								alt="gallery"
								className="w-full rounded-md hover:brightness-90 transition duration-200"
							/>
						) : (
							<div className="w-full aspect-video rounded-md overflow-hidden">
								<iframe
									src={media.src}
									title={media.caption}
									className="w-full h-full pointer-events-none"
									allowFullScreen
								/>
							</div>
						)}
						{/* Caption always shown at bottom of media card */}
						<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 rounded-b-md">
							{media.caption}
						</div>
					</div>
				))}
			</div>

			{/* Modal for image, video, and slide */}
			{modalMedia && (
				<div
					className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
					onClick={() => setModalMedia(null)}
				>
					<div
						className="max-w-3xl w-full mx-4 relative bg-transparent flex flex-col items-center"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Image modal */}
						{modalMedia.type === "image" && (
							<img
								src={modalMedia.src}
								alt="modal"
								className="w-full rounded-lg shadow-lg"
							/>
						)}
						{/* Video modal */}
						{modalMedia.type === "video" && (
							<div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
								<iframe
									src={modalMedia.src}
									title={modalMedia.caption}
									className="w-full h-full"
									allowFullScreen
								/>
							</div>
						)}
						{/* Slide modal with navigation */}
						{modalMedia.type === "slide" && (
							<div className="w-full flex flex-col items-center">
								<div className="w-full aspect-video flex items-center justify-center">
									<img
										src={SLIDES[slideIdx].src}
										alt={SLIDES[slideIdx].caption}
										className="max-h-[60vh] rounded-lg shadow-lg object-contain"
									/>
								</div>
								<p className="mt-4 text-white bg-black/50 px-3 py-1 text-sm rounded">
									{SLIDES[slideIdx].caption}
								</p>
								<div className="flex gap-4 mt-6">
									<button
										className="px-4 py-2 bg-white/80 text-blue-700 font-semibold rounded-full shadow hover:bg-blue-600 hover:text-white transition"
										onClick={() =>
											setSlideIdx(
												(slideIdx - 1 + SLIDES.length) % SLIDES.length
											)
										}
										disabled={SLIDES.length < 2}
									>
										Prev
									</button>
									<button
										className="px-4 py-2 bg-white/80 text-blue-700 font-semibold rounded-full shadow hover:bg-blue-600 hover:text-white transition"
										onClick={() => setSlideIdx((slideIdx + 1) % SLIDES.length)}
										disabled={SLIDES.length < 2}
									>
										Next
									</button>
								</div>
							</div>
						)}
						{/* Caption for image/video modal */}
						{modalMedia.type !== "slide" && (
							<p className="absolute bottom-2 left-2 text-white bg-black/50 px-3 py-1 text-sm rounded">
								{modalMedia.caption}
							</p>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
