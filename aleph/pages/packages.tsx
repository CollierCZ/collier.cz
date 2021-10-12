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
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold leading-relaxed">Hello, World!</h1>
          <table className="border border-gray-500">
            <thead>
              <tr>
                <th scope="col" className="bg-gray-400 p-8">Name</th>
                <th scope="col" className="bg-gray-400">Description</th>
                <th scope="col" className="bg-gray-400">Stars</th>
                <th scope="col" className="bg-gray-400">URL</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg: Package) => (
                <tr key={pkg.name}>
                  <th scope="row" className="bg-gray-400 p-8">{pkg.name}</th>
                  <td className="p-8">{pkg.description}</td>
                  <td className="p-8">{pkg.stars}</td>
                  <td className="p-8">
                    <a href={pkg.github} className="underline hover:no-underline focus:no-underline">{pkg.github}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
  }
  export default Packages