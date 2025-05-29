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
		!isLoading && <div className='flex flex-col mx-auto sm:w-4/5 md:w-3/4 lg:w-2/3 p-8 rounded-xl'>
			<div className='self-center inline-block p-2 border-2 border-cyan-400 rounded-full mb-8'>
				<img
					src={urlFor(data.profileImage).quality(100).url()}
					alt='Profile Image'
					className='w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 object-cover rounded-full'
				/>
			</div>

			<CustomPortableText value={data.bio} />
			<div className='flex w-full flex-wrap justify-evenly gap-2'>
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
		</div>
	);
};

export default AboutMe;
