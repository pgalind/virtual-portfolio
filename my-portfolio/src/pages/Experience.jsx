import { useEffect, useState } from "react";
import client, { urlFor } from "../lib/sanityClient";
import LoadingAnimation from "../components/LoadingAnimation";
import UnderConstructionBanner from "../components/UnderConstructionBanner";

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
			<h1 className='mb-8 text-xl sm:text-2xl text-white font-light capitalize underline-offset-8'>
				// data.title
			</h1>
			<div className='flex flex-col md:w-2/3 items-center mx-auto space-y-8'>
				// data.experience
			</div>
		</>
	);
};

export default Experience;
