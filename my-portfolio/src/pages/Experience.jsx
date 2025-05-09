import { useEffect, useState } from "react";
import client, { urlFor } from "../lib/sanityClient";
import LoadingAnimation from "../components/LoadingAnimation";
import UnderConstructionBanner from "../components/UnderConstructionBanner";
import CustomPortableText from "../components/PortableText";
import { ToMMYYYYFormat } from "../lib/helperMethods";

const Experience = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const query = '*[_type == "experience"][0]';
			const result = await client.fetch(query);
			console.log("Sanity Result:", result); // <- For debugging
			setData(result);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	if (isLoading) return <LoadingAnimation />;

	if (!data) return <UnderConstructionBanner />;

	return (
		<div className='flex flex-col mx-auto sm:w-4/5 md:w-3/4 lg:w-2/3 p-8 border-2 border-cyan-400 rounded-xl'>
			<div className='relative flex pb-4 mb-4 border-b-2 border-cyan-400 rounded-t-lg justify-between'>
				<div className='flex flex-col justify-center'>
					<h1 className='text-xl md:text-2xl lg:text-3xl font-medium text-white'>
						{data.position}
					</h1>
					<h2 className='md:text-lg lg:text-xl font-medium text-cyan-400'>
						{data.company}
					</h2>
					<p className='text-sm md:text-base lg:text-lg text-white font-light font-sans'>
						{ToMMYYYYFormat(`${data.dateFrom}`)} -{" "}
						{ToMMYYYYFormat(`${data.dateTo}`)}
					</p>
				</div>
				<img
					src={urlFor(data.image).quality(100).url()}
					alt='Company Logo'
					className='max-h-24 object-cover'
				/>
			</div>

			<CustomPortableText value={data.description} />
		</div>
	);
};

export default Experience;
