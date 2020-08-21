# night-watch-js-starter
night watch js project starter

Nightwatch.js example tests which run against the hasanlo.com, using Firefox.

## 1. Install Firefox
Visit the Mozilla Firefox website: https://www.mozilla.org/en-US/firefox/new/

## 2. git clone
This will clone the project, install Nightwatch and also the GeckoDriver which is required to interact with the Firefox browser.
No Selenium Server is required.

```sh
$ git clone https://github.com/hasanlo/night-watch-js-starter.git
$ cd nightwatch-website-tests
$ npm install
```

## 3. Run tests
To run the tests using Firefox simply run the command:

```sh
$ npm test
```


## Run tests headless
To run the tests healess using Firefox simply run the command:

```sh
$ npm run-script test-cli
```

## generate report
To generate report html file simply run the command:

```sh
$ npm run-script report
```

* you can change theme in package.json file

## Geckodriver documentation
Geckodriver is a proxy for using [W3C WebDriver](https://www.w3.org/TR/webdriver1/)-compatible clients to interact with Gecko-based browsers, such as Firefox.

Documentation is available at:
https://firefox-source-docs.mozilla.org/testing/geckodriver/index.html