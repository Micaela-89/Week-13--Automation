
# 'BECOME A QA AUTOMATION' -  Week-13: Automation.

This project consists of creating automation tests.

## Description
This project consists of creating automated UI tests for [Google](https://www.google.com/) and [Wikipedia](https://es.wikipedia.org/) web sites using WebDriver IO.

## Technology stack
* [Node.js](https://nodejs.org/es/docs/).
* [WebDriver IO](https://webdriver.io/docs/gettingstarted) for automated testing.
* [Google chrome](https://www.google.com/chrome/?brand=BNSD&gclid=Cj0KCQjw16KFBhCgARIsALB0g8LepNdLaZtxkPxgXo3piPweP7NjQQ76azzg9XDmbH5ZESeb_4kFTn4aAjCaEALw_wcB&gclsrc=aw.ds) is preferred
* [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor).

## Installation 

**After downloading the project from this repository, the following procedures are needed before tests can be run:**

 (You should use the following commands, either on the git or on the VS console)

* $ *npm install*
* $ *npm init* to create a package.Json
* $ *npm install @wdio/cli*
* $ *npx wdio config*

    *The package.Json should contain the following scripts:*

      "scripts": {
        "test": "npx wdio run ./wdio.conf.js"
      },

## Running the tests

You should use the following command, either on the git or on the VS terminal:

 * *npm run test* 

## Author
Micaela Casais
