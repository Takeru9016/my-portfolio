import imageUrlBuilder from '@sanity/image-url';
import { createClient, SanityClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client: SanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export default function urlFor(source: any) {
    return builder.image(source);
}