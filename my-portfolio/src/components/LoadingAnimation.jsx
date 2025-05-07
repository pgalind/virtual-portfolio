import React from "react";

const LoadingAnimation = () => {
	return (
		<div className='h-full mx-auto flex items-center justify-center space-x-1 text-cyan-400 font-bold text-xl md:text-3xl'>
			<span className='animate-bounce [animation-delay:0s]'>.</span>
			<span className='animate-bounce [animation-delay:0.25s]'>.</span>
			<span className='animate-bounce [animation-delay:0.5s]'>.</span>
		</div>
	);
};

export default LoadingAnimation;
