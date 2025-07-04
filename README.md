<!-- @format -->

<h1 align="center">SauceKudasai</h1>

![SauceKudasai](public/SauceKudasai.png)

> A Frontend Search Engine that fetches anime info based on the image provided using <a href="https://github.com/soruly/trace.moe" target="_blank">trace.moe</a> and <a href="https://anilist.gitbook.io/anilist-apiv2-docs/" target="_blank">AniList</a> API

## Requirements

### Development: 
- Node.JS

### Deployment:
- docker

## Development

```sh
npm install
npm run dev
```

## Deployment via docker:

Using image:
```sh
docker compose up -d
```

Building image:
```sh
docker compose -f docker-compose-build.yml up -d
```

## Author

Original: **[Ayush Gupta](https://github.com/ayushgptaa)**<br>
Modified by: **[Kizuren](https://github.com/Kizuren)**

Original repository: https://github.com/ayushgptaa/SauceKudasai