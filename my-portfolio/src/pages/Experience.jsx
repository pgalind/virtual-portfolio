import { useEffect, useState } from "react";
import client, { urlFor } from "../lib/sanityClient";
import LoadingAnimation from "../components/LoadingAnimation";
import UnderConstructionBanner from "../components/UnderConstructionBanner";
import CustomPortableText from "../components/PortableText";

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
		<>
			<div className='bg-white flex flex-col p-8 shadow-md min-w-96'>
				<h2>{data.position}</h2>
				<p>{data.company}</p>
				<span>
					{data.dateFrom} - {data.dateTo}
				</span>
				<CustomPortableText value={data.description} />
				<img
					src={urlFor(data.image).quality(100).url()}
					alt='Company Logo'
					className='w-40'
				/>
			</div>
		</>
	);
};

export default Experience;
