require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe ('login form', function  (){
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts( { implicit: 5000 } );
    });

    it('should login with correct credentials', async function (){
        
        await driver.get('https://www.apc.com/shop/us/en/tools/ups_selector/');
        await driver.findElement(By.xpath("//label[contains(@class, 'FlowSelector') and text()='Home, Home Office and Small Business']")).click();
        await driver.findElement(By.xpath("//button[contains(@class, 'FlowSelector_btnFlowSelection') and child::span[text()='Configure by Load']]")).click();
        await driver.findElement(By.xpath("//input[contains(@class, 'CustomTextField_seCustomInput')]")).sendKeys('600');
        await driver.findElement(By.xpath("//a[contains(@class, 'SeButton_primary') and child::span[text()='Continue']]")).click();
        
        let title = await driver.getTitle();
        assert.equal(title, 'APC UPS Selector/Calculator - Find the Correct Battery Backup');
    });
    after(() => driver && driver.quit());
    

});