# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/90fb1c57-979c-42db-9d5d-da121cfafec5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/90fb1c57-979c-42db-9d5d-da121cfafec5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages

Push to the `github-pages` branch to run the GitHub Pages deployment workflow. The site is built with the repository name as its base path and deployed to:

https://sameraamar.github.io/bridges-peace-initiative-web/

In the repository settings, select **GitHub Actions** under **Pages > Build and deployment > Source** if it is not already selected.

If the `github-pages` environment restricts deployment branches, allow the `github-pages` branch under **Settings > Environments > github-pages**.

The GitHub Pages deployment is independent of Lovable, which remains connected to `main`. Keep migration changes on `github-pages` until they are ready to merge. The default local and Lovable build continues to use `/` as its base path.

#### Static pages and SEO

`npm run build:pages` pre-renders five pages in English (existing URLs), Arabic (`/ar/`), and Hebrew (`/he/`). Language links navigate to the equivalent translated page; the URL, rather than browser settings or saved preferences, determines the language. About sections use native expandable details so their full text is present and accessible without JavaScript.

The build emits per-page titles, descriptions, canonical/alternate language links, a sitemap, robots.txt, and a real 404 page. React hydrates the generated HTML for interactive navigation.

Build settings:

- `PAGES_BASE_PATH`: `/` locally, `/bridges-peace-initiative-web/` for the temporary Pages address.
- `VITE_SITE_URL`: canonical production origin, default `https://jusor-initiative.org`.
- `VITE_SITE_INDEXABLE`: defaults to `false` (noindex, follow) to avoid indexing the temporary copy.

Before migrating the domain, set `PAGES_BASE_PATH` to `/` and `VITE_SITE_INDEXABLE` to `true`, configure the Pages custom domain and DNS, then verify HTTPS, all 15 static URLs, canonical links, and the sitemap. Do not submit the staging sitemap to search engines.

### Lovable

Open [Lovable](https://lovable.dev/projects/90fb1c57-979c-42db-9d5d-da121cfafec5) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
