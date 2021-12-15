import windicss from 'https://deno.land/x/aleph_plugin_windicss@v0.0.2/plugin.ts'
import type { Config } from 'aleph/types'
import mdx from "./plugins/mdx.ts"

export default (): Config => ({
  plugins: [
    mdx(),windicss
  ]
})