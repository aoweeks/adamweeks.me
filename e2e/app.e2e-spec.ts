import { AdamWeeksPage } from './app.po';

describe('adam-weeks App', function() {
  let page: AdamWeeksPage;

  beforeEach(() => {
    page = new AdamWeeksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
