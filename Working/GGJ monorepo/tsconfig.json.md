
#### `base.tsconfig.json`

```json
{
  "compilerOptions": {
    "strict": true, // maybe not 
    "allowJs": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
}
```



#### `nestjs` ---  api-skijan-vi ,  api-skijan

```json
{
  "display": "NestJS extend base"
  "extends": "./base.tsconfig.json"
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es2019",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./src",
    "incremental": true,
    "strictNullChecks": true,
  },
  "exclude": ["node_modules", "dist"]
}
```

**Version without extend base**
```json
{
  "display": "NestJS without base"
  "compilerOptions": {
    "allowJs": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
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
  "display": "NextJS extend base"
  "compilerOptions": {
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext", "es6"],
    "strict": true,
    "noEmit": true,
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


**Without extend base**

```json
{
  "display": "NextJS without base"
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext", "es6"],
    "strict": true,
    "noEmit": true,
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

### `react-lib`

```json
{
  "compilerOptions": {
    "target": "es5"
    "module": "ESNext"
    "lib": ["es6", "dom", "dom.iterable"],
    "jsx": "react-jsx"
    "jsxImportSource": "@emotion/react",
    "declaration": true,
    "declarationDir": "./dist",

    "strict": true,
    "noImplicitAny": false,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true ,
    "noImplicitThis": true,
    "alwaysStrict": true,

    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,

    "moduleResolution": "node",
    "types": ["@emotion/react/types/css-prop"],
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": [ "node_modules","dist", "examples", "rollup.config.js"]
}

```

```json

```
