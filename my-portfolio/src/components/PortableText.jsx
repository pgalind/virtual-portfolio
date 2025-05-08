import { PortableText } from "@portabletext/react";

const components = {
	types: {
		image: ({ value }) => (
			<img
				src={value.asset?.url}
				alt={value.alt || "Sanity Image"}
				className='my-4 rounded-lg'
			/>
		),
	},
	block: {
		h1: ({ children }) => (
			<h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-cyan-400'>
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className='text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-white'>
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className='text-lg md:text-xl lg:text-2xl font-medium mb-4 text-pink-600'>
				{children}
			</h3>
		),
		normal: ({ children }) => (
			<p className='text-base md:text-lg lg:text-xl text-white font-light font-sans'>
				{children}
			</p>
		),
		blockquote: ({ children }) => (
			<blockquote className='border-l-4 border-pink-600 bg-pink-600/10 px-4 py-2 mx-4 my-8 font-extralight italic text-sm md:text-base lg:text-lg text-white tracking-wide'>
				{children}
			</blockquote>
		),
	},
	marks: {
		link: ({ value, children }) => (
			<a
				href={value.href}
				target='_blank'
				rel='noopener noreferrer'
				className='text-pink-600 text-base md:text-lg lg:text-xl italic'
			>
				{children}
			</a>
		),
	},
	list: {
		bullet: ({ children }) => <ul className='list-disc ml-4'>{children}</ul>,
		number: ({ children }) => <ol className='list-decimal ml-4'>{children}</ol>,
	},
	listItem: {
		bullet: ({ children }) => (
			<li className='mb-2 text-sm md:text-base lg:text-lg text-white font-light font-sans'>
				{children}
			</li>
		),
		number: ({ children }) => (
			<li className='mb-2 text-sm md:text-base lg:text-lg text-white font-light font-sans'>
				{children}
			</li>
		),
	},
};

const CustomPortableText = ({ value }) => {
	return <PortableText value={value} components={components} />;
};

export default CustomPortableText;
