// Import pages
import AboutMe from "../../pages/AboutMe";
import Skills from "../../pages/Skills";
import Experience from "../../pages/Experience";
import Projects from "../../pages/Projects";
import Certifications from "../../pages/Certifications";

const ROUTES = [
	{
		path: "/",
		heading: "About Me",
		element: <AboutMe />,
	},
	{
		path: "/skills",
		heading: "Skills",
		element: <Skills />,
	},
	{
		path: "/experience",
		heading: "Experience",
		element: <Experience />,
	},
	{
		path: "/projects",
		heading: "Projects",
		element: <Projects />,
	},
	{
		path: "/certifications",
		heading: "Certifications",
		element: <Certifications />,
	},
];

export default ROUTES;
