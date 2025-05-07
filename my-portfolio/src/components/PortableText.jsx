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
			<h1 className='text-3xl sm:text-4xl font-semibold mb-8 text-cyan-400'>
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className='text-2xl sm:text-3xl font-medium mb-6 text-white'>
				{children}
			</h2>
		),
		normal: ({ children }) => (
			<p className='text-lg sm:text-xl mb-4 text-white font-light font-sans'>
				{children}
			</p>
		),
		blockquote: ({ children }) => (
			<blockquote className='border-l-4 border-pink-600 bg-pink-400/10 px-4 py-2 mx-4 my-8 font-serif font-extralight text-base sm:text-lg text-white tracking-wide'>
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
				className='text-pink-600 italic'
			>
				{children}
			</a>
		),
	},
};

const CustomPortableText = ({ value }) => {
	return <PortableText value={value} components={components} />;
};

export default CustomPortableText;
