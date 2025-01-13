# Hippocrates Hub

Hippocrates Hub is a dynamic blogging platform designed specifically for medical professionals, creating a space where physicians and healthcare experts can share their insights, publish articles, and engage with peer-generated content. The platform features medical news, clinical perspectives, and educational resources, all curated and contributed by healthcare professionals.

<!-- ## Screenshot -->

<!-- ![Hippocrates Hub home page](screenshot.png) -->

## Tech Stack

Next.js 14, React, Prisma, Postgres

<!-- Demo available at [https://next-fullstack-realworld-app.vercel.app/](https://next-fullstack-realworld-app.vercel.app/) -->

## Development

First, run the development server:

```shell
docker-compose up --build --force-recreate
```

Open `http://localhost:3000` with your browser to see the result.

## Production

```shell
# Build prod
docker compose -f docker-compose.production.yml build

# Up prod in detached mode
docker compose -f docker-compose.production.yml up -d
```

Open `http://localhost:3000`.

## Key Features

1. Authentication via Next-Auth
2. Login/ Register
3. Articles: Create, Edit, Delete
4. Filter articles by tag, author, favorited
5. Comments on articles
6. Favorite articles
7. Follow other users
8. i18n: English, Spanish Simplified

## References

- [realworld](https://github.com/gothinkster/realworld)
- [react-realworld-example-app](https://github.com/gardenofdev/react-realworld-example-app/)
