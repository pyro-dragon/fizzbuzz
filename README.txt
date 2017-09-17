Hi there.
I have produced for this exercise both a flat JavaScript implementation as well as an AngularJS implementation.
I felt the need to produce both as most front-end JavaScript would be done in the context of a JavaScript framework. 

The flat JavaScript implementation shows the use of JavaScript classes to produced the desired fizzbuzz code as per the specification with minimal reliance of additional libraries. QUnit was used to unit test the code. The tests can be run by opening the 'unit-tests.html' file in a browser.

The AngualrJS implementation provides the required behaviour in an AngularJS context. A controller was used in place of a JavaScript class. The unit tests were written in Jasmine with Karma as a test runner. They require npm to install the required support libraries. A project file has been provided so all that is required is 'npm install' to install them and then './node_modules/karma/bin/karma start karma.conf.js' to run the unit tests.

