

## First look


### 1. Workspace task dependency with handy customization using this [strategy](https://turbo.build/repo/docs/core-concepts/monorepos/task-dependencies#from-arbitrary-workspaces)

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    // Explicit workspace-task to workspace-task dependency
    "frontend#deploy": {
      "dependsOn": ["ui#test", "backend#deploy", "backend#health-check"]
    }
  }
}
```


### 2. How `workspaces` work with dependencies in node_modules
When using Yarn workspaces, all the packages within the monorepo share a common `node_modules` folder located at the root level. This means that dependencies are hoisted to the root `node_modules` directory, and each package within the workspace references those shared dependencies. This approach helps reduce duplication and ensures consistent versions of dependencies across packages.


### References
- https://microsoft.github.io/lage/docs/Tutorial/pipeline/
- 