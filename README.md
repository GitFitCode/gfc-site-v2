## Setting up the project

## Project Loop pilots

This site describes a goal-first research/pilot direction for GitFitCode: start
with a project name and required goal, optionally add sources/services and
thread destinations, then review a saved brief. That brief can guide future
AI-assisted drafts and routing with human review, useful help, a next action,
and an honest project history and portfolio. The site includes the internal
`/project-loop` research/pilot overview for two pilots: the GitFitCode hub and
the UpAhead MVP.

Both pilots are selected for project tracking, and the tracking loop is under
implementation and validation. Research is private-first and invite-only; a
saved URL is not an authenticated connection, and AI routing and live
onboarding are not yet deployed.

### What you'll need

- [VSCode](https://code.visualstudio.com/) / [Intellij WebStorm](https://www.jetbrains.com/webstorm/)
- [Nodejs LTS](https://nodejs.org/en/) (Please check package.json for the latest supported Node version)
- [PnPM](https://pnpm.io) package manager

### Installing dependencies

```sh
pnpm i
```

### Setting up .env

- Create a `.env` file at the root of your project with the same variables as `.env.example`.
- Populate fields in the `.env` file.

  - Ask Sirrele, Pratik, Albert, or Dom for keys.


### Runing the project

```shell
pnpm start
```



## Development

### Commit message

When committing code to the repo, please follow the commit message guidelines/patterns set [here](https://github.com/conventional-changelog/commitlint#what-is-commitlint) and [here](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type).

## Deploying to Google Cloud

**1. Make sure you are authenticated to Gcloud and have permissions**

```shell
gcloud auth login
```

**2. Set target project as default**

```shell
gcloud config set project gfc-website-313010
```

**3. Create a production build**

```shell
pnpm run build
```

**4. Deploy**

```shell
gcloud app deploy
```
