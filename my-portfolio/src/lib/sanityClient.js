import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const { VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET } = import.meta.env;

// Error handling for missing environment variables
if (!VITE_SANITY_PROJECT_ID) {
	throw new Error("Missing VITE_SANITY_PROJECT_ID in environment variables.");
}

if (!VITE_SANITY_DATASET) {
	throw new Error("Missing VITE_SANITY_DATASET in environment variables.");
}

const client = createClient({
	projectId: VITE_SANITY_PROJECT_ID,
	dataset: VITE_SANITY_DATASET,
	useCdn: true,
	apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
