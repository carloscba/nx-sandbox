# Generate UI lib
ng g @nrwl/angular:lib ui

# Add a component
ng g @nrwl/angular:component xyz --project ui

nx dep-graph

# see what's been affected by changes
ng affected:dep-graph

# run tests for current changes
ng affected:test

# run e2e tests for current changes
ng affected:e2e

# Nest

> Crear un nuevo modulo en nest
```
nx generate module modules/tasks --project=api
```