// Your code here ...

module.exports = {
  // 'Home test screenshot': browser => {
  //   browser
  //     .url(browser.launchUrl)
  //     .saveScreenshot('screenshots/0.jpg')
  //     .end();
  // },

/*
 'User creation': browser => {
    browser
      .url(browser.launchUrl)
//      .waitForElementVisible('#pageIndex', 1000)
      .saveScreenshot('screenshots/1.jpg')
      .setValue('input[name="fname"]', '')
      .setValue('input[name="lname"]', '')
      //      .waitForElementVisible('#pageIndex', 1000)
      //      .assert.containsText('h1', 'New User')
      .setValue('input[name="email"]', '')
      .saveScreenshot('screenshots/2.jpg')
      .submitForm('#userForm')
      .waitForElementVisible('#pageShow', 3000)
      .assert.containsText('#firstName', '')
      .assert.containsText('#lastName', '')
      .assert.containsText('#email', '')
      .saveScreenshot('screenshots/3.jpg')
      .end();
  },
*/

  'Sign in works': browser => {
     browser
       .url(browser.launchUrl)
 //      .waitForElementVisible('#pageIndex', 1000)
       .click('ul li:nth-child(3)')
       .saveScreenshot('screenshots/1.jpg')
       .setValue('input[type="email"]', 'dave.l78@yahoo.com')
       .setValue('input[type="password"]', 'cdef1234')
       .saveScreenshot('screenshots/2.jpg')
       .submitForm('form')
       .waitForElementNotVisible('.button-oo-small', 6000, true, () => {
         browser.saveScreenshot('screenshots/3.jpg')
         browser.click('label:nth-child(3) input', () => {
           browser.saveScreenshot('screenshots/4.jpg')
         })
       })
       //.click('.track-label-wrapper label:nth-child(3)')
       //.click('label input[value="javascript"]')
       //.click('label')
       //.waitForElementVisible('.js-unit-group-name', 5000)
       //.saveScreenshot('screenshots/4.jpg')
       // .submitForm('#userForm')
       // .waitForElementVisible('#pageShow', 3000)
       // .assert.containsText('#firstName', '')
       // .assert.containsText('#lastName', '')
       // .assert.containsText('#email', '')
       // .saveScreenshot('screenshots/3.jpg')
       .end();
   }

};
