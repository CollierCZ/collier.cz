# Svelte Kit blog

This is a basic blog powered by [Svelte Kit](https://kit.svelte.dev/) and using [TypeScript](https://www.typescriptlang.org/).
The articles are written in Markdown with Svelte integrated thanks to [mdsvex](https://mdsvex.com/).

## Run locally

To run the blog locally, first clone this repository.
Then install everything needed:

```bash
npm i
```

Then get the development server started and open:

```bash
npm run dev -- --open
```

(Leave out `-- --open` if you don't want it to open automatically in your browser.)

## Build for production

The production version currently works as a completely static site.
To create all the necessary files, run:

```bash
npm run build
```

To preview the site, run:

```bash
npm run preview
```

To serve the site in public, upload your built files to your server.
If using with [Platform.sh](https://platform.sh),
include the [`.platform` directory](../.platform) and adjust the `routes.yaml` file to fit your domain.
