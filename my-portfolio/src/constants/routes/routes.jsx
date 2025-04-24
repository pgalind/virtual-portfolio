// Import pages
import AboutMe from "../../pages/AboutMe";
import Skills from "../../pages/Skills";
import Experience from "../../pages/Experience";
import Projects from "../../pages/Projects";
import Certifications from "../../pages/Certifications";

const ROUTES = [
	{
		path: "/",
		element: <AboutMe />,
	},
	{
		path: "/skills",
		element: <Skills />,
	},
	{
		path: "/experience",
		element: <Experience />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
	{
		path: "/certifications",
		element: <Certifications />,
	},
];

export default ROUTES;
