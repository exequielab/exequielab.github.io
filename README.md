# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## requirements
eslint



## develop

### security

check 
```bash
https://github.com/<repository>/security/dependabot
```



## preview

build & preview

```sh
yarn build
yarn preview
```



### docker - develop 

```sh
docker build -t exequielab .
docker run -p 5000:3000 exequielab   
# -> CMD ->  npm run start ->  node server -> localhost:3000
```

### deploy

#### deploy github

```sh
git commit -a --amend -m "[reason]: message" && git push -f
```

- github config env
- Environments / Configure develop-deploy / protection rules / Deployment branches
- github notification
