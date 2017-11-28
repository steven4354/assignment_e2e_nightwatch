// Your code here ...

module.exports = {
  'Home test': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#pageIndex', 1000)
      .assert.containsText('h1', 'New User')
      .end();
  },


 'User creation': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#pageIndex', 1000)
      .saveScreenshot('screenshots/1.jpg')
      .setValue('input[name="fname"]', '')
      .setValue('input[name="lname"]', '')
      .setValue('input[name="email"]', '')
      .saveScreenshot('screenshots/2.jpg')
      .submitForm('#userForm')
      .waitForElementVisible('#pageShow', 3000)
      .assert.containsText('#firstName', '')
      .assert.containsText('#lastName', '')
      .assert.containsText('#email', '')
      .saveScreenshot('screenshots/3.jpg')
      .end();
  }



};
