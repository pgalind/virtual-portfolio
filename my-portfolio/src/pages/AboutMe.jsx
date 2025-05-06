import { useEffect, useState } from "react";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import LoadingAnimation from "../components/LoadingAnimation";
import CustomPortableText from "../components/PortableText";
import SocialLink from "../components/SocialLink";
import client, { urlFor } from "../lib/sanityClient";

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
			<h1 className='mb-8 text-xl sm:text-2xl text-white font-light capitalize underline-offset-8'>
				{data.title}
			</h1>
			<div className='flex flex-col md:w-2/3 items-center mx-auto'>
				<img
					src={urlFor(data.profileImage).quality(100).url()}
					alt='Profile Image'
					className='size-40 sm:size-52 md:size-64 object-cover object-top overflow-hidden rounded-full border-white border-2 border-solid'
				/>
				<div className='flex flex-col flex-1 text-justify'>
					<CustomPortableText value={data.bio} />
				</div>
				<div className='flex w-full my-4 justify-between'>
					<SocialLink
						url='https://www.github.com/pgalind'
						icon={<GithubLogo size={28} />}
						label='Github'
					/>
					<SocialLink
						url='https://www.linkedin.com/in/pgalind'
						icon={<LinkedinLogo size={28} />}
						label='LinkedIn'
					/>
					<SocialLink
						url='mailto:pablogalindo864@gmail.com'
						icon={<EnvelopeSimple size={28} />}
						label='Email'
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
