describe('Google Page', () => {
    it('Should open main url and verify the title', () => {
        browser.url('https://google.com');
        expect(browser).toHaveTitle('Google');
    })
});
it('Should enter the text "wikipedia" in the search box', () => {
    const searchInput = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
    browser.pause(2000);
    searchInput.addValue('wikipedia');
    browser.keys('Enter');
});


it('Should enter Wikipedia site', () => {
    const element = $('#rso > div:nth-child(1) > div:nth-child(1) > div > div > div.yuRUbf > a > h3');
    browser.pause(2000);
    expect(element).toExist();
    element.click();
});

it('Should validate the opened site', () => {
    browser.url('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    browser.pause(2000);
    expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada');
});