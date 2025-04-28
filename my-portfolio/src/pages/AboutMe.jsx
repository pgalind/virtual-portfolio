import { useEffect, useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import client, { urlFor } from "../lib/sanityClient";
import BlockContent from "@sanity/block-content-to-react";

const AboutMe = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const query = '*[_type == "aboutMe"][0]';
			const result = await client.fetch(query);
			console.log("Sanity Result:", result); // <- For debugging
			setData(result);
		};
		fetchData();
	}, []);

	if (!data) return <LoadingAnimation />;

	return (
		<>
			<h1 className='text-2xl sm:text-2xl text-white font-semibold'>
				{data.title}
			</h1>
			<div className='flex flex-col my-8 items-center sm:gap-6'>
				<img
					src={urlFor(data.profileImage).quality(100).url()}
					alt='Profile'
					className='w-80 h-80 object-cover object-top overflow-hidden rounded-full'
				/>
				<div className='flex flex-1 text-white text-xl text-justify'>
					<BlockContent
						blocks={data?.bio}
						projectId={import.meta.env.VITE_SANITY_PROJECT_ID}
						dataset={import.meta.env.VITE_SANITY_DATASET}
						serializers={{}}
					/>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
