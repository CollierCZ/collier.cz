import React from 'https://esm.sh/react'
import useStrapi from '~/lib/useStrapi.ts'
 
interface Package {
    name: string;
    description: string;
    github: string;
    stars: number;
  }
  const Packages = () => {
    const packages = useStrapi("packages")
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