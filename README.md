# Me'N'U

Small application to display recipes made with public API from https://www.themealdb.com/ website.

## Screenshots from running application

Application before search anything:
![Screenshot with application before search anything](1_start)

List with found recipes:
![Screenshot with list with found recipes](2_list_recipes)

Example of the searched single recipe:
![Screenshot with example of the searched single recipe](3_single_recipe)

## Technologies:
- HTML
- LESS (Bulma CSS framework)
- Angular 12
- for testing: Karma, Jasmine, Protractor 

### How to run application
Project requires to have installed `npm` and `Angular` version 12.
- Go to the root of this project
- Install dependencies: `npm install`
- Run server: `ng serve`
- Open browser with URL `localhost:4200` to see running application

### How to run unit tests
Project requires to have installed `npm` and `Angular` version 12.
- Go to the root of this project
- Run tests: `ng test`

### How to run e2e tests
Project requires to have installed `npm` and `Angular` version 12.
- Go to the root of this project
- Install dependencies: `npm install`
- Run server: `ng serve`
- Run selenium grid: `webdriver-manager start`
- Run protractor: `protractor e2e/protractor.conf.js`

## Where the name of app came from?
Name of the application `Me'N'U` (pronounce: "me and you") came from one of the episodes of How I Met Your Mother.

[1_start]: https://github.com/palprz/me-n-u/blob/master/screenshots/1_start.png
[2_list_recipes]: https://github.com/palprz/me-n-u/blob/master/screenshots/2_list_recipes.png
[3_single_recipe]: https://github.com/palprz/me-n-u/blob/master/screenshots/3_single_recipe.png
