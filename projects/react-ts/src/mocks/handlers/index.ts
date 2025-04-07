import { http, HttpResponse } from 'msw';

// Define your handlers here
export const handlers = [
  // Example handler
  http.get('/api/example', () => {
    return HttpResponse.json({ message: 'This is a mocked API response' });
  }),
  
  // Add more handlers as needed
];
