# Apod

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

# Show Demo

https://pepma.github.io/apod/apod

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Publish to GitHub
Step 1
```
ng build --prod --base-href "https://pepma.github.io/apod/"
```
Step2
```
npx angular-cli-ghpages --dir=dist/apod
```

