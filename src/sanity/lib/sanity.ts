import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'lalxdh2y',
  dataset: 'production',
  apiVersion: '2023-02-27', // isko apne hisab se update karo
  useCdn: true, // ya false, jo zarurat ho
});
