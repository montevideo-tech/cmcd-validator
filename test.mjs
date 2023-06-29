import { Builder, By, Key, until } from 'selenium-webdriver';
import { assert } from 'chai';
import * as fs from 'fs';

describe('search', async function () {
    this.timeout(10000);
    let driver;

      // A helper function to check if an element with the given class exists
  const checkElementExists = async (className) => {
    const elements = await driver.findElements(By.className(className));
    console.log(elements)
    return elements.length > 0;
  };

    if (!fs.existsSync('./screenshots')){
        fs.mkdirSync('./screenshots');
    }

    // A helper function to start a web search
    const search = async (term) => {
        // Automate DuckDuckGo search
        await driver.get('https://montevideo-tech.github.io/cmcd-validator/');
        const searchBox = await driver.findElement(
            By.id('dropdown-basic-button'));
        searchBox.click();
        await driver.actions()
        .sendKeys(Key.ARROW_DOWN)
        .perform()
        await driver.actions()
        .sendKeys(Key.ENTER)
        .perform()
        const inputElement = await driver.findElement(By.name('manifest'));
        await inputElement.sendKeys('https://dash.akamaized.net/digitalprimates/fraunhofer/480p_video/heaac_2_0_with_video/Sintel/sintel_480p_heaac2_0.mpd');
        await inputElement.sendKeys(Key.ENTER);
        await new Promise(resolve => setTimeout(resolve, 6000));
        // await driver.findElement({id: 'dropdown-basic-button'}).sendKeys('Shaka').click();

        // searchBox.findElement(webdriver.By.css("option[value='0']")).click()
        
        // const sdfsd = await driver.findElement(By.id('dropdown-item')).click();

        // const searchBox = await driver.findElement(
        //     By.id('search_form_input_homepage'));
        // await searchBox.sendKeys(term, Key.ENTER);

        // // Wait until the result page is loaded
        // await driver.wait(until.elementLocated(By.css('#l')), 5500);

        // // Return page content
        // const body = await driver.findElement(By.tagName('body'));
        // return await body.getText();

        const elementExists = await checkElementExists('btn btn btn-danger');
        assert.isFalse(elementExists, 'Element with class "btn btn-danger" is present');


        const result = true;
        return result;
    };

    // Make sure the BROWSER env variable is set
    before(async function() {
        if (!process.env.BROWSER) {
            throw new Error('No BROWSER environment variable set')
        }
    });

    // Before each test, initialize Selenium and launch the browser
    beforeEach(async function() {
        // Microsoft uses a longer name for Edge
        let browser = process.env.BROWSER;
        if (browser == 'edge') {
            browser = 'MicrosoftEdge';
        }

        // Connect to service specified in env variable or default to 'selenium'
        const host = process.env.SELENIUM || 'selenium';
        const server = `http://${host}:4444`;
        driver = await new Builder()
            .usingServer(server)
            .forBrowser(browser)
            .build();
    });

    // After each test, take a screenshot and close the browser
    afterEach(async function () {
        if (driver) {
            // Take a screenshot of the result page
            const filename = this.currentTest.fullTitle()
                .replace(/['"]+/g, '')
                .replace(/[^a-z0-9]/gi, '_')
                .toLowerCase();;
            const encodedString = await driver.takeScreenshot();
            fs.writeFileSync(`./screenshots/${filename}.png`,
                encodedString, 'base64');

            // Close the browser
            await driver.quit();
        }
    });

    // Our test definitions
    // it('should search for "Selenium dev"', async function () {
    //     const content = await search('Selenium dev');
    //     assert.isTrue(content.includes('www.selenium.dev'));
    // });

    // it('should search for "Appium"', async function () {
    //     const content = await search('Appium');
    //     assert.isTrue(content.includes('appium.io'));
    // });

    it('Do playback and check CMCD Output', async function () {
        const content = await search('Mozilla');
        assert.isTrue(content);
    });

    // it('should search for "GitHub"', async function () {
    //     const content = await search('GitHub');
    //     assert.isTrue(content.includes('github.com'));
    // });

    // it('should search for "GitLab"', async function () {
    //     const content = await search('GitLab');
    //     assert.isTrue(content.includes('gitlab.com'));
    // });
});
