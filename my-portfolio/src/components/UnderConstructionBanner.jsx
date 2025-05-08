import React from "react";

const UnderConstructionBanner = () => {
	return (
		<div className='h-full mx-auto flex'>
			<span className=' bg-yellow-300 p-3 text-center text-black font-bold text-base md:text-lg tracking-widest uppercase animate-pulse'>
				🚧 This page is under construction 🚧
			</span>
		</div>
	);
};

export default UnderConstructionBanner;
