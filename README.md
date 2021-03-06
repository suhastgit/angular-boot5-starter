# AngularBoot5Starter

* Includes Bootstrap5 , @popperjs/core + Setup of Bootstrap nav , footer, containers etc.
* Uses Angular router.
* Uses [Saas](https://sass-lang.com) (SCSS) styling.
* Generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Usage

* Checkout code
* Install dependencies : `npm install`
* Build and host or [start development server](#development-server) to preview.

## Code Architecture

* Common components are grouped seperately.
* Product/ Base component is the main container for routes' contents
* App component only hosts header, footer and base component
* Assets includes site configs which is fed in header and footer component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
