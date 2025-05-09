import React from "react";

const UnderConstructionBanner = () => {
	return (
		<div className='flex flex-col h-full justify-center'>
			<span className=' bg-yellow-300 p-3 text-center text-black font-bold text-base md:text-lg tracking-widest uppercase animate-pulse'>
				🚧 This page is under construction 🚧
			</span>
		</div>
	);
};

export default UnderConstructionBanner;
