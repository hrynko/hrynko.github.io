# hrynko.github.io

[Hrynko](https://github.com/hrynko)'s personal website, which is powered by Jamstack and is based on Astro.

## Development

There are no special prerequisites other than the `node@20` environment. Once the project repository is cloned and the dependencies are installed, the development server can be started with the `dev` script (see [package.json](./package.json)).

## Deployment

![GitHub workflow status](https://img.shields.io/github/actions/workflow/status/hrynko/hrynko.github.io/gh-pages-deploy.yml)
[![Website state](https://img.shields.io/website?url=https%3A%2F%2Fhrynko.github.io&label=hrynko.github.io)](https://hrynko.github.io)

There is a [GitHub Actions workflow](.github/workflows/gh-pages-deploy.yml) configured to automatically build and deploy to GitHub Pages when a push to the `main` branch occurs. The site itself is reachable at https://hrynko.github.io/.
