# testCafeStudyChallenger

<br>

**All scenarios for test are:**<br>
_'tests/challenger_test.js'_

**Automation test:**<br>
_I wrote automation in JS with Testcafe as requested<br>_
_I used PageObject and put all requests to API on a client_ <br>
_I wrote one test for each scenario described by the email._<br>

**Things I should do differently:**<br>
_Setup a lint for testcafe, I know there are plugins for this_<br>
_Put these tests running on a pipeline, I set up the basic for flow but since the tests are running locally doesn't make sense_<br>
_I created the scenarios as described, but from an automation strategy perspective, it doesn't make sense to validate API through the frontend, I could isolate the layers and test their functionality individually, and write a simple suite for e2e tests._<br>
_I also had no concerns about the data I manipulated, the tests must be written thinking about how the entities will be managed, always, avoiding the tests becoming flaky, for the demo I decided only take care of the delete, but for real projects hooks must be written._<br>
_In the module, to request the GET of the entity list, I could instead of rewriting the call all the time, use the method and avoid the code being duplicated._<br>
_In the main pageobject, I put some locators inside the methods, repeating, I confess that I didn't like it, but I also didn't like the way testcafe maps and saves the locators, but it's something I would change in the code, leaving methods without "magic numbers"._<br>
_Since JS doesn't have multiple returns, for delete I returned an array, there is probably a more elegant solution to the problem._<br>
_I didn't create more than one script for running, but to make this only requires add more profiles on config, like different ENVs, I will not take care of these "demo"._<br>
_On method verifyTextElementsOnTable, I decided to validate the text, instead the object exists since the text is the "goal" of my assertion_<br>
_For all scenarios we have API integration, depending on type of test, we could mock instead use real API._<br>

**About the apps:**<br>
_I had some problems running the frontend, I would put the apps inside a container, I don't know if it's part of the objective to have problems running, and the container would completely solve any related excuse._<br>

**Node version:**<br>
_v18.20.4_<br>

**Install dependencies:**<br>
_npm install_<br>

**Run automation:**<br>
_npm run test-chrome_<br>
