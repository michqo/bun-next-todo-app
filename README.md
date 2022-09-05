# Bun todo app

This is a Todo app using [Next.js](https://nextjs.org/) bootstrapped with Bun.

## Getting Started

### Install dependencies

```
bun install
```

### Start the dev server

```
bun dev
```

### If you get errors

Try running

```
bun bun
```

or

```
bun bun --use next
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

## Run with docker

### Build an image

```
docker build .
```

### Create and run a container

```
docker run -d -p 3000:3000 container_id_or_name
```

### Note

The image just runs the bun dev server.

## Screenshots

|                Desktop                |                 Mobile                  |
| :-----------------------------------: | :-------------------------------------: |
| ![screenshot](/assets/screenshot.png) | ![screenshot2](/assets/screenshot2.png) |
