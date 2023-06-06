


[Official docs](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser)

### Separate variable for each enviroments

Next.js allows you to set defaults in `.env` (all environments), `.env.development` (development environment), and `.env.production` (production environment).

`.env.local` always overrides the defaults set.

### How to use it with typescript

1. Create new `env.d.ts` file in the root directory.
```ts
ENV="local"
SLACK_TOKEN="Halksdjfljwe012931jadhfj"
GIT_TOKEN="alkjsdflajksd10923412838912"
```
2. Include it in `tsconfig` file
```json
  "include": ["env.d.ts", ...],
```

### Runtime Config (Considerable as deprecated)

Official nextJS [link](https://nextjs.org/docs/app/api-reference/next-config-js/runtime-configuration)

**Note**: This feature is considered legacy and does not work with [Automatic Static Optimization](https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization), [Output File Tracing](https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files), or [React Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components). Please use [environment variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables) instead to avoid initialization overhead.



