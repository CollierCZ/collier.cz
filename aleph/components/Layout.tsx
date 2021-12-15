import React from 'react'

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({children, title}: Props) => {
  return (
  <div className="page">
    <head>
      <title>{title || "Aaron Collier"}</title>
      <meta name="viewport" content="width=device-width" />
    </head>
    <div className="flex flex-row items-center justify-center my-8 h-48">
      <div className="w-48">
        <img src="/avatar.png" />
      </div>
      <div className="w-128 pl-8">
        <h1 className="text-5xl font-extrabold leading-relaxed pb-8">Aaron Collier</h1>
        <p>Originally from Lexington and now residing in Brno, Aaron is an educator, editor, and elucidator. <a href="https://collier.cz/aaron-collier" className="underline hover:no-underline focus:no-underline">More about Aaron</a>.</p>
      </div>
    </div>
    <div className="flex justify-center py-8">
      <div className="max-w-80ch">
        {children}
      </div>
      </div>
    </div>
  )
}

export default Layout;