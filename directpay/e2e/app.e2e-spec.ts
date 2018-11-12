import { DirectpayPage } from './app.po';

describe('directpay App', function() {
  let page: DirectpayPage;

  beforeEach(() => {
    page = new DirectpayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
