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
			<div className='flex flex-col sm:flex-row items-start sm:gap-6'>
				<div className='flex'>
					<img
						src={urlFor(data.profileImage).quality(100).url()}
						alt='Profile'
						className='w-80 object-cover'
					/>
				</div>

				<div className='flex flex-1 text-white text-xl'>
					<BlockContent
						blocks={data?.bio}
						projectId='q0sz1hm3'
						dataset='production'
						serializers={{}}
					/>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
