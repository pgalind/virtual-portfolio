import React from "react";

const LoadingAnimation = () => {
	return (
		<div className='flex items-center justify-center space-x-1 text-slate-900 font-bold text-xl sm:text-3xl'>
			<span className='animate-bounce [animation-delay:0s]'>.</span>
			<span className='animate-bounce [animation-delay:0.25s]'>.</span>
			<span className='animate-bounce [animation-delay:0.5s]'>.</span>
		</div>
	);
};

export default LoadingAnimation;
