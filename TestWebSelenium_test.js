
Feature('TestWebSelenium');

Scenario('test something', (I) => {
	I.amOnPage('https://juegos-staging.personal.com.ar');
    I.waitForElement('#__next > header > div > div.Menustyles__ActionsContainerStyled-i7j8ux-0.eROpZb > button');
	I.click('#__next > header > div > div.Menustyles__ActionsContainerStyled-i7j8ux-0.eROpZb > button');
	I.waitForVisible('#loginIframe', 20);
	 within({frame: "#loginIframe"}, () => {
        I.waitForVisible('#div-card', 30);
        I.waitForVisible('#idToken1', 30);
        //I.waitForElement('#idToken1', 30);
        I.fillField('#idToken1', '1140370981');
        I.fillField('#idToken2', '1469');
        I.click('#loginButton_0');
      });
	
	I.waitForVisible("//button[@class='jss46 jss61 jss112 jss63 jss66 button-dropdown DropMenustyles__ButtonStyled-sc-1c0i8un-0 cnAMbp']");
	I.click("//button[@class='jss46 jss61 jss112 jss63 jss66 button-dropdown DropMenustyles__ButtonStyled-sc-1c0i8un-0 cnAMbp']");
	I.waitForElement("#dropMenu > div > div > div > div > ul > nav:nth-child(2) > div > div.jss157.jss204 > span");
	I.click("#dropMenu > div > div > div > div > ul > nav:nth-child(2) > div > div.jss157.jss204 > span");
	
	I.waitForElement('#__next > header > div > div.Menustyles__ActionsContainerStyled-i7j8ux-0.jgdWSC > div > button', 30);
	I.waitForText('Mi biblioteca', 20);
    I.see('Mi biblioteca');
	
});
