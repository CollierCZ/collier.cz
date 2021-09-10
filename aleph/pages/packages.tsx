import React, { useEffect, useState } from 'https://esm.sh/react'
import { useDeno } from "https://deno.land/x/aleph/framework/react/mod.ts"
 
interface Package {
    name: string;
    description: string;
    github: string;
    stars: number;
  }
  
  interface Props {
    packages: Package[];
  }

  const Packages = () => {
    const packages = useDeno(async () => {
        const STRAPI_API_URL = Deno.env.get('STRAPI_URL') ||
          "http://localhost:1337";
    const url = `${STRAPI_API_URL}/packages`;
        return await (await fetch(url)
          .then(response => response.json()))
      })
    return (
        <div className="container">
          <h1>Hello, World!</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Stars</th>
                <th scope="col">URL</th>
              </tr>
            </thead><tbody>
              {packages.map((pkg: Package) => (
                <tr key={pkg.name}>
                  <th scope="row">{pkg.name}</th>
                  <td>{pkg.description}</td>
                  <td>{pkg.stars}</td>
                  <td>
                    <a href={pkg.github}>{pkg.github}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
  }
  export default Packages