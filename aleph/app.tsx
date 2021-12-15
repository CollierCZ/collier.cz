import React, { ComponentType } from 'react'
import { MDXProvider } from 'https://esm.sh/@mdx-js/react@2.0.0-ci.53?target=deno'

import Layout from "./components/Layout.tsx"

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  console.log(Page)
  return (
    <Layout title={Page.meta?.title}>
      <main>
        <MDXProvider components={{
          h2: "h6"
        }}>
          <Page {...pageProps} />
        </MDXProvider>
      </main>
    </Layout>
  )
}
