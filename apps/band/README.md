This is a [Tina CMS](https://tina.io/) project.
With Immich image server [Immich](https://immich.app/).

## Local Development

Install the project's dependencies

```
pnpm install
```

Run the project locally:

```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
IMMICH_API_KEY=<get this from the Immich app>
IMMICH_BASE_URL=<host server>
```

Build the project:

```bash
pnpm build
```

## Learn More

To learn more about Tina, take a look at the following resources:

- [Tina Docs](https://tina.io/docs)
- [Getting started](https://tina.io/docs/setup-overview/)
- [Tina Github repository](https://github.com/tinacms/tinacms)

You can check out  - your feedback and contributions are welcome!

## [Deploy on Vercel](https://tina.io/guides/tina-cloud/add-tinacms-to-existing-site/deployment/)
