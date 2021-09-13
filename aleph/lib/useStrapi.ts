import { useDeno } from "https://deno.land/x/aleph/framework/react/mod.ts"

const useStrapi = (endpoint: String) => {
    return useDeno(async () => {
        const relationships = JSON.parse(atob(Deno.env.get('PLATFORM_RELATIONSHIPS')))
        const strapi = relationships.strapi[0]
        const STRAPI_API_URL = `http://${strapi.ip}:${strapi.port}` || "http://localhost:1337";
        const url = `${STRAPI_API_URL}/${endpoint}`;
            return await (await fetch(url)
            .then(response => response.json()))
  })}

export default useStrapi