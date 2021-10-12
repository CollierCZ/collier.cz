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
        <div className="w-screen h-screen flex items-center justify-center">
          <h1 className="text-4x1 font-extrabold leading-relaxed">Hello, World!</h1>
          <table>
            <thead>
              <tr>
                <th scope="col" className="bg-gray-400">Name</th>
                <th scope="col" className="bg-gray-400">Description</th>
                <th scope="col" className="bg-gray-400">Stars</th>
                <th scope="col" className="bg-gray-400">URL</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg: Package) => (
                <tr key={pkg.name}>
                  <th scope="row" className="bg-gray-400">{pkg.name}</th>
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