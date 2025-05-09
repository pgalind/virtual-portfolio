import { useEffect, useState } from "react";
import client, { urlFor } from "../lib/sanityClient";
import LoadingAnimation from "../components/LoadingAnimation";
import UnderConstructionBanner from "../components/UnderConstructionBanner";
// import CustomPortableText from "../components/PortableText";

const Projects = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const query = '*[_type == "projects"][0]';
			const result = await client.fetch(query);
			console.log("Sanity Result:", result); // <- For debugging
			setData(result);
			setIsLoading(false);
		};
		fetchData();
	}, []);

	if (isLoading) return <LoadingAnimation />;

	if (!data) return <UnderConstructionBanner />;

	return <div>Projects</div>;
};

export default Projects;
