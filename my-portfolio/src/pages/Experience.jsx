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
			<div className='flex flex-col p-8 border-2 border-cyan-400 rounded-lg'>
				<CustomPortableText value={data.description} />
				<img
					src={urlFor(data.image).quality(100).url()}
					alt='Company Logo'
					className='w-40 self-center'
				/>
			</div>
		</>
	);
};

export default Experience;
