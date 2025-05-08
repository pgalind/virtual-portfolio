import { useEffect, useState } from "react";
import client, { urlFor } from "../lib/sanityClient";
import {
	Download,
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
			<img
				src={urlFor(data.profileImage).quality(100).url()}
				alt='Profile Image'
				className='my-4 size-48 sm:size-52 md:size-60 lg:size-64 object-cover object-top overflow-hidden rounded-full border-white border-2 border-solid'
			/>
			<div className='flex flex-col flex-1'>
				<CustomPortableText value={data.bio} />
			</div>
			<div className='flex w-full justify-evenly my-4'>
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
				<SocialLink
					url='/Galindo_Resume.pdf'
					download
					icon={<Download size={28} />}
					label='Resume'
				/>
			</div>
		</>
	);
};

export default AboutMe;
