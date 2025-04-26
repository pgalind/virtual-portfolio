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
		<div className='bg-slate-400 p-12 space-y-8 items-center'>
			<h1 className='text-2xl sm:text-3xl text-slate-900 font-semibold italic'>
				{data.title}
			</h1>
			<div className='flex flex-col sm:flex-row items-start sm:gap-6'>
				<div className='flex bg-green-300'>
					<img
						src={urlFor(data.profileImage).quality(100).url()}
						alt='Profile'
						className='w-80 object-cover'
					/>
				</div>

				<div className='flex flex-1 text-slate-900 text-xl'>
					<BlockContent
						blocks={data?.bio}
						projectId='q0sz1hm3'
						dataset='production'
						serializers={{}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
