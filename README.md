# Payload Tailwind v4 Template (Payload CMS)

A starter template that combines Payload CMS with Next.js and Tailwind CSS v4. Includes:

- Payload CMS (configured for Vercel/Postgres)
- Tailwind CSS v4 (preconfigured)
- SystemThemeScript for theme-aware favicons and data-theme support
- Straightforward deployment instructions for Vercel

## Quick start

1. Clone the repo

   git clone https://github.com/sagarmusabbir/payload-bracketui.git
   cd payload-bracketui

2. Copy environment variables

   cp .env.example .env
   - Set `POSTGRES_URL`, `PAYLOAD_SECRET`, and `BLOB_READ_WRITE_TOKEN` (if using blob storage)

3. Install and run locally

   pnpm install
   pnpm dev

4. Open http://localhost:3000 and visit /admin to create your first admin user.

## Theming & Favicons — SystemThemeScript ✅

This project includes `SystemThemeScript` (in `src/utils/SystemThemeScript.tsx`) which:

- Injects media-specific favicon links (light/dark SVGs) into the document head
- Sets `data-theme="dark"|"light"` on the `<html>` element based on system preference
- Updates a fallback non-media favicon linking to the correct themed SVG

Usage:

- The script is already included in the frontend root layout (`src/app/(frontend)/layout.tsx`).
- To change icons, update `public/favicon-light.svg`, `public/favicon-dark.svg`, and `public/favicon.svg`.
- For pixel-perfect raster fallbacks, add PNGs and an `.ico` to `public/` and register them in `src/payload.config.ts` under `admin.meta.icons` with `sizes` and `media` attributes as needed.

## Tests & Build

- Generate Payload types (after collection changes):

  pnpm run generate:types

- Run unit/integration tests (Vitest):

  pnpm run test:int

  If tests fail due to missing `dotenv`, install it as a dev dependency:

  pnpm add -D dotenv

- Run end-to-end (Playwright):

  pnpm run test:e2e

- Build for production:

  pnpm run build

## Deployment

### Vercel (recommended)

- Click the Deploy with Vercel button in the original template or connect your forked repo to Vercel.
- Set the required environment variables: `PAYLOAD_SECRET`, `POSTGRES_URL`, `BLOB_READ_WRITE_TOKEN`.
- Build command: `pnpm run ci` (runs migrations and build).


## Notes & Maintenance

- Lint warnings are present for unused variables in a few files — run `pnpm run lint` and clean up as desired.
- The `SystemThemeScript` provides theme consistency between browser UI and app theme; tweak it in `src/utils/SystemThemeScript.tsx` if you need custom behavior.

---

If you'd like, I can also:

- Generate standard PNG/ICO favicon fallbacks and add `admin.meta.icons` entries for them, or
- Add a CI job that runs lint/tests and builds the app on push.

Enjoy building with Payload + Tailwind v4! 🎯

## Quick start

Click the 'Deploy' button above to spin up this template directly into Vercel hosting. It will first prompt you save this template into your own Github repo so that you own the code and can make any changes you want to it.

Set up the following services and secrets and then once the app has been built and deployed you will be able to visit your site at the generated URL.
From this point on you can access your admin panel at `/admin` of your app URL, create an admin user and then click the 'Seed the database' button in the dashboard to add content into your app.

### Services

This project uses the following services integrated into Vercel which you will need to click "Add" and "Connect" for:

Neon Database - Postgres-based cloud database used to host your data

Vercel Blob Storage - object storage used to host your files such as images and videos

The connection variables will automatically be setup for you on Vercel when these services are connected.

#### Secrets

You will be prompted to add the following secret values to your project. These should be long unguessable strong passwords, you can also use a password manager to generate one for these.

PAYLOAD_SECRET - used by Payload to sign secrets like JWT tokens

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `POSTGRES_URL` and `BLOB_READ_WRITE_TOKEN` from your Vercel project to your `.env` if you want to use Vercel Blob and the Neon database that was created for you.

   > _NOTE: If the connection string value includes `localhost` or `127.0.0.1`, the code will automatically use a normal postgres adapter instead of Vercel._. You can override this functionality by setting `forceUseVercelPostgres: true` if desired.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.


## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

## Working with Postgres

Postgres and other SQL-based databases follow a strict schema for managing your data. In comparison to our MongoDB adapter, this means that there's a few extra steps to working with Postgres.

Note that often times when making big schema changes you can run the risk of losing data if you're not manually migrating it.

### Local development

Ideally we recommend running a local copy of your database so that schema updates are as fast as possible. By default the Postgres adapter has `push: true` for development environments. This will let you add, modify and remove fields and collections without needing to run any data migrations.

If your database is pointed to production you will want to set `push: false` otherwise you will risk losing data or having your migrations out of sync.

#### Migrations

[Migrations](https://payloadcms.com/docs/database/migrations) are essentially SQL code versions that keeps track of your schema. When deploy with Postgres you will need to make sure you create and then run your migrations.

Locally create a migration

```bash
pnpm payload migrate:create
```

This creates the migration files you will need to push alongside with your new configuration.

On the server after building and before running `pnpm start` you will want to run your migrations

```bash
pnpm payload migrate
```

This command will check for any migrations that have not yet been run and try to run them and it will keep a record of migrations that have been run in the database.


## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).
# JamdaniBazaar.com
