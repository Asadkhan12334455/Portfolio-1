import sanityClient from '@sanity/client';

// Sanity client configuration
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Replace with your dataset
  token: process.env.SANITY_API_TOKEN, // For authenticated requests
  useCdn: false, // Disabling CDN, because we are using the authenticated client
});

export default client;
