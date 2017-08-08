#Kickle Cubicle

##Help Docs Overview

###Structure
https://scotch.io/tutorials/angularjs-best-practices-directory-structure

###Gulp
https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js

###Testing
https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1
http://jbavari.github.io/blog/2014/06/11/unit-testing-angularjs-services/

unit tests:
karma start


e2e testing:
start selenium web-dirver:
.\webdriver-manager start
then run protractor:
.\protractor test/conf.js


@ECHO OFF
set PATH=%PATH%;%CD%
"node_modules\.bin\ncu" %*


###Upgrading to Angular2:
https://medium.com/@gsari/upgrade-from-angularjs-to-angular-2-15f3179b7849

https://www.youtube.com/watch?v=ucUy0CoN57Q

ngUpgrade:

both runtimes (angular 1 and 2) are in the application 
recommended by google

Preperations:
+ use componets
+ adopt a feature based directory structure
+ use service instead of factory
+ unidirectional data flow
	switch to flux/ redux
+ consider using RxJs 
	angular uses observables exensively
+ write new components in typescript
+ don't learn Angular2 while migrating. create simple web app before that.

