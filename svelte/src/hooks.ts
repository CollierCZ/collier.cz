import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {

  if (event.url.pathname.endsWith("xml/")) {
    event.url.pathname = event.url.pathname.replace("xml/$","xml")
  }

  const response = await resolve(event);

  return response;
};
