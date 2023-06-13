

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
- When using Yarn workspaces, all the packages within the monorepo share a common `node_modules` folder located at the root level. This means that dependencies are hoisted to the root `node_modules` directory, and each package within the workspace references those shared dependencies. This approach helps reduce duplication and ensures consistent versions of dependencies across packages.

- In a traditional monorepo setup with Yarn workspaces, all dependencies are hoisted to the root `node_modules` directory, which can lead to slower installation times and increased disk space usage.

Turbo Repo aims to address these issues by selectively swapping packages between the root `node_modules` and workspace-specific `node_modules` directories. It identifies frequently changing packages and keeps them in the root `node_modules`, while less frequently changing packages are placed in the workspace-specific directories. This approach reduces the installation time and optimizes the disk space usage.

**Conflict package version**
Scenario: when there is 2 project has the same package with different version
- Tested: the package will be store in 2 places (root node_modules and child node_modules)
	- Some package will be automatically resolved  by using the latest version.



### References
- https://microsoft.github.io/lage/docs/Tutorial/pipeline/
- 