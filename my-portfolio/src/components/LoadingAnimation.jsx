import React from "react";

const LoadingAnimation = () => {
	return (
		<div className='flex flex-col h-full items-center justify-center'>
			<div className='flex space-x-1 text-cyan-400 font-bold text-lg md:text-xl'>
				<span className='animate-bounce [animation-delay:0s]'>.</span>
				<span className='animate-bounce [animation-delay:0.25s]'>.</span>
				<span className='animate-bounce [animation-delay:0.5s]'>.</span>
			</div>
		</div>
	);
};

export default LoadingAnimation;
