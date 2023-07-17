import { Builder, By, Key } from 'selenium-webdriver';
import { assert } from 'chai';
import { CMCDQueryValidator } from '@montevideo-tech/cmcd-validator';

describe('search', function () {
  this.timeout(10000);
  let driver;


  const selectPlayer = async (playerName) => {
    // Find the dropdown button
    const dropdownButton = await driver.findElement(By.id('dropdown-basic-button'));
    // Click the dropdown button to open the options
    await dropdownButton.click();
    
    // Find the desired option by its text
    const option = await driver.findElement(By.xpath(`//a[@data-rr-ui-dropdown-item and text()='${playerName}']`));
    
    // Click the option to select it
    await option.click();
  };  

  // Function to perform the search and validate CMCD queries
  const search = async (term) => {
    // Navigate to the CMCD Validator page
    await driver.get('https://montevideo-tech.github.io/cmcd-validator/');

    // Select the desired player from the dropdown
    await selectPlayer(process.env.PLAYER);

    // Enter the manifest URL
    const inputElement = await driver.findElement(By.name('manifest'));
    await inputElement.sendKeys('https://dxclj9vp3m44c.cloudfront.net/hls/Costa_Rica_144.m3u8');
    await inputElement.sendKeys(Key.ENTER);

    // Wait for the results to load
    await new Promise((resolve) => setTimeout(resolve, 6000));

    // Find all the buttons and retrieve their text to get the requests
    const buttons = await driver.findElements(By.className('data-btn'));
    let result = true;

    for (const button of buttons) {
      const text = await button.getText();

      // Validate the CMCD query
      const validatorOutput = CMCDQueryValidator(text);

      if (validatorOutput.errors.length > 0) {
        // Log the errors
        for (const error of validatorOutput.errors) {
          console.error('Error:', error);
        }
        // Set the result to false to indicate test failure
        result = false;
      }

      // Log the warnings
      for (const warning of validatorOutput.warnings) {
        console.warn('Warning:', warning);
      }
    }

    return result;
  };

  beforeEach(async function () {
    try {
      // Set up the Selenium WebDriver before each test

      const host = process.env.SELENIUM || 'localhost';
      const server = `http://${host}:4444`;
      driver = await new Builder().usingServer(server).forBrowser('chrome').build();
    } catch (error) {
      console.error('Error occurred during browser initialization:', error);
      throw error;
    }
  });

  afterEach(async function () {
    try {
      // Clean up the Selenium WebDriver after each test
      if (driver) {
        await driver.quit();
      }
    } catch (error) {
      console.error('Error occurred during test cleanup:', error);
      throw error;
    }
  });

  it('Do playback and check CMCD Output', function (done) {
    // Execute the search and validate the CMCD queries
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

});
