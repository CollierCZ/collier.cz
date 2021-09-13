import { useDeno } from "https://deno.land/x/aleph/framework/react/mod.ts"

const useStrapi = (endpoint: String) => {
  return useDeno(async () => {
    const relationships = Deno.env.get('PLATFORM_RELATIONSHIPS')
    const getUrl = () => {
      if (relationships) {
        const parsedRelationships = JSON.parse(atob(relationships))
        const strapi = parsedRelationships.strapi[0]
        return`http://${strapi.ip}:${strapi.port}`
      }
      else {
        return Deno.env.get('STRAPI_URL')
      }
    }
    const strapiUrl = getUrl()
    const url = `${strapiUrl}/${endpoint}`;
    return await (await fetch(url).then(response => response.json()))
  })
}

export default useStrapi