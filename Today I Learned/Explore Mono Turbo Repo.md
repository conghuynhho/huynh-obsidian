

### First look


1. Workspace task dependency with handy customization using this [strategy](https://turbo.build/repo/docs/core-concepts/monorepos/task-dependencies#from-arbitrary-workspaces)
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
2.  alsdkfjalsjdf