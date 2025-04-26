import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
	projectId: "q0sz1hm3", // This is found in `my-portfolio-cms/sanity.config.js`
	dataset: "production",
	useCdn: true,
	apiVersion: "2023-01-01", // optional: lock to a specific API version
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
