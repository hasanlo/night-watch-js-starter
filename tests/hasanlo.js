describe('hasanlo.com blog link', function() {
  before(browser => browser.url('https://hasanlo.com'));
  test('test hasanlo.com', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('میلاد حاجی حسنلو - توسعه دهنده‌ی نرم افزار')
      .assert.visible('h1[class=page-header]')
      .click('a[title=وبلاگم]')
      .waitForElementVisible('body')
      .assert.urlEquals('https://hasanlo.com/blog/public/')
      .assert.containsText('h1','نوشته‌های میلاد حسنلو')
  });
  after(browser => browser.end());
});
