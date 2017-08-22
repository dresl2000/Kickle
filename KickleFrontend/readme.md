# Kickle Cubicle

## Help Docs Overview

### Structure
https://scotch.io/tutorials/angularjs-best-practices-directory-structure

### Gulp
https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js

### Testing
https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1
http://jbavari.github.io/blog/2014/06/11/unit-testing-angularjs-services/

##unit tests:
karma start


##e2e testing:
start selenium web-dirver:
.\webdriver-manager start
then run protractor:
.\protractor test/conf.js

If webdriver doesn't start up, try:
node .\node_modules\protractor\bin\webdriver-manager update

@ECHO OFF
set PATH=%PATH%;%CD%
"node_modules\.bin\ncu" %*


## Upgrading to Angular2:
https://medium.com/@gsari/upgrade-from-angularjs-to-angular-2-15f3179b7849

http://www.alainchautard.com/how-to-migrate-from-angular-1-to-angular-2/

https://www.youtube.com/watch?v=ucUy0CoN57Q

https://angular.io/guide/upgrade

https://blog.thoughtram.io/angular/2015/10/24/upgrading-apps-to-angular-2-using-ngupgrade.html


ngUpgrade:

both runtimes (angular 1 and 2) are in the application 
recommended by google

Preperation Phase:
* use components
* remove $watch
* you do not need to call $apply(), regardless of whether it is in AngularJS on Angular. The UpgradeModule does it for us. You can still call $apply() so there is no need to remove such calls from existing code. Those calls just trigger additional AngularJS change detection checks in a hybrid application.
* isolate scope
* adopt a feature based directory structure
* use service instead of factory
* unidirectional data flow
	switch to flux/ redux
* consider using RxJs 
	angular uses observables exensively
* write new components in typescript
* **don't learn Angular2 while migrating. create simple web app before that**
* avoid $compile, replace, priority

Change Structure to:
app
|- components
  |- productDetail
  | |- productDetail.js
  | |- productDetail.css
  | |- productDetail.html
  | |- productDetail.spec.js
  |- productList
  |- checkout
  |- wishlist


Upgrade Phase:
1. port services and downgrade them. start with services with few dependencies
2. port components and downgrade them
3. deprecate angular 1: use angular 4 root component, bootstrap angular 2 and its injector, eliminate angular 1.x registrations

You can only upgrade AngularJS component directives to Angular.

