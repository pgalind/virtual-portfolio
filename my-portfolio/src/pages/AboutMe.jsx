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
		<div className='w-full h-full'>
			<h1 className='mb-12 text-xl sm:text-2xl text-white font-medium capitalize'>
				{data.title}
			</h1>
			<div className='flex flex-col md:w-2/3 my-4 space-y-8 items-center mx-auto'>
				<img
					src={urlFor(data.profileImage).quality(100).url()}
					alt='Profile'
					className='size-40 sm:size-52 md:size-64 object-cover object-top overflow-hidden rounded-full border-white border-4 border-solid'
				/>
				<div className='flex flex-1 text-white sm:text-lg font-light'>
					<BlockContent
						blocks={data?.bio}
						projectId={import.meta.env.VITE_SANITY_PROJECT_ID}
						dataset={import.meta.env.VITE_SANITY_DATASET}
						serializers={{}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
