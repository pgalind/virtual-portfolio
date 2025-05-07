import { useEffect, useState } from "react";
import client, { urlFor } from "../lib/sanityClient";
import {
	EnvelopeSimple,
	GithubLogo,
	LinkedinLogo,
} from "@phosphor-icons/react";
import LoadingAnimation from "../components/LoadingAnimation";
import CustomPortableText from "../components/PortableText";
import SocialLink from "../components/SocialLink";
import UnderConstructionBanner from "../components/UnderConstructionBanner";

const AboutMe = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const query = '*[_type == "aboutMe"][0]';
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
			<h1 className='m-8 text-xl sm:text-2xl text-white font-light'>
				{data.title}
			</h1>
			<div className='flex flex-col md:w-2/3 items-center mx-auto px-8 shadow-md'>
				<img
					src={urlFor(data.profileImage).quality(100).url()}
					alt='Profile Image'
					className='size-40 sm:size-52 md:size-64 object-cover object-top overflow-hidden rounded-full border-white border-2 border-solid'
				/>
				<div className='flex flex-col flex-1'>
					<CustomPortableText value={data.bio} />
				</div>
				<div className='flex w-full justify-evenly'>
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
		</>
	);
};

export default AboutMe;
