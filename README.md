# Apod

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

# Show Demo

https://pepma.github.io/apod/apod

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Publish to GitHub
Step 1
```
ng build --prod --base-href "https://pepma.github.io/apod/"
```
Step2
```
npx angular-cli-ghpages --dir=dist/apod
```

