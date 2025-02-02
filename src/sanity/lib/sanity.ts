import { createClient } from "next-sanity";

const client = createClient({
  projectId: 'lalxdh2y',
  dataset: 'production',
  apiVersion: '2023-02-27',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Add this
});

export default client;