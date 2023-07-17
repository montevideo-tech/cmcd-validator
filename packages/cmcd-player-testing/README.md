# CMCD Selenium Test

This project demonstrates how to perform automated testing using Selenium WebDriver to validate CMCD (Content Management and Control Data) queries.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Docker Compose: [Installation Guide](https://docs.docker.com/)


## Running the Tests

To execute the CI tests locally, follow these steps:

- Start the Docker containers and run the tests:
`docker-compose up --exit-code-from node`


The tests will launch the specified browser using Selenium WebDriver, navigate to the CMCD Validator page, enter the manifest URL, and validate the CMCD queries. The test results will be displayed in the console.

## Adding Test Cases

You can add more test cases by creating additional test functions within the `describe` block. Each test function should call the `search` function to perform the search and validation.

```javascript
it('My Test Case', function (done) {
  search('chrome')
    .then((content) => {
      assert.isTrue(content);
      done();
    })
    .catch((error) => {
      console.error('Error occurred during test execution:', error);
      done(error);
    });
});
```
## Error Handling
If any errors are encountered during the search and validation process, they will be logged to the console. The test execution will continue, but the test will be marked as failed if there are any errors.

