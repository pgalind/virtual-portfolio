import React from "react";

const SocialLink = ({ url, icon, label, onClick }) => {
	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='flex flex-col flex-1 space-y-2 p-2 min-w-24 max-w-36 items-center md:text-lg text-cyan-400 hover:text-slate-900 hover:bg-cyan-400 hover:scale-105 active:bg-pink-600 active:text-white ease-in-out transition-transform cursor-pointer'
			onClick={onClick}
		>
			{icon}
			<span>{label}</span>
		</a>
	);
};

SocialLink.defaultProps = {
	onClick: undefined,
};

export default SocialLink;
