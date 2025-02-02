import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'lalxdh2y',
  dataset: 'production',
  apiVersion: '2023-02-27', // Update as needed
  useCdn: true,
});

export default client; // ✅ Default export added
