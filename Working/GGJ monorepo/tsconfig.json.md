

#### `nestjs` ---  api-skijan-vi ,  api-skijan

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "allowJs": true,
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "target": "es2019",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./src",
    "incremental": true,
    "strictNullChecks": true,
    "plugins": [
      {
        "name": "@nestjs/swagger",
        "options": {
          "introspectComments": true
        }
      }
    ]
  },
  "exclude": ["node_modules", "dist"]
}
```


#### `nextjs` --- gui-skijan-vi, gui-skijan


```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "jsxImportSource": "@emotion/react",
    "incremental": true,
    "baseUrl": ".",
    "types": ["@emotion/react/types/css-prop"],
    "downlevelIteration": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```