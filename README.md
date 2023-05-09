

### Installation

node.js und npm: https://nodejs.org/en/download/
```
$ npm install --global yarn
```

### Local Development

```
$ npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
$ npm run serve
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

PowerShell:

```
$ cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'
```

Windows:

```
$ cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

Bash:

```
$ GIT_USER=<GITHUB_USERNAME> yarn deploy
```

If you are using GitHub pages for hosting, these commands are a convenient way to build the website and push to the `gh-pages` branch.
